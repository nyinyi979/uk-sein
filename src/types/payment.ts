
export interface payment_search {
    id: number;
    created_at: string;
    updated_at: string;
    payment_name: string;
    payment_number: string;
    owner_name: string;
    image: string;
    qr_code: string[];
  }