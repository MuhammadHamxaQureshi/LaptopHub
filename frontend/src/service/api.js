import axios from 'axios';
const API_URL = "http://localhost:3000";

export async function addProductAxiosFunction(data) {
  try {
    const response = await axios.post(`${API_URL}/add-product`, data);
    console.log("Product added successfully:", response.data);
  } catch (error) {
    console.error("Error adding product:", error);
  }
}