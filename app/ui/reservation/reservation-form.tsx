"use client";
import Button from "../general/button";
import { useForm } from "react-hook-form";

export default function ReservationForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="border border-zinc-800 flex flex-col gap-2 p-4 *:border *:border-red-400 *:outline-0"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <input {...register("name")} placeholder="Full Name" />
      <input {...register("email")} placeholder="Email" />
      <input {...register("phone")} placeholder="Phone Number" />
      <input {...register("occasion")} placeholder="Occasion" />
      <input {...register("request")} placeholder="Request" />
      <input type="submit" placeholder="complete reservation" />
    </form>
  );
}
