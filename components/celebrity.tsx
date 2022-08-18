import Image from 'next/image';
import { CelebrityProps } from '../types';

export function Celebrity({ celebrity }: CelebrityProps) {
  return (
    <ul>
      <li>{celebrity.name}</li>
      <li>{celebrity.description}</li>
      <li>
        <Image
          src={celebrity.picture}
          alt={celebrity.name}
          width={256}
          height={144}
        />
      </li>
    </ul>
  );
}
