import React from "react";
import styled from "styled-components";
import user from "../MockData/userData";
import { maskNumber } from "../utils";

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const maskAccountNumber = maskNumber(user.accountNumber, 4);

const MaskedAcctNumber = (): JSX.Element => {
  return (
    <>
      <StyledSpan>{maskAccountNumber}</StyledSpan>
    </>
  );
};

export default MaskedAcctNumber;
