interface ProductVariation {
  id: string;
  categories: string;
  name: string;
  mm_name: string;
  images: string;
  regular_price: string;
  discount: string;
  status: string;
  gift: string;
  color: string;
  size: string;
  material: string;
  number_of_stock: string;
  sold_out: string;
  threshold_stock: string;
  code: string;
  product: string;
}
interface Product {
  id: string;
  name: string;
  mm_name: string;
  total_products: string;
  description: string;
  images: string;
  status: string;
  code: string;
  categories: string;
  variations: string;
  created_at: string;
  updated_at: string;
}
