import { create } from "zustand";

type UserData = {
  preferredLanguage: "en" | "my";
  userToken: string;
  cartItems: string[];
};

type Actions = {
  updateLanguage: (lang: UserData["preferredLanguage"]) => void;
  setUserToken: (token: UserData["userToken"]) => void;
  clearUserToken: () => void;
  incrementCartItem: (ind: number) => void;
  decrementCartItem: (ind: number) => void;
  addCartItem: (cartItem: number) => void;
};

export const useUserStore = create<UserData & Actions>((set) => ({
  preferredLanguage: "en",
  userToken: "ok",
  cartItems: [""],
  updateLanguage: (lang: "en" | "my") =>
    set(() => ({ preferredLanguage: lang })),
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
}));
