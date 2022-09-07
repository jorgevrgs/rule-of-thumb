import omit from 'lodash.omit';
import type { WithId } from 'mongodb';
import type { CelebrityCollectionType } from '../interfaces';

export class CelebrityDto {
  'celebrityId': string;
  'name': string;
  'picture': string;
  'description': string;
  'lastUpdated': string;
  'category': string;
  'active': boolean;
  'votes': {
    positive: number;
    negative: number;
  };

  constructor(params: Partial<WithId<CelebrityCollectionType>>) {
    Object.assign(this, {
      celebrityId: params._id,
      ...omit(params, ['_id']),
    });
  }
}
