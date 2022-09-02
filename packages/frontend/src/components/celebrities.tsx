import ReactSelect from 'react-select';
import type { CelebritiesProps } from '../domain/types';
import { useListView } from '../infrastructure';
import Celebrity from './celebrity';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  const { listView, handleListViewChange, options, defaultValue } =
    useListView();

  return (
    <section className="flex flex-col">
      <div className="flex justify-evenly items-center">
        <h2 className="text-4xl my-8 w-full">Previous Rulings</h2>
        <ReactSelect
          instanceId="selectListView"
          className="w-full z-20"
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
