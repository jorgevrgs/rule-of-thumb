import { CelebrityType } from '@app/shared';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { ListOptions } from '../../../domain';
import Vote from './vote';

interface CelebrityProps {
  celebrity: CelebrityType;
  listOption?: ListOptions;
}

export default function Celebrity({ celebrity, listOption }: CelebrityProps) {
  const isList = listOption === ListOptions.list;

  return (
    <article
      className={classNames(
        'flex overflow-hidden relative flex-col items-center text-white aspect-square w-96 sm:w-full',
        {
          'sm:h-72 sm:p-0 sm:aspect-auto': isList,
        }
      )}
      role="listitem"
    >
      <div
        className={classNames('absolute inset-0 flex w-full h-full', {
          'sm:h-72': isList,
        })}
      >
        <Image
          src={celebrity.picture}
          alt={celebrity.name}
          className={classNames('absolute inset-0 object-cover w-full h-full', {
            'sm:object-cover sm:w-full sm:h-full': isList,
          })}
          objectFit={isList ? 'contain' : 'fill'}
          layout="fill"
          objectPosition={isList ? 'left' : 'center'}
        />
      </div>

      <div
        className={classNames('text-white z-10 w-full h-full', {
          'list-gradient sm:absolute sm:inset-0 sm:pl-72 sm:pr-8 sm:py-4':
            isList,
          'grid-gradient': !isList,
        })}
      >
        <div
          className={classNames({
            'grid grid-flow-col grid-cols-2 justify-start grid-rows-2 gap-4':
              isList,
            'px-4 py-12': !isList,
          })}
        >
          <h3
            className={classNames(
              'font-bold text-white line-clamp-1 mb-4',
              isList ? 'text-3xl' : 'text-2xl'
            )}
          >
            {celebrity.name}
          </h3>
          <p className="text-lg line-clamp-3 h-20">{celebrity.description}</p>

          <Vote celebrityId={celebrity.celebrityId} isList={isList} />
        </div>
      </div>
    </article>
  );
}
