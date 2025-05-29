import React from "react";
import styled from "styled-components";

interface Props {
  onClick: (() => void) | ((newEvent: React.MouseEvent) => void);
  children?: string;
  style?: React.CSSProperties;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3e8e41;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const MyButton = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default MyButton;
