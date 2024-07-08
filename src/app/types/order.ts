interface Order {
  id: string;
  phone: string;
  email: string;
  customer_name: string;
  customer_email: string;
  customer_gender: string;
  status: string;
  products: string[];
  order_no: string;
  subtotal: string[];
  total: string;
  discount: string;
  screenshot: string;
  discount_reason: string;
  selected_payment_method: string;
  note: string;
  payments: string;
  payment_status: string;
  due_amount: string;
  paid_amount: string;
  order_address: string;
  created_at: string;
  updated_at: string;
}
