import type { CelebrityType } from '@app/shared';
import classNames from 'classnames/bind';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { getTimeAgo } from '../../../application/utils';
import { ListOptions } from '../../../domain';
import type { CelebrityProps } from '../../../domain/types';
import Vote from './vote';

interface CelebrityDesktopUIProps {
  celebrityStyles: Record<string, string>;
  imageProps: ImageProps;
  celebrity: CelebrityType;
}

export function CelebrityDesktopUI({
  celebrityStyles,
  imageProps,
  celebrity,
}: CelebrityDesktopUIProps) {
  const {
    articleClass,
    cardBodyClass,
    contentClass,
    imageClass,
    titleClass,
    voteClass,
  } = celebrityStyles;

  return (
    <article className={articleClass}>
      <div className={imageClass}>
        <Image alt={celebrity.name} {...imageProps} />
      </div>

      <div className={contentClass}>
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

        <div className={cardBodyClass}>
          <h3 className={titleClass}>{celebrity.name}</h3>
          <p className="text-lg line-clamp-3 h-20">{celebrity.description}</p>

          <p className="text-right text-sm mt-4 w-full">
            {`${getTimeAgo(celebrity.lastUpdated)} in ${celebrity.category}`}
          </p>

          <div className={voteClass}>
            <Vote celebrityId={celebrity.celebrityId} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CelebrityDesktop({
  celebrity,
  listOption,
}: CelebrityProps) {
  const isGrid = listOption === ListOptions.grid;
  const isList = listOption === ListOptions.list;

  const imageProps: ImageProps = {
    src: celebrity.picture,
    className: classNames({
      'absolute inset-0 object-cover w-full h-full': isGrid,
      'object-cover w-full h-full': isList,
    }),
    objectFit: isGrid ? 'cover' : 'fill',
    layout: isGrid ? 'fill' : 'intrinsic',
  };

  if (isList) {
    imageProps.width = '322px';
    imageProps.height = '322px';
  }

  const articleClass = classNames('flex', 'overflow-hidden', 'relative', {
    'flex-col items-center px-4 w-[22rem] h-[22rem] text-white md:w-full md:h-96':
      isGrid,
    'h-72': isList,
  });

  const imageClass = classNames('w-full', {
    'h-72 absolute': isList,
    'h-full': isGrid,
  });

  const contentClass = classNames('text-white', {
    'custom-gradient absolute inset-0 pl-72 pr-8 py-4': isList,
    'z-10 px-4 py-12 text-white': isGrid,
  });

  const cardBodyClass = classNames({
    'grid grid-flow-col grid-cols-2 justify-start grid-rows-2 gap-4': isList,
  });

  const titleClass = classNames('font-bold text-white line-clamp-1 mb-4', {
    'text-2xl': isGrid,
    'text-3xl': isList,
  });

  const voteClass = classNames('flex flex-wrap gap-4 w-full md:flex-no-wrap', {
    'justify-end content-start h-full': isList,
    'justify-center my-8 h-10': isGrid,
  });

  return (
    <CelebrityDesktopUI
      celebrityStyles={{
        articleClass,
        cardBodyClass,
        contentClass,
        imageClass,
        titleClass,
        voteClass,
      }}
      imageProps={imageProps}
      celebrity={celebrity}
    />
  );
}
