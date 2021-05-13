import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
  const response = await fetch("http://localhost:3000/products", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();

  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
