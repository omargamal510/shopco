import { BrandResponse } from "../types/brands-types";
import { ProductResponse } from "../types/product-types.js";

// ENV_Variable_API_KEY
export const API_KEY: string | undefined = process.env.API_KEY;

// ==========

// GET Brands

export async function getBrands(
  limit: number = 5
): Promise<BrandResponse | undefined> {
  try {
    const response: Response = await fetch(
      `${API_KEY}api/v1/brands?limit=${limit}`
    );
    const brands: BrandResponse = await response.json();

    return brands;
  } catch (err) {
    console.error(err);
  }
}

// Get Products

export async function getProducts(
  limit: number = 5,
  page: number = 1
): Promise<ProductResponse | undefined> {
  try {
    const response: Response = await fetch(
      `${API_KEY}api/v1/products?limit=${limit}&page=${page}`
    );
    const products = await response.json();

    return products;
  } catch (err) {
    console.error(err);
  }
}
