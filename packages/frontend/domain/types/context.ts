import type { CelebrityType } from '@app/shared';
import type { DeviceType } from '../constants';

export interface LayoutContextType {
  featuredCelebrity?: CelebrityType;
  deviceType: DeviceType;
}
