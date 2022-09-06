import Image, { ImageProps } from 'next/image';
import { getTimeAgo } from '../../../application/utils';
import { ListOptions } from '../../../domain';
import type { CelebrityProps } from '../../../domain/types';
import Veredict from './veredict';
import Vote from './vote';

export default function CelebrityDesktop({
  celebrity,
  listOption,
}: CelebrityProps) {
  // const { celebrityStyles, imageObjectFit } = useItemStylesHook(listOption);
  const imageProps: ImageProps = {
    src: celebrity.picture,
    className:
      listOption === 'grid'
        ? 'absolute inset-0 object-cover w-full h-full'
        : 'object-cover w-full h-full',
    objectFit: listOption === 'grid' ? 'cover' : 'fill',
    layout: listOption === 'grid' ? 'fill' : 'intrinsic',
  };

  if (listOption === 'list') {
    imageProps.width = '322px';
    imageProps.height = '322px';
  }

  return (
    <article
      className={
        listOption === 'grid'
          ? 'flex flex-col items-center px-4 w-[22rem] h-[22rem] text-white relative md:w-full md:h-96 overflow-hidden'
          : 'flex relative h-72 overflow-hidden'
      }
    >
      <div
        className={
          listOption === ListOptions.list
            ? 'w-full h-72 absolute'
            : 'w-full h-full'
        }
      >
        <Image alt={celebrity.name} {...imageProps} />
      </div>

      <div
        className={
          listOption === ListOptions.list
            ? 'custom-gradient absolute inset-0 text-white pl-72 pr-8'
            : 'z-10 px-4 py-12 text-white'
        }
      >
        <style jsx>{`
          .custom-gradient {
            background: linear-gradient(
              80deg,
              rgba(0, 0, 0, 0.0001) 0%,
              #888888 19.79%,
              #666666 50%,
              rgba(51, 51, 51, 0.6) 71.88%
            );
          }
        `}</style>

        <h3 className="text-2xl font-bold text-white line-clamp-1 mb-4">
          {celebrity.name}
        </h3>
        <p className="text-lg line-clamp-3">{celebrity.description}</p>

        <p className="text-right text-sm mt-4 w-full">
          {`${getTimeAgo(celebrity.lastUpdated)} in ${celebrity.category}`}
        </p>

        <Vote celebrityId={celebrity.celebrityId} />
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <Veredict {...celebrity.votes} />
      </div>
    </article>
  );
}
