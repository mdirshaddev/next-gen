import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  return new Response(
    JSON.stringify({ status: 'API is running and hosted on vercel' }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
}
