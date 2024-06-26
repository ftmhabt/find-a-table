import Image from "next/image";
import MenuBar from "./restaurant-bar";

export default function RestaurantDetailsCard({
  description,
  photos,
}: {
  description: string;
  photos: string[];
}) {
  return (
    <div className="max-w-[500px] bg-slate-200 -mt-10 ml-10">
      <MenuBar/>
      <p>{description}</p>
      {photos.map((photo) => (
        <Image
          key={photos.indexOf(photo)}
          src={photo}
          width={500}
          height={500}
          alt="the photos of the restaurant"
          unoptimized={true}
        />
      ))}
    </div>
  );
}
