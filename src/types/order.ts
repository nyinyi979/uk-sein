import { cartItem } from "@/store/clientData";
import { Dayjs } from "dayjs";
import { states } from "./address";

export type orderStatus = "Pending" | "Completed" | "";
export interface order {
  id: number;
  phone: string;
  email: string | null;
  customer_name: string;
  customer_email: string;
  customer_gender: string;
  customer: customer;
  status: string;
  products: cartItem[];
  order_no: number;
  subtotal: string;
  total: number;
  discount: string;
  screenshot: string;
  delivery_company: string;
  discount_reason: string;
  selected_payment_method: null;
  note: string;
  payments: paymentInOrder[];
  payment_status: string;
  due_amount: string;
  paid_amount: string;
  order_address: {
    id: number;
    address: string;
    city: string;
    map: string;
    state: string;
  };
  total_usd: number;
  created_at: string;
  updated_at: string;
}
export const Initial_Order: order = {
  id: 8,
  phone: "",
  email: null,
  customer_name: "",
  customer_email: "",
  customer_gender: "",
  customer: {
    avatar: "",
    created_at: "",
    customer_addresses: [],
    email: "",
    gender: "",
    id: 1,
    name: "",
    orders: [],
    phone: "",
    total: 0,
    updated_at: "",
    user: {
      id: 1,
      first_name: "",
      last_name: "",
      avatar: "",
      date_joined: "",
      email: "",
      is_active: true,
      is_superuser: false,
      last_login: "",
      phone: "",
      role: "",
      type: "",
      username: "",
    },
  },
  status: "Pending",
  products: [],
  order_no: 0,
  subtotal: "",
  total: 0,
  total_usd: 0,
  discount: "0",
  screenshot: "",
  delivery_company: "",
  discount_reason: "",
  selected_payment_method: null,
  note: "",
  payments: [],
  payment_status: "Unpaid",
  due_amount: "",
  paid_amount: "",
  order_address: {
    id: 1,
    address: "",
    city: "",
    map: "",
    state: "",
  },
  created_at: "",
  updated_at: "",
};

export interface paymentInOrder {
  amount: string;
  screenshot: string;
  payment_time: Dayjs;
  payment_date: Dayjs;
  status: string;
  rejected_note: string;
  payment_type: string;
  order_id: number;
}

export interface customer {
  id: number;
  name: string;
  user?: {
    id: number;
    is_superuser: boolean;
    first_name: string;
    phone: string;
    last_name: string;
    email: string;
    avatar: string;
    username: string;
    role: string;
    type: string;
    is_active: boolean;
    last_login: any;
    date_joined: string;
  };
  avatar: string;
  gender: string;
  orders: number[];
  email: string;
  phone: string;
  customer_addresses: customerAddress[];
  created_at: string;
  updated_at: string;
  total: number;
}
export interface customerAddress {
  id: number;
  created_at: string;
  updated_at: string;
  address: string;
  state: states;
  city: string;
  map: string;
  default: boolean;
  customer: number;
}
