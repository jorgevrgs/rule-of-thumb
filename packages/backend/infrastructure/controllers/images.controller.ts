import assert from 'assert';
import { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';
import { findOneByNameBucket } from '../../application';

export async function getImageByNameController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id: fileName } = req.query;

  if (!fileName || Array.isArray(fileName)) {
    res.status(400).json({ message: 'Filename is required' });

    return;
  }

  const file = await findOneByNameBucket<NodeJS.ReadableStream>(
    fileName.replace(/.webp$/, '.png')
  );

  const output = sharp().webp({ quality: 80 }).resize({
    fit: 'contain',
    width: 300,
    height: 300,
  });

  res.setHeader('Content-Type', 'image/webp');
  file.pipe(output).pipe(res);
}

export async function getCoverByNameController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id: fileName } = req.query;

  assert(fileName, 'Filename is required');
  assert(typeof fileName === 'string', 'Filename must be a string');

  const file = await findOneByNameBucket<NodeJS.ReadableStream>(
    fileName.replace(/.webp$/, '.png')
  );

  const output = sharp()
    .webp({ quality: 80 })
    .resize({
      fit: 'cover',
      width: 1280,
      height: 720,
    })
    .extend({
      background: { r: 255, g: 255, b: 255, alpha: 0.8 },
    });

  res.setHeader('Content-Type', 'image/webp');
  file.pipe(output).pipe(res);
}
