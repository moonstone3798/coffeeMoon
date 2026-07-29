export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category_id: number; 
    category?: string
}