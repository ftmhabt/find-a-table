import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Price from "../../lib/price";
import { CalculateRatingAverage } from "../../utils/calculate-rating-average";
import { Stars } from "../../utils/stars";

export interface RestaurantType {
  id: Number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

export default function Card({ restaurant }: { restaurant: RestaurantType }) {
  const renderRatingDisplay = () => {
    const avg = CalculateRatingAverage(restaurant.reviews);
    if (avg > 4) return "awesome";
    else if (avg <= 4 && avg > 3) return "good";
    else if (avg <= 3 && avg > 2) return "average";
    else return "";
  };

  return (
    <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <Link href={`restaurant/${restaurant.slug}`}>
        <Image
          src={restaurant.main_image}
          width={270}
          height={120}
          alt={restaurant.name}
        />
        <div className="flex flex-col gap-2 p-2">
          <h1>{restaurant.name}</h1>
          <div>
            <div>{restaurant.cuisine.name}</div>
            <div>{restaurant.location.name}</div>
            <div>
              {restaurant.reviews.length} review
              {restaurant.reviews.length === 1 ? "" : "s"}
            </div>
            <div>{renderRatingDisplay()}</div>
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
            <div>
              <Price price={restaurant.price} />
            </div>
          </div>
          <div>booked 3 times today</div>
        </div>
      </Link>
    </div>
  );
}
