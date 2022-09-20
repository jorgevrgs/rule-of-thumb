import { NextApiRequest, NextApiResponse } from 'next';

export function tryCatchAsync<T>(
  cb: (req: NextApiRequest, res: NextApiResponse<T>) => Promise<void>
) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    try {
      cb(req, res);
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : 'Bad Request',
      });
    }
  };
}
