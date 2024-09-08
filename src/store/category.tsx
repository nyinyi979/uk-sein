import { category } from "@/app/(default)/products/components/EachCategory";
import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";
type CategoryData = {
  categories: category[];
  setCategories: (category: category[]) => void;
};

export const useCategoryStore = create<
  CategoryData,
  [["zustand/persist", unknown]]
>(
  persist(
    (set, get) => ({
      categories: [],
      setCategories: (categories: category[]) =>
        set({
          categories,
        }),
    }),
    {
      name: "category_storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...(persistedState as CategoryData),
      }),
    },
  ),
);
