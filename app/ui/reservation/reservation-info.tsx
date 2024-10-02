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
    <div className="flex gap-4 p-4 border border-zinc-800">
      <Image
        className="object-cover"
        src={image}
        width={100}
        height={80}
        alt="restaurant photo"
        unoptimized={true}
      />
      <div className="flex flex-col gap-4 p-4">
        <h1>{name}</h1>
        <div className="flex gap-4">
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

// http://localhost:3000/reserve/vivaan-fine-indian-cuisine-ottawa?day=2024-10-10&time=01:00:00.000Z&partySize=4
