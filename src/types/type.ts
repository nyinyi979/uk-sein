export interface product {
  id: string;
  images: string[];
  name: string;
  mm_name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  price: number;
  color: string;
  category: string;
  size: string;
  material: string;
  whiteListed: boolean;
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
  phoneNo: string;
  email: string;
  gender: string;
  password: string;
  rePassword: string;
  state: state;
  township: string;
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
  id: string;
  rating: number;
  date: string;
  review: string;
  user: {
    username: string;
    imgURL: string;
  };
}

export interface productDetails {
  itemID: string;
  images: string[];
  description: string;
  name: string;
  mm_name: string;
  rating: number;
  ratings: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
  price: number;
  category: string;
  sizes: string[];
  colors: string[];
  materials: string[];
  whiteListed: boolean;
  reviews: review[];
}

export interface order {
  orderID: string;
  orderedDate: string;
  paymentMethod: "Kpay" | "WavePay" | "AyaPay" | "Credit";
  amount: number;
  productCount: number;
  status: "Pending" | "Confirmed" | "Reject";
}
export type orderStatus = "Pending" | "Confirmed" | "Reject" | "";
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
export interface orderDetails extends order {
  customer: customerInOrder;
  address: addressInOrder;
  products: productInOrder[];
}

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
