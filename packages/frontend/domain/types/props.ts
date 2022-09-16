import type { ListOptions, VoteState } from '../constants';

export interface UpdateVoteParams {
  celebrityId: string;
  vote: VoteState;
}

export interface IconProps {
  name: string;
  width?: number;
  height?: number;
}

// FUTURE: Add a more detailed name for this type
export interface Option {
  value: ListOptions;
  label: string;
}
