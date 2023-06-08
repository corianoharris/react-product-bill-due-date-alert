import React from "react";
import styled from "styled-components";
import DisplayProductDueDate from "./DisplayProductDueDate";

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const TodayBillDueDate = (): JSX.Element => {
  return (
    <>
      <StyledSpan>
        {`Your account ending in account number is due today on`}{" "}
        <DisplayProductDueDate />
      </StyledSpan>
    </>
  );
};

export default TodayBillDueDate;
