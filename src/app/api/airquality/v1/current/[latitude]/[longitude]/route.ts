import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.WEATHER_API_URL!;
const API_KEY = process.env.WEATHER_API_KEY!;

export async function GET(
  req: NextRequest,
  { params }: { params: { latitude: string; longitude: string } }
) {
  const { latitude, longitude } = await params;

  if (!latitude || !longitude) {
    return NextResponse.json({ error: '经纬度参数不完整' }, { status: 400 });
  }
  
  const response = await fetch(
    `${BASE_URL}/airquality/v1/current/${latitude}/${longitude}`,
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
