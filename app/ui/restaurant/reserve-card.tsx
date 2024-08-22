"use client";

import Button from "../general/button";
import { partySize, times } from "../../../data";
import DatePicker from "react-datepicker";
import { useState } from "react";

export default function ReserveCard({
  open_time,
  close_time,
}: {
  open_time: string;
  close_time: string;
}) {
  const [date, setDate] = useState<Date | null>(new Date());

  const FilterTimes = () => {
    const timesWithinWindow: typeof times = [];
    let isWithinWindow = false;
    times.forEach((time) => {
      if (time.time === open_time) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithinWindow.push(time);
      }
      if (time.time === close_time) {
        isWithinWindow = false;
      }
    });

    return timesWithinWindow;
  };

  return (
    <div className="flex flex-col gap-3 bg-white p-4 w-[280px] fixed top-[300px] left-[60%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] *:flex">
      <h1>make a reservation</h1>
      <div>
        <label htmlFor="size">party size:</label>
        <select name="size" id="size">
          {partySize.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date">date:</label>
        <DatePicker
          name="date"
          selected={date}
          onChange={(d) => setDate(d)}
          className="pl-1"
        />
      </div>
      <div>
        <label htmlFor="times">time:</label>
        <select name="times" id="times">
          {FilterTimes().map((time) => (
            <option key={time.time} value={time.time}>
              {time.displayTime}
            </option>
          ))}
        </select>
      </div>
      <Button text="find a time" onClick={makeReservation} />
    </div>
  );
}

function makeReservation() {
  return;
}
