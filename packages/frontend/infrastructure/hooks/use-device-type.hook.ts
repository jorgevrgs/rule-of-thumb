import { createBreakpoint } from 'react-use';
import { DeviceType } from '../../domain';

export function useDeviceTypeHook(): DeviceType {
  const useBreakpoint = createBreakpoint({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  });

  const breakpoint = useBreakpoint();

  if (breakpoint === 'sm') {
    return DeviceType.mobile;
  }

  return DeviceType.desktop;
}
