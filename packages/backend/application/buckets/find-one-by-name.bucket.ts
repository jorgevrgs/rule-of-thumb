import { getPictureStream } from '../clients';

export async function findOneByNameBucket<T>(fileName: string) {
  return getPictureStream(fileName) as unknown as T;
}
