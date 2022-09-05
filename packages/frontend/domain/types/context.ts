import { CelebrityType, NavLinksType } from '@app/shared';

export interface LayoutContextType {
  navLinks: NavLinksType;
  celebrity?: CelebrityType;
}
