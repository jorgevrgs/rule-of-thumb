import { Celebrities } from './api';
import type { NavLinks } from './components';

export interface IconProps {
  name: string;
  width?: number;
  height?: number;
}

export interface NavLinkProps {
  navLinks: NavLinks;
}

export interface CelebritiesProps {
  celebrities: Celebrities;
}

export interface CelebrityProps {
  celebrity: Celebrities[number];
}

export interface VeredictProps {
  positive: number;
  negative: number;
}

export interface VoteProps {
  celebrityId: string;
}
