import React from "react";
import user from "../MockData/userData";
import dayjs from "dayjs";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 20px;
  color: red;
  font-weight: bolder;
`;

// get the user due date month, day, and year
const billDueDateMonth: string = dayjs(user.dueDate).format("MMMM");
const billDueDateDay: string = dayjs(user.dueDate).format("DD");
const billDueDateYear: string = dayjs(user.dueDate).format("YYYY");

const DisplayProductDueDate = (): JSX.Element => {
  return (
    <>
      <StyledSpan>
        {`${billDueDateMonth} ${billDueDateDay}, ${billDueDateYear}`}
      </StyledSpan>
    </>
  );
};

export default DisplayProductDueDate;
