import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = async () => {

  const response = await fetch('http://localhost:3000/products', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  await console.log(response.data);

  return {
    type: FETCH_PRODUCTS,
    payload: response.data,
  }
};