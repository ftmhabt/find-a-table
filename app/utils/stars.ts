import empty from "../icons/empty-star.png";
import full from "../icons/full-star.png";
import half from "../icons/half-star.png";

export function Stars(number: number) {
  const decimal = number % 1;
  const whole = number-decimal;
  const stars = [];
  for (let i = 0; i < whole; i++) {
    stars.push(full);
  }
  if (decimal > 0) {
    stars.push(half);
    for (let i = 0; i < 5 - whole - 1; i++) {
      stars.push(empty);
    }
  } else {
    for (let i = 0; i < 5 - whole; i++) {
      stars.push(empty);
    }
  }

  return stars;
}
