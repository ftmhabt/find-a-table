import { Review } from "@prisma/client";

export function CalculateRatingAverage(reviews: Review[]) {
    if (!reviews.length) return 0;
    const rating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    return rating % 1 === 0 ? rating : rating.toFixed(1);
}
