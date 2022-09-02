// @ts-check

import { createReadStream, readdirSync } from 'fs';
import { join } from 'path';
import { getBucket, getClient } from './client.mjs';
import { assetsFolder } from './constants.mjs';

console.log('Starting seed...');

/**
 *
 * @param {string} file name of the file to upload
 * @param {import('mongodb').GridFSBucket} bucket
 */
function uploadFileToGridFs(file, bucket) {
  console.log('Uploading file:', file);

  return new Promise((res, rej) => {
    createReadStream(join(assetsFolder, 'pictures', file))
      .pipe(bucket.openUploadStream(file))
      .on('error', rej)
      .on('finish', res);
  });
}

async function seedGridFS() {
  const bucket = await getBucket('images');

  // upload all files in /images/pictures to the bucket
  const files = readdirSync(join(assetsFolder, 'pictures'));
  console.log({ files });
  for (const file of files) {
    await uploadFileToGridFs(file, bucket);
  }

  console.log('Uploaded all files');
}

async function main() {
  const client = await getClient();

  await seedGridFS();

  return client;
}

main()
  .then((client) => client.close())
  .catch(console.error);
