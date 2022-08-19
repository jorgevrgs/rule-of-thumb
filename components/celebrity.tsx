import Image from 'next/image';
import { CelebrityProps } from '../types';
import Veredict from './veredict';

export function Celebrity({ celebrity }: CelebrityProps) {
  return (
    <>
      <article className="flex flex-col items-center px-4 w-[300px] h-[300px] text-white relative">
        <Image
          src={celebrity.picture}
          alt={celebrity.name}
          className="absolute inset-0 object-cover w-full h-full"
          layout="fill"
          objectFit="cover"
        />

        <div className="z-10 p-8">
          <h2 className="text-xl font-bold text-white">{celebrity.name}</h2>
          <p className="text-lg line-clamp-3">{celebrity.description}</p>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <Veredict {...celebrity.votes} />
        </div>
      </article>
    </>
  );
}
