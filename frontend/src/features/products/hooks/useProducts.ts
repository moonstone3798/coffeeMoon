"use client";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { getProducts } from "../services/product.service";

const useProducts = () => {
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);
const [page, setPage] = useState<number>(1);
const [limit, setLimit] = useState<number>(10);
const fetchProducts = async ()=> {
    try{
    setLoading(true);
    setError(null);
const response = await getProducts(page, limit);
    setProducts(response.data);
    }catch (error) {
         if (error instanceof Error) {
    setError(error.message);
  } else {
    setError("Error al obtener productos");
  }
    }finally{
        setLoading(false);
    }
}
useEffect(() => {
    fetchProducts();
  }, [page, limit]);
  return { products, loading, error , setPage, setLimit, page, limit };
};
export default useProducts;