import Image from "next/image";

export default function ReservationInfo() {
  return (
    <div className="flex gap-4 p-4 border border-zinc-800">
      <Image
        className="object-cover"
        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={100}
        height={80}
        alt="restaurant photo"
        unoptimized={true}
      />
      <div className="flex flex-col gap-4 p-4">
        <h1>name</h1>
        <div className="flex gap-4">
          <div>date</div>
          <div>hour</div>
          <div>people</div>
        </div>
      </div>
    </div>
  );
}
