import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.WEATHER_API_URL!;
const API_KEY = process.env.WEATHER_API_KEY!;

export async function GET(
  req: NextRequest,
) {
  const searchParams = req.nextUrl.searchParams;
  const location = searchParams.get('location');

  if (!location) {
    return NextResponse.json(
      { message: '缺少 location 参数' },
      { status: 400 },
    );
  }

  const response = await fetch(
    `${BASE_URL}/v7/weather/now?location=${location}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-QW-Api-Key': API_KEY,
      },
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
