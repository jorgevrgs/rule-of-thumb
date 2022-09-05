import { CelebrityType, NavLinksType } from '@app/shared';
import { DeviceType } from '../constants';

export interface LayoutContextType {
  navLinks: NavLinksType;
  celebrity?: CelebrityType;
  deviceType: DeviceType;
}
