import { useContext, useMemo } from 'react';
import ReactSelect from 'react-select';
import { getClassNames } from '../../../application';
import { DeviceType, ListOptions } from '../../../domain/constants';
import type { CelebritiesProps } from '../../../domain/types';
import { LayoutContext } from '../../contexts';
import { useListViewHook } from '../hooks';
import Celebrity from './celebrity';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  const { listView, handleListViewChange, options, defaultValue } =
    useListViewHook();

  const { deviceType } = useContext(LayoutContext);

  const listStyles = useMemo((): string => {
    const columnsStyles =
      listView?.value === ListOptions.grid
        ? getClassNames([
            'sm:grid-cols-1',
            'md:grid-cols-2',
            'lg:grid-cols-3',
            'xl:grid-cols-4',
          ])
        : 'sm:grid-cols-1';

    return getClassNames([
      'grid',
      'grid-flow-col',
      'gap-4',
      'overflow-x-auto',
      'md:overflow-x-hidden',
      'sm:grid-flow-dense',
      columnsStyles,
    ]);
  }, [listView?.value]);

  if (!celebrities?.length) {
    return <div>No celebrities</div>;
  }

  return (
    <section className="flex flex-col">
      <div className="flex justify-evenly items-center">
        <h2 className="text-4xl my-8 w-full">Previous Rulings</h2>
        <ReactSelect
          instanceId="selectListView"
          className={`w-full z-20${
            deviceType === DeviceType.mobile ? ' hidden' : ''
          }`}
          options={options}
          value={listView}
          defaultValue={defaultValue}
          onChange={handleListViewChange}
        />
      </div>

      <div className={listStyles}>
        {celebrities.map((celebrity) => (
          <Celebrity
            key={celebrity.celebrityId}
            celebrity={celebrity}
            className="flex flex-col items-center px-4 w-[22rem] h-[22rem] text-white relative md:w-full md:h-96"
          />
        ))}
      </div>
    </section>
  );
}
