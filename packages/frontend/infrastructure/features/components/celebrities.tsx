import { useContext } from 'react';
import ReactSelect from 'react-select';
import { DeviceType } from '../../../domain/constants';
import type { CelebritiesProps } from '../../../domain/types';
import { LayoutContext } from '../../contexts';
import { useListViewHook } from '../hooks';
import Celebrity from './celebrity';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  const { listView, handleListViewChange, options, defaultValue } =
    useListViewHook();

  const { deviceType } = useContext(LayoutContext);

  console.log('deviceDetect', deviceType);

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

      <div className="grid grid-flow-col gap-4 overflow-x-auto">
        {celebrities.map((celebrity) => (
          <Celebrity key={celebrity.celebrityId} celebrity={celebrity} />
        ))}
      </div>
    </section>
  );
}
