// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NavLinks } from 'domain/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<NavLinks>
) {
  res.status(200).json([
    { name: 'Past Trials', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Login / Sign Up', href: '#' },
  ]);
}
