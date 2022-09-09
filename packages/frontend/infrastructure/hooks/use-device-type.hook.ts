import { DeviceType } from '../../domain';
import { useWindowSizeHook } from './use-windows-size.hook';

export function useDeviceTypeHook(): DeviceType {
  const { width } = useWindowSizeHook();

  if (width === undefined) {
    return DeviceType.desktop;
  }

  if (width < 768) {
    return DeviceType.mobile;
  }

  if (width < 992) {
    return DeviceType.tablet;
  }

  return DeviceType.desktop;
}
