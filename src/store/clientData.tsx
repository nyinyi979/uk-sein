import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserData = {
  cartItems: cartItem[];
  recentSearches: string[];
  token: string | null;
};
type Actions = {
  addRecentSearches: (rs: string) => void;
  addCartItems: (item: cartItem) => void;
  setToken: (token: string | null) => void;
  setCartItems: (items: cartItem[]) => void;
};

export const useUserStore = create<
  UserData & Actions,
  [["zustand/persist", unknown]]
>(
  persist(
    (set, get) => ({
      token: null,
      cartItems: [],
      recentSearches: ["Sample", "Sample2"],
      addCartItems: (item: cartItem) => {
        const curCartItems = get().cartItems;
        const index = curCartItems.findIndex(
          (i) => i.variation_product === item.variation_product
        );
        if (index !== -1) {
          if (
            curCartItems[index].quantity + item.quantity <=
            curCartItems[index].number_of_stock
          ) {
            curCartItems[index].quantity += item.quantity;
          }
          set(() => ({ cartItems: curCartItems }));
        } else {
          const newCartItems = [...curCartItems];
          newCartItems.push(item);
          set(() => ({ cartItems: newCartItems }));
        }
      },
      setCartItems: (items: cartItem[]) => {
        set(() => ({ cartItems: items }));
      },
      addRecentSearches: (rs: string) => {
        set(() => ({}));
      },
      setToken: (token: string|null) => {
        set(()=> ({token: token}))
      },
    }),
    {
      name: "usr_storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export interface cartItem {
  created_at: string;
  updated_at: string;
  quantity: number;
  regular_price: number;
  subtotal: number;
  name: string;
  mm_name: string;
  image: string;
  code: string;
  categories: string[];
  color: string;
  size: string;
  material: string;
  variation_product: number;
  product: number;
  number_of_stock: number;
}
