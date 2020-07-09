import React, { Component,useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addDays ,subDays} from 'date-fns';

const Test = () => {
  const [startDate, setStartDate] = useState(null);
  console.log(startDate);
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={new Date()}
      excludeDates={[subDays(new Date(), -9),subDays(new Date(), -5)]}
      showDisabledMonthNavigation
    />
    
  );
};

export default Test;
