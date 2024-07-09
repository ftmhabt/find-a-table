import { Review } from "@prisma/client";
import { Stars } from "../../utils/stars";
import Image from "next/image";

export default function ReviewCard({review}:{review:Review}) {
  return (
    <div key={review.id}>
          <div>{review.name}</div>
          <div>{review.text}</div>
          <div>{review.rating}</div>
          <div className="flex">
            {Stars(review.rating).map((starSrc, index) => (
              <Image
                key={index}
                src={starSrc}
                alt="star"
                width={10}
                height={10}
              />
            ))}
          </div>
        </div>
  )
}
