import classNames from 'classnames/bind';
import { Suspense, useContext, useEffect, useMemo, useState } from 'react';
import type { SingleValue } from 'react-select';
import PulseLoader from 'react-spinners/PulseLoader';
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
  const [listView, setListView] = useState<SingleValue<Option>>(listValue);
  const { deviceType: serverDeviceType } = useContext(LayoutContext);
  const clientDeviceType = useDeviceTypeHook();

  const deviceType = useMemo(() => {
    if (clientDeviceType === DeviceType.mobile) {
      return DeviceType.mobile;
    }

    return serverDeviceType;
  }, [clientDeviceType, serverDeviceType]);

  const isMobile = useMemo(() => {
    return deviceType === DeviceType.mobile;
  }, [deviceType]);

  useEffect(() => {
    if (isMobile) {
      setListView(gridValue);
    }
  }, [isMobile]);

  const handleListViewChange = (newValue: SingleValue<Option>) => {
    setListView(newValue);
  };

  const celebritiesStyle = useMemo((): string => {
    const styles = [
      'grid',
      'gap-4',
      'overflow-x-auto',
      'sm:overflow-x-hidden',
      'sm:grid-flow-dense',
    ];

    if (listView?.value === ListOptions.grid) {
      styles.push(
        'sm:grid-cols-2',
        'xl:grid-cols-3',
        'grid-flow-col',
        'min-h-[22rem]'
      );
    } else {
      styles.push('sm:grid-cols-1');
    }

    if (isMobile) {
      styles.push('overflow-x-auto');
    }

    return classNames(styles);
  }, [listView?.value, isMobile]);

  if (!celebrities?.length) {
    return <div>No celebrities</div>;
  }

  return (
    <section className="flex flex-col">
      <div className="flex justify-evenly items-center">
        <h2 className="text-4xl my-8 w-full">Previous Rulings</h2>

        <SelectView
          isMobile={isMobile}
          listView={listView}
          onChange={handleListViewChange}
        />
      </div>

      <div className={celebritiesStyle}>
        {celebrities.map((celebrity) => (
          <Suspense fallback={<PulseLoader />} key={celebrity.celebrityId}>
            <Celebrity
              key={celebrity.celebrityId}
              celebrity={celebrity}
              listOption={listView?.value}
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
