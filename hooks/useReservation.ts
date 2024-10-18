import { useState } from "react";
import axios from "axios";

export default function useReservation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    slug,
    day,
    time,
    partySize,
    bookerName,
    bookerEmail,
    bookerPhone,
    bookerOccasion,
    bookerRequest,
  }: {
    slug: string;
    day: string;
    time: string;
    partySize: number;
    bookerName: string;
    bookerEmail: string;
    bookerPhone: string;
    bookerOccasion: string;
    bookerRequest: string;
  }) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `https://find-a-table.vercel.app/api/restaurant/${slug}/reserve`,
        { bookerName, bookerEmail, bookerPhone, bookerOccasion, bookerRequest },
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      return response.data;
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, createReservation };
}
