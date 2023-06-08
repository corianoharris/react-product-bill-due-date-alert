import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

import PastBillDueDate from "./PastBillDueDate";
import FutureBillDueDate from "./FutureBillDueDate";
import TodayBillDueDate from "./TodayBillDueDate";

import { daysBetweenDueDate, daysAfterDueDate } from "../utils";

import user from "../MockData/userData";

const StyledDiv = styled.div`
  display: block;
  margin: 20px auto;
  justify-content: left;
  text-align: left;
  width: 600px;
  height: auto;
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0.16),
    0 5px 8px -4px rgba(0, 0, 0, 0.16);
`;

const StyledAlertTextContainer = styled.div`
  margin: 20px 0;
`;

const ProductAlert = (): JSX.Element => {
  const [isWithinDays, setWithinDays] = useState<Boolean>(false);
  const [isDueToday, setIsDueToday] = useState<Boolean>(false);
  const [isPastDue, setIsPastDue] = useState<Boolean>(false);

  useEffect(() => {
    if (daysBetweenDueDate <= 5 && daysBetweenDueDate >= 1) {
      setWithinDays(true);
    } else {
      setWithinDays(false);
    }

    if (daysBetweenDueDate < 1) {
      setIsDueToday(true);
    } else {
      setIsDueToday(false);
    }

    if (daysAfterDueDate > 0) {
      setIsPastDue(true);
    } else {
      setIsPastDue(false);
    }
  }, []);

  return (
    <>
      <StyledDiv>
        <h3 className="alert-header">{user.product}</h3>
        <StyledAlertTextContainer className="alert-text-container">
          {isWithinDays && !isDueToday && <FutureBillDueDate />}
          {isDueToday && !isWithinDays && !isPastDue && <TodayBillDueDate />}
          {isPastDue && !isDueToday && !isWithinDays && <PastBillDueDate />}
        </StyledAlertTextContainer>
        <Button title="make a payment" />
      </StyledDiv>
    </>
  );
};

export default ProductAlert;
