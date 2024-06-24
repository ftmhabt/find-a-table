import { PRICE } from "@prisma/client";
import React from "react";

export default function Price({ price }: { price: PRICE }) {
  switch (price) {
    case PRICE.CHEAP:
      return (
        <>
          <span>$$</span>
          <span className="text-slate-200">$$</span>
        </>
      );
      break;
    case PRICE.REGULAR:
      return (
        <>
          <span>$$$</span>
          <span className="text-slate-200">$</span>
        </>
      );
      break;
    default:
      return <span>$$$$</span>;
      break;
  }
}
