import { review } from "@/types/type";
import React from "react";

export default function useRatings({reviews}:{reviews: review[]}){
    const ratings = React.useMemo(() => {
        const ratings = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        };
        let overall = 0;
        reviews.map((r) => {
          const num = r.number_of_stars ? Math.floor(Number(r.number_of_stars)) : 1;
          switch (num) {
            case 1:
              ratings[1] += 1;
              break;
            case 2:
              ratings[2] += 1;
              break;
            case 3:
              ratings[3] += 1;
              break;
            case 4:
              ratings[4] += 1;
              break;
            case 5:
              ratings[5] += 1;
              break;
            default:
          }
        });
        overall =
          (5 * ratings[5] +
            4 * ratings[4] +
            3 * ratings[3] +
            2 * ratings[2] +
            1 * ratings[1]) /
          (ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5]);
        return {
          rating: Number(overall.toFixed(2))||0,
          ratings: ratings,
        };
      }, [reviews]);
      return ratings
}