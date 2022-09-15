export interface CelebrityType {
  celebrityId: string;
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

export type CelebritiesType = Array<CelebrityType>;
