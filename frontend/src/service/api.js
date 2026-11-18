import axios from "axios"; //axios library import karta hai. Axios frontend se backend ko HTTP request bhejne ka tool hai (browser ke fetch ka aasan option).

const api = axios.create({ //axios ki ek apni copy banata hai jis mein kuch settings pehle se laga di hain. Ab har request api.post(...) se jayegi.
  baseURL: "http://localhost:3000", //backend ka address hai
}); 

export async function registerUser(data) {
  return await api.post("/auth/register", data); 
}

export async function loginUser(data) {
  return await api.post("/auth/login", data);
}

//"/products/add" URL ka aakhri hissa hai, jo baseURL ke saath jur kar http://localhost:3000/products/add banta hai
//doosra argument data request ki body mein JSON ban kar jata hai//

export async function addProduct(data) { 
  return await api.post("/products/add", data);
}

export async function getProducts() {
  return await api.get("/products");
  console.log("getProducts function called" + JSON.stringify(response.data));
}

export async function updateProduct(data) {
  return await api.post("/products/update", data);
}

export async function deleteProduct(data) {
  return await api.post("/products/delete", data);
}

export async function searchProducts(data) {
  return await api.post("/products/search", data);
}

export async function placeOrder(data) {
  return await api.post("/orders/place", data);
}

export async function deleteOrder(data) {
  return await api.post("/orders/cancel", data);
}

export async function updateProfile(data) {
  return await api.post("/profile/update", data);
}