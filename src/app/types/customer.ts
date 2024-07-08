interface Customer {
  id: string;
  name: string;
  user: string;
  avatar: string;
  gender: string;
  email: string;
  phone: string;
  customer_address: CustomerAddress;
  created_at: string;
  updated_at: string;
}
interface CustomerAddress {
  state: string;
  city: string;
  address: string;
}
