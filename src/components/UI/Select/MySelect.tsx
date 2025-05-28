import React from "react";
import { StyledOption, StyledSelect } from "../../../styles/styles";

interface Option {
  value: string;
  name: string;
}

interface Props {
  options: Option[];
  defaultValue: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MySelect = ({ options, defaultValue, ...otherProps }: Props) => {
  return (
    <StyledSelect {...otherProps}>
      <StyledOption disabled value="" key="">
        {defaultValue}
      </StyledOption>
      {options.map((option) => (
        <StyledOption value={option.value} key={option.value}>
          {option.name}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default MySelect;