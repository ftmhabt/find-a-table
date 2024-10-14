import { Review } from "@prisma/client";
import { Stars } from "../../utils/stars";
import Image from "next/image";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div key={review.id}>
      <div className="flex gap-5">
        <div>{review.name}</div>
        <div className="flex py-2">
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
      <div>{review.text}</div>
    </div>
  );
}
