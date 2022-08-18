export interface Response<T> {
  status: number;
  message: string;
  data: T;
}

export interface OriginCelebrity {
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

export type Celebrity = Omit<OriginCelebrity, 'celebrity_id' | 'active'> & {
  celebrityId: string;
  active: boolean;
};

export type Celebrities = Array<Celebrity>;

export type GetCelebritiesResponse = Response<OriginCelebrity[]>;
