import { ImageProps } from 'next/image';
import { useMemo } from 'react';
import { getClassNames } from '../../../application';
import { ListOptions } from '../../../domain';

export const useItemsStylesHook = (listOption?: ListOptions) => {
  const celebritiesStyle = useMemo((): string => {
    const styles = [
      'grid',
      'grid-flow-col',
      'gap-4',
      'overflow-x-auto',
      'md:overflow-x-hidden',
      'sm:grid-flow-dense',
      'sm:grid-cols-1',
    ];

    if (listOption === ListOptions.grid) {
      styles.push('md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4');
    }

    return getClassNames(styles);
  }, [listOption]);

  return {
    celebritiesStyle,
  };
};

export const useItemStylesHook = (listOption?: ListOptions) => {
  const celebrityStyles = useMemo((): string => {
    let styles = [
      'flex flex-col items-center px-4 w-[22rem] h-[22rem] text-white relative md:w-full md:h-96',
    ];

    if (listOption === ListOptions.list) {
      styles.push('md:flex-col', 'md:h-72');
    }

    return getClassNames(styles);
  }, [listOption]);

  const imageObjectFit = useMemo((): ImageProps['objectFit'] => {
    return listOption === ListOptions.grid ? 'cover' : 'contain';
  }, [listOption]);

  return {
    celebrityStyles,
    imageObjectFit,
  };
};
