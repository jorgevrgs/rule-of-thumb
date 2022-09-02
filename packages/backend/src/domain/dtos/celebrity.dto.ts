export class CelebrityDto {
  '_id': string;
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
}
