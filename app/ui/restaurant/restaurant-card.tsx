import Image from "next/image";
import RestaurantBar from "./restaurant-bar";

export default function RestaurantDetailsCard({
  description,
  photos,
  slug,
}: {
  description: string;
  photos: string[];
  slug: string;
}) {
  return (
    <div className="max-w-[500px] bg-slate-200 -mt-10 ml-10">
      <RestaurantBar slug={slug} />
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
