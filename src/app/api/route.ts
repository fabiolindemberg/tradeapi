// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from 'next/server';

type Data = {
  message: string
}

export async function GET(
  req: NextRequest
) {
  return NextResponse.json({ hello: 'Next.js' });
}
