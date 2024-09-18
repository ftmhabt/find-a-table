"use client";
import Button from "../general/button";
import { partySize as partySizeObj, times } from "../../../data";
import DatePicker from "react-datepicker";
import { useState } from "react";
import useAvailabilities from "../../../hooks/useAvailabilities";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { convertToDisplayTime, Time } from "../../utils/convertToDisplayTime";

export default function ReserveCard({
  open_time,
  close_time,
  slug,
}: {
  open_time: string;
  close_time: string;
  slug: string;
}) {
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(open_time);
  const [partySize, setPartySize] = useState(2);
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  const handleClick = () => {
    fetchAvailabilities({
      slug,
      day,
      time,
      partySize,
    });
  };

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
        <select
          name="size"
          id="size"
          value={partySize}
          onChange={(e) => setPartySize(parseInt(e.target.value))}
        >
          {partySizeObj.map((item: { value: number; label: string }) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date">date:</label>
        <DatePicker
          name="date"
          selected={date}
          onChange={(d) => {
            setDay(
              d
                ? d.toISOString().split("T")[0]
                : new Date().toISOString().split("T")[0]
            );
            setDate(d);
          }}
          className="pl-1"
        />
      </div>
      <div>
        <label htmlFor="times">time:</label>
        <select
          name="times"
          id="times"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        >
          {FilterTimes().map((time) => (
            <option key={time.time} value={time.time}>
              {time.displayTime}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleClick}
        className="bg-blue-600 px-8 py-4 text-white rounded-xl flex justify-center"
        disabled={loading}
      >
        {loading ? (
          <CircularProgress color="inherit" size={24} />
        ) : (
          "find a table"
        )}
      </button>
      <div className="flex flex-col">
        {data && data.length ? (
          <>
            <p>select a time:</p>
            <div className="flex flex-wrap">
              {data.map((item) =>
                item.available ? (
                  <Link
                    key={item.time}
                    href={`/reserve/${slug}?date=${day}T${item.time}&partySize=${partySize}`}
                  >
                    {convertToDisplayTime(item.time as Time)}
                  </Link>
                ) : (
                  <div key={item.time}>unavailable</div>
                )
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
