import React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string;
}

const StyledButton = styled.button`
  width: auto;
  padding: 20px 10px;
  border: 2px soild black;
  border-radius: 5px;
  background-color: white;
  color: black;
  letter-spacing: 6px;
  font-weight: bold;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Button = ({ title }: ButtonProps): JSX.Element => {
  return (
    <>
      <StyledButton className="alert-button">{title}</StyledButton>
    </>
  );
};
export default Button;
