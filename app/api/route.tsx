import { NextResponse } from 'next/server';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');

  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 });
  }

  const response = await fetch(`${API_URL}&s=${encodeURIComponent(title)}`);
  const data = await response.json();

  return NextResponse.json(data);
}