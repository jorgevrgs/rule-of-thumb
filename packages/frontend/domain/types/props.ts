import { CelebritiesType, CelebrityType, NavLinksType } from '@app/shared';
import { ListOptions, VoteState } from '../constants';

export interface UpdateVoteParams {
  celebrityId: string;
  vote: VoteState;
}

export type HandleVoteFn = (params: UpdateVoteParams) => void;

export interface IconProps {
  name: string;
  width?: number;
  height?: number;
}

export interface NavLinkProps {
  navLinks: NavLinksType;
}

export interface CelebritiesProps {
  celebrities: CelebritiesType;
}

export interface CelebrityProps {
  celebrity: CelebrityType;
  listOption?: ListOptions;
}

export interface VeredictProps {
  positive: number;
  negative: number;
}

export interface VoteProps {
  celebrityId: string;
}

// FUTURE: Add a more detailed name for this type
export interface Option {
  value: ListOptions;
  label: string;
}
