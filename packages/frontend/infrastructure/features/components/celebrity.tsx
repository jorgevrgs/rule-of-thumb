import Image from 'next/image';
import { useMemo } from 'react';
import { getClassNames, getTimeAgo } from '../../../application/utils';
import { ListOptions } from '../../../domain/constants';
import type { CelebrityProps } from '../../../domain/types';
import Veredict from './veredict';
import Vote from './vote';

export default function Celebrity({ celebrity, listOption }: CelebrityProps) {
  const celebrityStyles = useMemo((): string => {
    let styles = [
      'flex flex-col',
      'items-center',
      'px-4',
      'w-[22rem]',
      'h-[22rem]',
      'text-white',
      'relative',
      'md:w-full',
      'md:h-96',
    ];

    if (listOption === ListOptions.list) {
      styles.push('md:flex-col');
    }

    return getClassNames(styles);
  }, [listOption]);

  return (
    <article className={celebrityStyles}>
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

        <Vote celebrityId={celebrity.celebrityId} />
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <Veredict {...celebrity.votes} />
      </div>
    </article>
  );
}
