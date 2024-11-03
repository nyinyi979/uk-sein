import { cities, states } from "@/types/address";

export interface CustomerCreate {
  name: string;
  username: string;
  phone: string;
  email: string;
  gender: string;
  avatar: string;
  orders: [];
  password: string;
  password_confirm: string;
  customer_addresses: {
    state: states;
    address: string;
    city: string;
    map: string;
    default: boolean;
  }[];
}
