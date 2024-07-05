import Image from "next/image";
import RestaurantBar from "./restaurant-bar";
import { Review } from "@prisma/client";

export default function RestaurantDetailsCard({
  description,
  photos,
  slug,
  reviews,
}: {
  description: string;
  photos: string[];
  slug: string;
  reviews: Review[];
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
      {reviews.map((review) => (
        <div key={review.id}>
          <div>{review.name}</div>
          <div>{review.text}</div>
        </div>
      ))}
    </div>
  );
}
