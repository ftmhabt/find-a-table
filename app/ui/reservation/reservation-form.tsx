'use client';
import Button from "../general/button";

export default function ReservationForm() {
  return (
    <form className="border border-zinc-800 flex flex-col gap-2 p-4">
      <label htmlFor="name">name</label>
      <input type="text" name="name" id="name" className="border border-red-400 outline-0"/>
      <Button text="complete reservation" onClick={completeReservation} />
    </form>
  );
}

function completeReservation(){
  return;
}