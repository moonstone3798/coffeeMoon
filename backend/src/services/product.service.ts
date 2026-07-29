import type { Product } from "../types/product.js";
import db from "../config/database.js";

export const getAllProducts = (
  page: number,
  limit: number
): Promise<Product[]> => {
  const offset = (page - 1) * limit;

  return new Promise((resolve, reject) => {
    db.all(
      `
      SELECT 
        products.id,
        products.name,
        products.description,
        products.price,
        products.imageUrl,
        categories.name AS category
      FROM products
      JOIN categories 
        ON products.category_id = categories.id
      LIMIT ? OFFSET ?
      `,
      [limit, offset],
      (error, rows) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(rows as Product[]);
      }
    );
  });
};