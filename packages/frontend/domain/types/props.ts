import { CelebritiesType, CelebrityType, NavLinksType } from '@app/shared';

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
}

export interface VeredictProps {
  positive: number;
  negative: number;
}

export interface VoteProps {
  celebrityId: string;
}