import { LayoutContextType } from '@app/frontend';
import { CelebritiesType, NavLinksType } from '@app/shared';

export interface IndexPageProps {
  navLinks: NavLinksType;
  celebrities: CelebritiesType;
  deviceType: LayoutContextType['deviceType'];
}
