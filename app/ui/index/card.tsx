import Image from "next/image";

export default function Card() {
  return (
    <div className="w-[200px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <Image
        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={200}
        height={120}
        alt="name"
        unoptimized={true}
      />
      <div className="flex flex-col gap-2 p-2">
        <h1>name</h1>
        <div>booked 3 times today</div>
      </div>
    </div>
  );
}
