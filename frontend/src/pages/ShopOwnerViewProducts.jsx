import { useEffect, useState } from "react";
import { getProducts } from "../service/api";

function ShopOwnerViewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data));
  }, []);

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">View Shop Products</h2>
        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead>
              <tr><th>ID</th><th>Laptop</th><th>Shop</th><th>Price</th><th>Location</th><th>Status</th></tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.laptopName}</td>
                  <td>{product.shopName}</td>
                  <td>{product.price} PKR</td>
                  <td>{product.location}</td>
                  <td>{product.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></div>
    </div></div></div>
  );
}

export default ShopOwnerViewProducts;
