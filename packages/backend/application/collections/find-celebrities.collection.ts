import type { CelebritiesType } from '@app/shared';
import { Document, Filter } from 'mongodb';
import type { CelebrityCollectionType } from '../../domain';
import { CELEBRITIES_COLLECTION, CelebrityDto } from '../../domain';
import { getCollection } from '../clients';

export async function findCelebritiesCollection(
  filter: Filter<Document> = {}
): Promise<CelebritiesType> {
  const collection = await getCollection<CelebrityCollectionType>(
    CELEBRITIES_COLLECTION
  );

  const data = await collection.find(filter).toArray();

  const response = data.map((celebrity) => {
    return new CelebrityDto(celebrity);
  });

  return response;
}
