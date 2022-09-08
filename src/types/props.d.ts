import type { LayoutContextType } from '@app/frontend';
import type { CelebritiesType, NavLinksType } from '@app/shared';

export interface IndexPageProps {
  navLinks: NavLinksType;
  celebrities: CelebritiesType;
  deviceType: LayoutContextType['deviceType'];
}
