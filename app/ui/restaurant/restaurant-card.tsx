import Image from "next/image";
import RestaurantBar from "./restaurant-bar";
import { Restaurant } from "../../restaurant/[slug]/page";
import { CalculateRatingAverage } from "../../utils/calculate-rating-average";
import { Stars } from "../../utils/stars";
import ReviewCard from "./review-card";

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
      <div className="flex">
        {Stars(CalculateRatingAverage(restaurant.reviews)).map(
          (starSrc, index) => (
            <Image
              key={index}
              src={starSrc}
              alt="star"
              width={10}
              height={10}
            />
          )
        )}
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
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
