import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';
import { Suspense, useContext, useMemo, useState } from 'react';
import type { SingleValue, StylesConfig } from 'react-select';
import ReactSelect from 'react-select';
import PulseLoader from 'react-spinners/PulseLoader';
import { DeviceType, ListOptions } from '../../../domain/constants';
import type { CelebritiesProps } from '../../../domain/types';
import { LayoutContext } from '../../contexts';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  interface Option {
    value: ListOptions;
    label: string;
  }

  const listValue = {
    value: ListOptions.list,
    label: 'List',
  };

  const gridValue = {
    value: ListOptions.grid,
    label: 'Grid',
  };

  const [listView, setListView] = useState<SingleValue<Option>>(listValue);

  const options = [listValue, gridValue];

  const handleListViewChange = (newValue: SingleValue<Option>) => {
    setListView(newValue);
  };

  const { deviceType } = useContext(LayoutContext);

  const CelebrityComponent = dynamic(() =>
    deviceType === DeviceType.mobile
      ? import('./celebrity.mobile')
      : import('./celebrity.desktop')
  );

  const celebritiesStyle = useMemo((): string => {
    const styles = [
      'grid',
      'gap-4',
      'overflow-x-auto',
      'md:overflow-x-hidden',
      'sm:grid-flow-dense',
      'sm:grid-cols-1',
    ];

    if (listView?.value === ListOptions.grid) {
      styles.push(
        'sm:grid-cols-2',
        'lg:grid-cols-3',
        'xl:grid-cols-4',
        'grid-flow-col'
      );
    }

    return classNames(styles);
  }, [listView?.value]);

  if (!celebrities?.length) {
    return <div>No celebrities</div>;
  }

  const customStyles: StylesConfig<Option> = {
    option: (provided, state) => {
      console.log('option', { provided, state });

      return {
        ...provided,
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        borderInline: '2px solid #000',
        backgroundColor: state.isSelected ? 'lightgrey' : 'white',
      };
    },
    menu: (provided, state) => {
      console.log('menu', { provided, state });

      return {
        ...provided,
        border: 'none',
        borderRadius: 0,
        background: 'pink',
        margin: 0,
        padding: 0,
      };
    },
    menuList: (provided, state) => {
      console.log('menuList', { provided, state });

      return {
        ...provided,
        border: 'none',
        borderRadius: 0,
        background: 'purple',
        margin: 0,
        padding: 0,
      };
    },
    control: (provided, state) => {
      console.log('control', { provided, state });

      return {
        ...provided,
        width: 300,
        border: '2px solid black',
        borderRadius: 0,
        margin: 0,
      };
    },
  };

  return (
    <section className="flex flex-col">
      <div className="flex justify-evenly items-center">
        <h2 className="text-4xl my-8 w-full">Previous Rulings</h2>

        <ReactSelect
          instanceId="selectListView"
          className={classNames({
            'md:hidden': deviceType === DeviceType.mobile,
          })}
          styles={customStyles}
          options={options}
          value={listView}
          defaultValue={listValue}
          isMulti={false}
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
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
