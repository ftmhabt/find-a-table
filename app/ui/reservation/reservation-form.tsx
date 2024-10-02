"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useReservation from "../../../hooks/useReservation";
import { useEffect, useState } from "react";

type FormValues = {
  bookerName: string;
  bookerEmail: string;
  bookerPhone: string;
  bookerOccasion: string;
  bookerRequest: string;
};

export default function ReservationForm({
  slug,
  day,
  time,
  partySize,
}: {
  slug: string;
  day: string;
  time: string;
  partySize: number;
}) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>();
  const { error, loading, createReservation } = useReservation();
  const [isBooked, setIsBooked] = useState(false);

  const onsubmit: SubmitHandler<FormValues> = async (data) => {
    const booking = await createReservation({
      slug,
      day,
      time,
      partySize,
      ...data,
    });
    if (booking) {
      setIsBooked(true);
    }
  };
  return !isBooked ? (
    <form
      className="border border-zinc-800 flex flex-col gap-2 p-4 *:border *:border-red-400 *:outline-0"
      onSubmit={handleSubmit(async (data) => await onsubmit(data))}
    >
      <input
        {...register("bookerName", {
          required: { value: true, message: "name can not be empty" },
        })}
        placeholder="Full Name"
      />
      <p>{errors.bookerName?.message?.toString()}</p>
      <input
        {...register("bookerEmail", {
          required: { value: true, message: "email can not be empty" },
        })}
        placeholder="Email"
      />
      <p>{errors.bookerEmail?.message?.toString()}</p>
      <input
        {...register("bookerPhone", {
          required: { value: true, message: "phone number can not be empty" },
        })}
        placeholder="Phone Number"
      />
      <p>{errors.bookerPhone?.message?.toString()}</p>
      <input
        {...register("bookerOccasion")}
        placeholder="Occasion (Optional)"
      />
      <input {...register("bookerRequest")} placeholder="Request (Optional)" />
      <input
        type="submit"
        value={loading ? "wait" : "complete reservation"}
        disabled={!isDirty || !isValid || loading}
      />
    </form>
  ) : (
    <div>successfully booked</div>
  );
}
