import { customer, customerAddress } from "@/types/order";
import { payment_search } from "@/types/payment";
import { variant } from "@/types/type";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserData = {
  cartItems: cartItem[];
  recentSearches: variant[];
  token: string | null;
  payments: payment_search[],
  customer: customer;
};
type Actions = {
  setPayments: (pay: payment_search[])=>void;
  addRecentSearches: (rs: variant) => void;
  addCartItems: (item: cartItem) => void;
  setToken: (token: string | null) => void;
  setCartItems: (items: cartItem[]) => void;
  clearRecentSearches: () => void;
  setCustomer: (customer: customer) => void;
};

export const init_customer:customer = {
  avatar: "",
  created_at: "",
  customer_addresses: [{
    address: "",
    city: "",
    created_at: "",
    customer: 1,
    default: true,
    id: 1,
    map: "",
    state: "",
    updated_at: ""
  }],
  email: "",
  gender: "",
  id: 1,
  name: "",
  orders: [1],
  phone: "",
  total: 0,
  updated_at: "",
}

export const useUserStore = create<
  UserData & Actions,
  [["zustand/persist", unknown]]
>(
  persist(
    (set, get) => ({
      customer: init_customer,
      token: null,
      cartItems: [],
      recentSearches: [],
      payments: [],
      addCartItems: (item: cartItem) => {
        const curCartItems = get().cartItems;
        const index = curCartItems.findIndex(
          (i) => i.variation_product === item.variation_product,
        );
        if (index !== -1) {
          if (
            curCartItems[index].quantity + 1 <=
            curCartItems[index].number_of_stock
          )
            return;
          const newCartItems = [...curCartItems];
          newCartItems[index].quantity += 1;
          newCartItems[index].subtotal =
            `${newCartItems[index].quantity * Number(newCartItems[index].regular_price)}`;

          console.log(newCartItems);
          set(() => ({ cartItems: newCartItems }));
        } else {
          const newCartItems = [...curCartItems];
          newCartItems.push(item);
          set(() => ({ cartItems: newCartItems }));
        }
      },
      setCartItems: (items: cartItem[]) => {
        set(() => ({ cartItems: items }));
      },
      addRecentSearches: (rs: variant) => {
        set(() => ({}));
      },
      clearRecentSearches: () => {
        set(() => ({ recentSearches: [] }));
      },
      setToken: (token: string | null) => {
        set(() => ({ token: token }));
      },
      setCustomer: (customer: customer) => {
        set(() => ({ customer: customer }));
      },
      setPayments: (payment_search: payment_search[]) => {
        set(()=> ({payments: payment_search}))
      }
    }),
    {
      name: "usr_storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      merge: (persistedState, currentState) => ({...currentState, ...persistedState as UserData})
    },
  ),
);

export interface cartItem {
  created_at: string;
  updated_at: string;
  quantity: number;
  regular_price: string;
  subtotal: string;
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
