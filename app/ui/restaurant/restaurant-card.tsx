import Image from "next/image";
import RestaurantBar from "./restaurant-bar";
import { Review } from "@prisma/client";
import { Restaurant } from "../../restaurant/[slug]/page";

export default function RestaurantDetailsCard({
  restaurant,
  slug,
}: {
  restaurant: Restaurant;
  slug: string;
}) {
  return (
    <div className="max-w-[500px] bg-slate-200 -mt-10 ml-10">
      <RestaurantBar slug={slug} />
      <p>{restaurant.description}</p>
      {restaurant.images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={500}
          height={500}
          alt="the images of the restaurant"
          unoptimized={true}
        />
      ))}
      {restaurant.reviews.map((review) => (
        <div key={review.id}>
          <div>{review.name}</div>
          <div>{review.text}</div>
        </div>
      ))}
    </div>
  );
}
