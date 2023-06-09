import React from "react";
import styled from "styled-components";
import DisplayProductDueDate from "./DisplayProductDueDate";
import MaskedAcctNumber from "./MaskedAcctNumber";
import { daysBetweenDueDate } from "../utils";

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const StyledDate = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: purple;
`;

const FutureBillDueDate = (): JSX.Element => {
  return (
    <>
      <StyledSpan>
        {`Your account ending in`} <MaskedAcctNumber /> {`is due in`}{" "}
        <StyledDate>{daysBetweenDueDate}</StyledDate> {`days on`}{" "}
        <DisplayProductDueDate />.
      </StyledSpan>
    </>
  );
};

export default FutureBillDueDate;
