export interface ResponseType<T> {
  status: number;
  message: string;
  data: T;
}

export interface OriginCelebrityType {
  active: string;
  lastUpdated: string;
  celebrity_id: string;
  category: string;
  description: string;
  picture: string;
  name: string;
  votes: {
    negative: number;
    positive: number;
  };
}

export type CelebrityType = Omit<
  OriginCelebrityType,
  'celebrity_id' | 'active'
> & {
  celebrityId: string;
  active: boolean;
};

export type CelebritiesType = Array<CelebrityType>;

export type GetCelebritiesResponseType = Response<OriginCelebrityType[]>;
