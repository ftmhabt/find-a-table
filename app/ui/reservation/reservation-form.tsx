"use client";
import { useForm } from "react-hook-form";

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();

  return (
    <form
      className="border border-zinc-800 flex flex-col gap-2 p-4 *:border *:border-red-400 *:outline-0"
      onSubmit={handleSubmit((data) => console.log(data))}
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
        defaultValue={"complete reservation"}
        disabled={!isDirty || !isValid}
      />
    </form>
  );
}
