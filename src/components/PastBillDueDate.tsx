import React from "react";
import styled from "styled-components";
import DisplayProductDueDate from "./DisplayProductDueDate";
import MaskedAcctNumber from "./MaskedAcctNumber";
import { daysAfterDueDate } from "../utils";

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const StyledDate = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: purple;
`;

const PastBillDueDate = (): JSX.Element => {
  return (
    <>
      <StyledSpan>
        {`Your account ending in`} <MaskedAcctNumber /> {`is past due`}{" "}
        <StyledDate>{daysAfterDueDate}</StyledDate> {`on`}{" "}
        <DisplayProductDueDate /> .
      </StyledSpan>
    </>
  );
};

export default PastBillDueDate;
