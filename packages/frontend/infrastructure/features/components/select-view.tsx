import ReactSelect, { SingleValue, StylesConfig } from 'react-select';
import { gridValue, listValue, Option } from '../../../domain';

interface SelectViewProps {
  onChange: (newValue: SingleValue<Option>) => void;
  listView: SingleValue<Option>;
}

export default function SelectView({ onChange, listView }: SelectViewProps) {
  const options = [listValue, gridValue];

  const customStyles: StylesConfig<Option> = {
    container: (provided) => ({
      ...provided,
      zIndex: 20,
    }),
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
    control: (provided, _state) => {
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
    <ReactSelect
      className="hidden sm:flex"
      instanceId="selectListView"
      styles={customStyles}
      options={options}
      value={listView}
      defaultValue={listValue}
      isMulti={false}
      onChange={onChange}
    />
  );
}
