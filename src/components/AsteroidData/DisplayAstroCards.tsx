import { useQuery } from "@tanstack/react-query";
import AstroCard from "./AstroCard";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { AsteroidApiResponse } from "@/utils/types";

const api = `${process.env.NEXT_PUBLIC_API}?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

const DisplayAstroCards = () => {
  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["close-asteroids"],
    queryFn: async () => {
      const res = await axios.get(api, {
        params: {
          start_date: "2024-12-08",
          end_date: "2024-12-09",
        },
      });

      const data = res.data as AsteroidApiResponse;

      return data;
    },
  });

  console.log(data);

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center gap-3">
        <LoaderCircle className="animate-spin" />
        <p className="">Fetching information....</p>
      </div>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <div className="space-y-4 w-full p-3">
        {Object.keys(data.near_earth_objects).map((date) => (
          <div key={date}>
            <h2 className="text-xl font-semibold mb-4">{date}</h2>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
              {data.near_earth_objects[date].map((asteroid) => (
                <AstroCard key={asteroid.id} asteroid={asteroid} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default DisplayAstroCards;
