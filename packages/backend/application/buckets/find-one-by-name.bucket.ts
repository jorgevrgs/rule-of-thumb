import { getPictureStream } from '../../infrastructure';

export async function findOneByNameBucket<T>(fileName: string) {
  return getPictureStream(fileName) as unknown as T;
}
