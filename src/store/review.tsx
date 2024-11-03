import axios from "@/utils/axios";
import { create } from "zustand";
import { review } from "@/types/type";
type ReviewData = {
  reviewsData: {
    [key: string]: review[];
  };
  getReviews: (id: number | string) => Promise<review[]>;
};

export const useReviewStore = create<ReviewData>((set, get) => ({
  reviewsData: {},
  getReviews: async (id: string | number) => {
    const reviewsData = get().reviewsData;
    const review = reviewsData[`${id}`];
    if (review) {
      return review;
    } else {
      const res = await axios.get("product/review/", { params: { id } });
      const newReviewsData = { ...reviewsData };
      reviewsData[id] = res.data;
      set({ reviewsData: newReviewsData });
      return res.data as review[];
    }
  },
}));
