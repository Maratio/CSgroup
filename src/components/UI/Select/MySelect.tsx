import React from "react";
import styled from "styled-components";

// interface Option{
//   value: string,
//   name: string
// }
// interface Props {
//   options: Option[];
//   defaultValue: string
//   value: string
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
// }

// const MySelect = ({ options, defaultValue, ...otherProps}:Props) => {
//   return (
//     <select {...otherProps}>
//       <option disabled value="" key="">
//         {defaultValue}
//       </option>
//       {options.map((option) => (
//         <option value={option.value} key={option.value}>
//           {option.name}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default MySelect;



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

const StyledSelect = styled.select`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  width: 200px;
  height: 30px;
`;

const StyledOption = styled.option`
  padding: 5px;
  font-size: 14px;
`;

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