import classNames from 'classnames/bind';
import { useContext, useEffect, useMemo, useState } from 'react';
import type { SingleValue } from 'react-select';
import {
  DeviceType,
  gridValue,
  ListOptions,
  listValue,
} from '../../../domain/constants';
import type { CelebritiesProps, Option } from '../../../domain/types';
import { LayoutContext } from '../../contexts';
import { useDeviceTypeHook } from '../../hooks';
import Celebrity from './celebrity';
import SelectView from './select-view';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  const { deviceType } = useContext(LayoutContext);
  const [listView, setListView] = useState<SingleValue<Option>>(listValue);
  const navigatorDeviceType = useDeviceTypeHook();

  const isMobile = useMemo(() => {
    return deviceType === DeviceType.mobile;
  }, [deviceType]);

  const isList = useMemo(() => {
    return listView?.value === ListOptions.list;
  }, [listView]);

  useEffect(() => {
    if (isMobile) {
      setListView(gridValue);
    }
  }, [isMobile]);

  useEffect(() => {
    if (navigatorDeviceType === DeviceType.mobile) {
      setListView(gridValue);
    }
  }, [navigatorDeviceType]);

  const handleListViewChange = (newValue: SingleValue<Option>) => {
    setListView(newValue);
  };

  if (!celebrities?.length) {
    return <div>No celebrities</div>;
  }

  return (
    <section className="flex flex-col">
      <div className="flex justify-evenly items-center">
        <h2 className="text-4xl my-8 w-full">Previous Rulings</h2>

        <SelectView listView={listView} onChange={handleListViewChange} />
      </div>

      <div
        className={classNames(
          'grid grid-flow-col gap-4 overflow-x-auto sm:overflow-x-hidden sm:grid-flow-dense',
          {
            'sm:grid-cols-1': isList,
            'sm:grid-cols-2 xl:grid-cols-3': !isList,
          }
        )}
        role="list"
      >
        {celebrities.map((celebrity) => (
          <Celebrity
            key={celebrity.celebrityId}
            celebrity={celebrity}
            listOption={listView?.value}
          />
        ))}
      </div>
    </section>
  );
}
