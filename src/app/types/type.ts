export interface product {
  itemID: string;
  imageURL: string;
  engName: string;
  myName: string;
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
  name: string;
  phoneNo: string;
  email: string;
  gender: "Male" | "Female" | "Other" | "";
  password: string;
  rePassword: string;
  state: state;
  township: string;
  address: string;
}

export type state =
  | ""
  | "Yangon (ရန်ကုန်တိုင်း)"
  | "Kayah State (ကယားပြည်နယ်)"
  | "Rakhine State (ရခိုင်ပြည်နယ်)"
  | "Chin State (ချင်းပြည်နယ်)"
  | "Mon State (မွန်ပြည်နယ်)"
  | "South Shan State (တောင်ပိုင်းရှမ်းပြည်နယ်)"
  | "North Shan State (ရှမ်းပြည်နယ်မြောက်ပိုင်း )"
  | "Mandalay (မန္တလေးတိုင်း)"
  | "East Shan State (အရှေ့ရှမ်းပြည်နယ်)"
  | "Tanintharyi (တနင်္သာရီတိုင်း)"
  | "Sagaing (စစ်ကိုင်းတိုင်း)"
  | "Bago (ပဲခူးတိုင်း)"
  | "Ayeyarwady (ဧရာဝတီတိုင်း)";

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
  categories: Set<string>;
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
  imageURLs: string[];
  description: string;
  engName: string;
  myName: string;
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
