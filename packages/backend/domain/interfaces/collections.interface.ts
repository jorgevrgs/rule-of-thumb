import type { ObjectId } from 'mongodb';

export interface CelebrityCollectionType {
  _id: ObjectId;
  active: boolean;
  category: string;
  description: string;
  lastUpdated: string;
  name: string;
  picture: string;
  votes: {
    negative: number;
    positive: number;
  };
}
