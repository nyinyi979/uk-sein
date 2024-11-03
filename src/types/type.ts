import { customer } from "./order";

export interface variant {
  id: number;
  categories: string[];
  name: string;
  mm_name: string;
  images: {
    id: number;
    created_at: string;
    updated_at: string;
    image: string;
    variant: number;
  }[];
  regular_price: string;
  discount: string;
  status: string;
  gift: string;
  color: string;
  size: string;
  material: string;
  number_of_stock: number;
  sold_out: number;
  threshold_stock: number;
  code: string;
  product: number;
}
export interface product {
  id: number;
  name: string;
  mm_name: string;
  total_product: number;
  description: string;
  images: {
    id: number;
    created_at: string;
    updated_at: string;
    image: string;
    product: number;
  }[];
  status: string;
  code: string;
  categories: string[];
  variations: variant[];
  created_at: string;
  updated_at: string;
}
export interface clientWord {
  wordID: string;
  boughtMessage: string;
  recommendMessage: string;
  profileURL: string;
  clientName: string;
  clientRole: string;
}

export interface signUpInput {
  file: File | null;
  name: string;
  phone: string;
  email: string;
  gender: string;
  password: string;
  rePassword: string;
  state: state;
  city: string;
  address: string;
}
export interface signUpInputInProfile {
  file: File | null;
  imgURL: string | undefined;
  name: string;
  phoneNo: string;
  email: string;
  gender: string;
  currentPassword: string;
  newPassword: string;
  newRePassword: string;
  state: state;
  township: string;
  address: string;
}
export type payment = "" | "Kpay" | "WavePay" | "Aya" | "Credit" | "BBK";
export interface checkOutData {
  name: string;
  phoneNo: string;
  email: string;
  state: state;
  township: string;
  address: string;
  payment: payment;
  image: File | null;
  currency: "MMK" | "USD";
}

export type state =
  | ""
  | "Yangon"
  | "Mandalay"
  | "Magway"
  | "Naypyidaw"
  | "Ayeyarwady"
  | "Bago"
  | "Sagaing"
  | "Tanintharyi"
  | "East Shan State"
  | "North Shan State"
  | "South Shan State"
  | "Kachin State"
  | "Kayin State"
  | "Mon State"
  | "Chin State"
  | "Rakhine State"
  | "Kayah State";

export interface productFilter {
  categories: {
    name: string;
    img_url: string;
  }[];
  color: string[];
  sizes: string[];
  material: string[];
  pricePerItem: {
    minimum: number;
    maximum: number;
  };
}
export interface prodcutFilterWithSet {
  color: Set<string>;
  sizes: Set<string>;
  material: Set<string>;
  pricePerItem: {
    minimum: number;
    maximum: number;
  };
}
export interface productFilters {
  possibleFilters: productFilter;
  appliedFilters: prodcutFilterWithSet;
}

export interface filter {
  values: string[];
  tag: "Color" | "Size" | "Material";
}
export interface review {
  product: 12;
  customer: customer;
  id: number;
  review: string;
  number_of_stars: string;
  created_at: "2024-08-31T07:28:17.728750Z";
}

export type customerInOrder = {
  name: string;
  email: string;
  phoneNo: string;
};
export type addressInOrder = {
  address: string;
  township: string;
  state: state;
};
export type productInOrder = {
  id: string;
  images: string[];
  name: string;
  mm_name: string;
  category: string;
  quantity: number;
  material: string;
  color: string;
  price: number;
};
export interface productInCart {
  itemID: string;
  images: string[];
  name: string;
  price: number;
  quantity: number;
  size?: string;
  material?: string;
  color?: string;
}
