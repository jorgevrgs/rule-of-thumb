import dynamic from 'next/dynamic';
import { Suspense, useContext } from 'react';
import ReactSelect from 'react-select';
import PulseLoader from 'react-spinners/PulseLoader';
import { DeviceType } from '../../../domain/constants';
import type { CelebritiesProps, HandleVoteFn } from '../../../domain/types';
import { LayoutContext } from '../../contexts';
import {
  useItemsStylesHook,
  useListViewHook,
  useUpdateVoteCelebrities,
} from '../hooks';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  const { listView, handleListViewChange, options, defaultValue } =
    useListViewHook();

  const { deviceType } = useContext(LayoutContext);
  const updateVote = useUpdateVoteCelebrities();

  const CelebrityComponent = dynamic(() =>
    deviceType === DeviceType.mobile
      ? import('./celebrity.mobile')
      : import('./celebrity.desktop')
  );

  const { celebritiesStyle } = useItemsStylesHook(listView?.value);

  const handleVote: HandleVoteFn = async ({ celebrityId, vote }) => {
    updateVote.mutate({ celebrityId, vote });
  };

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

      <div className={celebritiesStyle}>
        {celebrities.map((celebrity) => (
          <Suspense fallback={<PulseLoader />} key={celebrity.celebrityId}>
            <CelebrityComponent
              key={celebrity.celebrityId}
              celebrity={celebrity}
              listOption={listView?.value}
              handleVote={handleVote}
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
