import axios from "axios";
let url = "http://localhost:5000";
export const getProducts = async (category) => {
  const products = await axios({
    method: "GET",
    url: `${url}/product`,
    params: { category },
  });
  return products;
};
export const getProductById = async (id) => {
  const product = await axios({
    method: "GET",
    url: `${url}/product/${id}`,
  });
  return product;
};
