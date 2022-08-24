import Veredict from 'components/veredict';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import type { CelebrityProps } from 'types';

export function Celebrity({ celebrity }: CelebrityProps) {
  dayjs.extend(relativeTime);

  const timeAgo = dayjs().to(dayjs(celebrity.lastUpdated));

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
          <h2 className="text-xl font-bold text-white line-clamp-1">
            {celebrity.name}
          </h2>
          <p className="text-lg line-clamp-3">{celebrity.description}</p>
          <p className="text-right text-sm mt-4 w-full">
            {`${timeAgo} in ${celebrity.category}`}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <Veredict {...celebrity.votes} />
        </div>
      </article>
    </>
  );
}
