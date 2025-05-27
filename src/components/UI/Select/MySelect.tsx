import React from "react";

interface Option{
  value: string,
  name: string
}
interface Props {
  options: Option[];
  defaultValue: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const MySelect = ({ options, defaultValue, ...otherProps}:Props) => {
  return (
    <select {...otherProps}>
      <option disabled value="value" key="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
