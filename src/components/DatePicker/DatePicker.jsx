import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css';
const DatePickers = () => {
    const [startDate, setStartDate] = useState(new Date());
    return <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatePickers;