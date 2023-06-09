import React from "react";
import styled from "styled-components";
import DisplayProductDueDate from "./DisplayProductDueDate";
import MaskedAcctNumber from "./MaskedAcctNumber";

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const TodayBillDueDate = (): JSX.Element => {
  return (
    <>
      <StyledSpan>
        {`Your account ending in`} <MaskedAcctNumber /> {`is due today on`}{" "}
        <DisplayProductDueDate />.
      </StyledSpan>
    </>
  );
};

export default TodayBillDueDate;
