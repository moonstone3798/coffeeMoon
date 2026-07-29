export async function getProducts(page: number, limit: number) {
  const response = await fetch(`http://localhost:3001/products?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error("Error al obtener productos");
  return response.json();
}