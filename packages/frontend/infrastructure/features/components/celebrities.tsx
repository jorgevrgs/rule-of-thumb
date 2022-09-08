import type { CelebritiesType } from '@app/shared';
import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { Suspense, useContext, useMemo, useState } from 'react';
import type { SingleValue, StylesConfig } from 'react-select';
import ReactSelect from 'react-select';
import PulseLoader from 'react-spinners/PulseLoader';
import {
  DeviceType,
  gridValue,
  ListOptions,
  listValue,
} from '../../../domain/constants';
import type {
  CelebritiesProps,
  CelebrityProps,
  Option,
} from '../../../domain/types';
import { LayoutContext } from '../../contexts';

interface CelebritiesUIProps {
  CelebrityComponent: ComponentType<CelebrityProps>;
  celebrities: CelebritiesType;
  celebritiesStyle: string;
  customStyles: StylesConfig<Option>;
  deviceType: DeviceType;
  handleListViewChange: (value: SingleValue<Option>) => void;
  defaultValue: Option;
  listView: SingleValue<Option>;
  options: Option[];
}

export function CelebritiesUI({
  CelebrityComponent,
  celebrities,
  celebritiesStyle,
  customStyles,
  deviceType,
  handleListViewChange,
  defaultValue,
  listView,
  options,
}: CelebritiesUIProps) {
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

export default function Celebrities({ celebrities }: CelebritiesProps) {
  const [listView, setListView] = useState<SingleValue<Option>>(listValue);
  const { deviceType } = useContext(LayoutContext);

  const options = [listValue, gridValue];

  const handleListViewChange = (newValue: SingleValue<Option>) => {
    setListView(newValue);
  };

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
      return {
        ...provided,
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        borderInline: '2px solid #000',
        backgroundColor: state.isSelected ? 'lightgrey' : 'white',
      };
    },
    menu: (provided, _state) => {
      return {
        ...provided,
        border: 'none',
        borderRadius: 0,
        background: 'pink',
        margin: 0,
        padding: 0,
      };
    },
    menuList: (provided, _state) => {
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
    <CelebritiesUI
      CelebrityComponent={CelebrityComponent}
      celebrities={celebrities}
      celebritiesStyle={celebritiesStyle}
      customStyles={customStyles}
      defaultValue={listValue}
      deviceType={deviceType}
      handleListViewChange={handleListViewChange}
      listView={listView}
      options={options}
    />
  );
}
