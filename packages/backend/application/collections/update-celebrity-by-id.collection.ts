import type { UpdateFilter } from 'mongodb';
import { ObjectId } from 'mongodb';
import type { CelebrityCollectionType } from '../../domain';
import { CELEBRITIES_COLLECTION, CelebrityDto } from '../../domain';
import { getCollection } from '../clients';

export async function updateCelebrityByIdCollection(
  id: string,
  filter: UpdateFilter<CelebrityCollectionType> = {}
) {
  const collection = await getCollection<CelebrityCollectionType>(
    CELEBRITIES_COLLECTION
  );

  const data = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    filter,
    { returnDocument: 'after' }
  );

  if (!data.value) {
    throw new Error('NotFound');
  }

  return new CelebrityDto(data.value);
}
