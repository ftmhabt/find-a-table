import Image from "next/image";

export default function RestaurantDetailsCard({
  name,
  description,
  photos,
}: {
  name: string;
  description: string;
  photos: string[];
}) {
  return (
    <div className="max-w-[500px] bg-slate-200 -mt-10 ml-10">
      <h1>{name}</h1>
      <p>{description}</p>
      {photos.map((photo) => (
        <Image
          key={photos.indexOf(photo)}
          src={photo}
          width={500}
          height={500}
          alt={name}
          unoptimized={true}
        />
      ))}
    </div>
  );
}
