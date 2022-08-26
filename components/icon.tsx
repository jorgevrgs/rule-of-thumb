import { IconProps } from 'domain/types';
import Image from 'next/image';

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
