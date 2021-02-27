import axios from "axios";

const url = `http://localhost:3000/products`;
export const fetchProducts = () => axios.get(url);

const urlByPrice = `http://localhost:3000/products?_sort=price`;
export const fetchProductsByPrice = () => axios.get(urlByPrice);

const urlBySize = `http://localhost:3000/products?_sort=size`;
export const fetchProductsBySize = () => axios.get(urlBySize);

const urlById = `http://localhost:3000/products?_sort=id`;
export const fetchProductsById = () => axios.get(urlById);
