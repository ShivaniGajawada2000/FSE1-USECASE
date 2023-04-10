import axios from "axios";

const API_URL = "http://localhost:3000/api/v1.0/shopping/";

const getAllProduct = () => {
  return axios.get(API_URL + "all");
};

const getProductByName = (productName) => {
  console.log("product name in call ", productName)
  return axios.get(API_URL + `products/search/${productName}`);
};

const addProduct = () => {
  return axios.post(API_URL + "add");
};

const updateProductById = (id) => {
  return axios.put(API_URL + `update/${id}`);
};

const deleteProductById = (key) => {
    return axios.delete(API_URL + `delete/${key}`);
  };

const ProductService = {
  getAllProduct,
  getProductByName,
  addProduct,
  updateProductById,
  deleteProductById
}

export default ProductService;