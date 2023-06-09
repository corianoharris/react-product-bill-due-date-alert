import React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string;
}

const StyledButton = styled.button`
  width: auto;
  margin: 20px 0;
  padding: 20px 10px;
  border: 2px soild black;
  border-radius: 5px;
  background-color: white;
  color: black;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0.16),
    0 5px 8px -4px rgba(0, 0, 0, 0.16);

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
