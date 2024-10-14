"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useReservation from "../../../hooks/useReservation";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

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
      className="bg-secondary flex flex-col gap-3 p-4 *:outline-0 *:p-3 *:rounded-lg"
      onSubmit={handleSubmit(async (data) => await onsubmit(data))}
    >
      <input
        {...register("bookerName", {
          required: { value: true, message: "name can not be empty" },
        })}
        placeholder="Full Name"
      />
      {errors.bookerName && <p>{errors.bookerName?.message?.toString()}</p>}
      <input
        {...register("bookerEmail", {
          required: { value: true, message: "email can not be empty" },
        })}
        placeholder="Email"
      />
      {errors.bookerEmail && <p>{errors.bookerEmail?.message?.toString()}</p>}
      <input
        {...register("bookerPhone", {
          required: { value: true, message: "phone number can not be empty" },
        })}
        placeholder="Phone Number"
      />
      {errors.bookerPhone && <p>{errors.bookerPhone?.message?.toString()}</p>}
      <input
        {...register("bookerOccasion")}
        placeholder="Occasion (Optional)"
      />
      <input {...register("bookerRequest")} placeholder="Request (Optional)" />
      <button
        className="bg-primary text-white disabled:text-secondary"
        type="submit"
        disabled={!isDirty || !isValid || loading}
      >
        {loading ? (
          <CircularProgress color="inherit" size={24} />
        ) : (
          "complete reservation"
        )}
      </button>
    </form>
  ) : (
    <div>successfully booked!</div>
  );
}
