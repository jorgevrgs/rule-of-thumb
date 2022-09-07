import Image from 'next/image';
import { getTimeAgo } from '../../../application/utils';
import type { CelebrityProps } from '../../../domain/types';
import Veredict from './veredict';
import Vote from './vote';

export default function CelebrityMobile({
  celebrity,
  handleVote,
}: CelebrityProps) {
  return (
    <article className="flex flex-col items-center px-4 w-[22rem] h-[22rem] text-white relative">
      <Image
        src={celebrity.picture}
        alt={celebrity.name}
        className="absolute inset-0 object-cover w-full h-full"
        layout="fill"
        objectFit="cover"
      />

      <div className="z-10 px-4 py-12">
        <h3 className="text-2xl font-bold text-white line-clamp-1 mb-4">
          {celebrity.name}
        </h3>
        <p className="text-lg line-clamp-3">{celebrity.description}</p>

        <p className="text-right text-sm mt-4 w-full">
          {`${getTimeAgo(celebrity.lastUpdated)} in ${celebrity.category}`}
        </p>

        <div className="flex justify-center gap-8 my-8 w-full h-10">
          <Vote celebrityId={celebrity.celebrityId} handleVote={handleVote} />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <Veredict {...celebrity.votes} />
      </div>
    </article>
  );
}
