type RequestConfig = RequestInit & {
  params?: Record<string, string | number | undefined>;
  timeout?: number;
};

function buildUrl(
  path: string,
  params?: RequestConfig['params'],
) {
  const url = new URL(path, window.location.origin);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
}

export async function request<T>(
  path: string,
  config?: RequestConfig,
): Promise<T> {
  const {
    params,
    timeout = 10000,
    headers,
    ...rest
  } = config || {};

  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(buildUrl(path, params), {
      ...rest,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(
        `请求失败: ${response.status}`,
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof DOMException) {
      if (error.name === 'AbortError') {
        throw new Error('请求超时');
      }
    }

    throw error;
  } finally {
    clearTimeout(timer);
  }
}
