"use client";
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
    <div className="lg:flex lg:flex-col lg:mt-16 lg:relative">
      {data && data.length ? (
        <div className="w-full px-6 pt-4 bg-secondary flex flex-col fixed lg:absolute bottom-[200px] lg:h-40 lg:top-64 lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] lg:pb-4">
          <p>select a time:</p>
          <div className="flex flex-wrap *:px-3 *:border *:border-primary *:rounded-sm gap-1 ">
            {data.map((item) =>
              item.available ? (
                <Link
                  key={item.time}
                  href={`/reserve/${slug}?day=${day}&time=${item.time}&partySize=${partySize}`}
                >
                  {convertToDisplayTime(item.time as Time)}
                </Link>
              ) : (
                <div key={item.time}>unavailable</div>
              )
            )}
          </div>
        </div>
      ) : null}

      <div className="w-full h-[200px] flex flex-col gap-3 bg-secondary p-6 fixed lg:relative bottom-0 lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] *:flex">
        <div>
          <label htmlFor="size">party size:</label>
          <select
            className="bg-secondary"
            name="size"
            id="size"
            value={partySize}
            onChange={(e) => setPartySize(parseInt(e.target.value))}
          >
            {partySizeObj.map((item: { value: number; label: string }) => (
              <option
                key={item.value}
                value={item.value}
                className="bg-secondary"
              >
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
            className="pl-1 bg-secondary"
          />
        </div>
        <div>
          <label htmlFor="times">time:</label>
          <select
            className="bg-secondary"
            name="times"
            id="times"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          >
            {FilterTimes().map((time) => (
              <option
                key={time.time}
                value={time.time}
                className="bg-secondary"
              >
                {time.displayTime}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleClick}
          className="bg-primary px-8 py-4 text-white rounded-xl flex justify-center"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            "find a table"
          )}
        </button>
      </div>
    </div>
  );
}
