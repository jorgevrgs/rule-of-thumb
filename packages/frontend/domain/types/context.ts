import type { CelebrityType, NavLinksType } from '@app/shared';
import type { DeviceType } from '../constants';

export interface LayoutContextType {
  navLinks: NavLinksType;
  celebrity?: CelebrityType;
  deviceType: DeviceType;
}
