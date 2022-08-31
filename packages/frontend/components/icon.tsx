import Image from 'next/image';
import { IconProps } from '../domain/types';

export default function Icon({ name, width = 24, height = 24 }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={`/icons/${name}.svg`}
      alt={`${name} icon`}
      aria-hidden="true"
    />
  );
}
