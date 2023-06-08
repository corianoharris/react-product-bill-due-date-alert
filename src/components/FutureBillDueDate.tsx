import React from "react";
import styled from "styled-components";
import DisplayProductDueDate from "./DisplayProductDueDate";
import { daysBetweenDueDate } from "../utils";

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const FutureBillDueDate = (): JSX.Element => {
  return (
    <>
      <StyledSpan>
        {`Your account ending in account number is due in
        ${daysBetweenDueDate} days on`}{" "}
        <DisplayProductDueDate />
      </StyledSpan>
    </>
  );
};

export default FutureBillDueDate;
