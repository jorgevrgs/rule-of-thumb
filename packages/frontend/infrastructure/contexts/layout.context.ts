import { createContext } from 'react';
import { DeviceType } from '../../domain';
import type { LayoutContextType } from '../../domain/types';

export const LayoutContext = createContext<LayoutContextType>({
  deviceType: DeviceType.mobile,
});
