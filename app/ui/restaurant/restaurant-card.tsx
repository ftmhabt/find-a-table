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
    <>
      <div className="flex flex-col p-6">
        <div className="flex self-center">
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
        <div className="text-sm text-center">
          {`${CalculateRatingAverage(restaurant.reviews)} from ${
            restaurant.reviews.length
          } review${restaurant.reviews.length === 1 ? "" : "s"}`}
        </div>
        <p className="py-2">{restaurant.description}</p>
        <div className="grid grid-cols-2 gap-2">
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
        <div className="py-4">
          {restaurant.reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="h-[200px]"></div>
      </div>
    </>
  );
}
