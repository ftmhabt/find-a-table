import Image from "next/image";
import { convertToDisplayTime, Time } from "../../utils/convertToDisplayTime";
import { format } from "date-fns";

export default function ReservationInfo({
  image,
  name,
  day,
  time,
  partySize,
}: {
  image: string;
  name: string;
  day: string;
  time: string;
  partySize: number;
}) {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 bg-secondary">
      <Image
        className="object-cover self-center"
        src={image}
        width={300}
        height={300}
        alt="restaurant photo"
        unoptimized={true}
      />
      <div className="flex flex-col gap-4 p-4">
        <h1>{name}</h1>
        <div className="flex gap-4 lg:flex-col">
          <div>{format(new Date(day), "ccc, LLL d")}</div>
          <div>{convertToDisplayTime(time as Time)}</div>
          <div>
            {partySize} {partySize === 1 ? "person" : "people"}
          </div>
        </div>
      </div>
    </div>
  );
}
