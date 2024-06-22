import ReservationForm from "../../ui/reservation/reservation-form";
import ReservationInfo from "../../ui/reservation/reservation-info";

export default function Reserve() {
  return (
    <div className="max-w-[500px] mx-auto flex flex-col gap-4 p-4">
        <p>youre almost done</p>
        <ReservationInfo/>
        <ReservationForm/>
    </div>
  )
}
