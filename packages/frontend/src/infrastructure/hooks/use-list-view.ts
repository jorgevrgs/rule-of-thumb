import { useState } from 'react';
import { SingleValue } from 'react-select';

export function useListView() {
  enum ListOptions {
    'list' = 'list',
    'grid' = 'grid',
  }

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
