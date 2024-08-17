import { create } from "zustand";

type UserData = {
  userToken: string;
  cartItems: string[];
  recentSearches: string[];
};

type Actions = {
  setUserToken: (token: UserData["userToken"]) => void;
  clearUserToken: () => void;
  incrementCartItem: (ind: number) => void;
  decrementCartItem: (ind: number) => void;
  addCartItem: (cartItem: number) => void;
  addRecentSearches: (rs: string) => void;
};

export const useUserStore = create<UserData & Actions>((set) => ({
  userToken: "ok",
  cartItems: [""],
  recentSearches: ["Sample", "Sample2"],
  setUserToken: (token: string) => set(() => ({ userToken: token })),
  clearUserToken: () => set(() => ({ userToken: "" })),
  incrementCartItem: (ind: number) => {
    set(() => ({}));
  },
  decrementCartItem: (ind: number) => {
    set(() => ({}));
  },
  addCartItem: (cartItem: number) => {
    set(() => ({}));
  },
  addRecentSearches: (rs: string) => {
    set(() => ({}));
  },
}));

interface CartItem {}
