'use client';

import Button from "../general/button";

export default function ReserveCard() {
  return (
    <div className="flex flex-col gap-3 bg-white p-4 w-[280px] fixed top-[300px] right-[390px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <h1>make a reservation</h1>
        <label htmlFor="size">party size</label>
        <select name="size" id="size">
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <Button text="find a time" onClick={makeReservation} style="bg-black text-white"/>
    </div>
  )
}

function makeReservation(){
    return;
}