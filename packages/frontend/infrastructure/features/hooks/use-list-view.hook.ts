import { useState } from 'react';
import { SingleValue } from 'react-select';
import { ListOptions } from '../../../domain';

export function useListViewHook() {
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

  return {
    listView,
    handleListViewChange,
    options,
    defaultValue: listValue,
  };
}
