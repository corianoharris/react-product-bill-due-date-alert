import React from "react";
import styled from "styled-components";
import DisplayProductDueDate from "./DisplayProductDueDate";
import { daysAfterDueDate } from "../utils";

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const PastBillDueDate = (): JSX.Element => {
  return (
    <>
      <StyledSpan>
        {`Your account ending in account number is past due 
        ${daysAfterDueDate} on`}{" "}
        <DisplayProductDueDate />
      </StyledSpan>
    </>
  );
};

export default PastBillDueDate;
