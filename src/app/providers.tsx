'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  // 使用 useState 确保 QueryClient 只创建一次
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 2,
            staleTime: 60 * 1000, 
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* 生产环境中建议按需引入 Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
