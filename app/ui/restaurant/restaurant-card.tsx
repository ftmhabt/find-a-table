import Image from "next/image";
import RestaurantBar from "./restaurant-bar";
import { Review } from "@prisma/client";
import { Restaurant } from "../../restaurant/[slug]/page";
import { CalculateRatingAverage } from "../../utils/calculate-rating-average";

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
      <h3>{restaurant.name}</h3>
      <div>
        {CalculateRatingAverage(restaurant.reviews)} from 
        {restaurant.reviews.length} review
        {restaurant.reviews.length === 1 ? "" : "s"}
      </div>
      <p>{restaurant.description}</p>
      <div className="grid grid-cols-3 gap-2 p-2">
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
      </div>
      {restaurant.reviews.map((review) => (
        <div key={review.id}>
          <div>{review.name}</div>
          <div>{review.text}</div>
          <div>{review.rating}</div>
        </div>
      ))}
    </div>
  );
}
