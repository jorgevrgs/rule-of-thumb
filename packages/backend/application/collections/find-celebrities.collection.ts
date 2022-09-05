import omit from 'lodash.omit';
import { Document, Filter } from 'mongodb';
import { CELEBRITIES_COLLECTION, CelebrityCollectionType } from '../../domain';
import { getCollection } from '../clients';

export async function findCelebritiesCollection<T>(
  filter: Filter<Document> = {}
) {
  const collection = await getCollection(CELEBRITIES_COLLECTION);

  const data = (await collection
    .find(filter)
    .toArray()) as unknown as CelebrityCollectionType[];

  const response = data.map((celebrity) => {
    return {
      celebrityId: celebrity._id.toString(),
      ...omit(celebrity, ['_id']),
    };
  });

  return response as unknown as T;
}
