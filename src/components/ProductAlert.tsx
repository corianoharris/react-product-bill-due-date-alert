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
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

const StyledAlertTextContainer = styled.div`
  margin: 5px 0;
`;

const StyledHeader = styled.h3`
  font-size: 24px;
  text-align: center;
`;

const ProductAlert = (): JSX.Element => {
  const [isWithinDays, setWithinDays] = useState<Boolean>(false);
  const [isDueToday, setIsDueToday] = useState<Boolean>(false);
  const [isPastDue, setIsPastDue] = useState<Boolean>(false);

  useEffect(() => {
    if (daysBetweenDueDate > 1 && daysBetweenDueDate < 31) {
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
        <StyledHeader className="alert-header">{user.product}</StyledHeader>
        <StyledAlertTextContainer className="alert-text-container">
          {isWithinDays && <FutureBillDueDate />}
          {isDueToday && <TodayBillDueDate />}
          {isPastDue && !isWithinDays && !isDueToday && <PastBillDueDate />}
        </StyledAlertTextContainer>
        <Button title="make a payment" />
      </StyledDiv>
    </>
  );
};

export default ProductAlert;
