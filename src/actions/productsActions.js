import axios from "axios";
let url = process.env.REACT_APP_API   ;
export const getProducts = async (type,data) => {
  let query = {
    category:null,
    ids:null,
  };
  if (type === "category") {
    query.category=data;
  } else if(type==="ids") {
    query.ids=data ;
  }
  const products = await axios({
    method: "GET",
    url: `${url}/product`,
    params: query,
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
