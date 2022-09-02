import { IMAGES_COLLECTION } from './contants';
import { getBucket } from './mongo.client';

export async function getPictureStream(pictureName: string) {
  const bucket = await getBucket(IMAGES_COLLECTION);

  return bucket.openDownloadStreamByName(pictureName);
}
