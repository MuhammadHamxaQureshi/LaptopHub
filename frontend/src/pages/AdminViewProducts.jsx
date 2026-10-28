import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../api";

const searchSchema = z.object({
  searchProduct: z.string().min(2, "Search must be at least 2 characters"),
  status: z.string().min(1, "Status is required"),
});

function AdminViewProducts() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(searchSchema) });
  function myFormSubmissionFunction(data) {
    api.post("/products/search", data)
      .then((response) => console.log(response.data))
      .catch((error) => alert(error.response?.data || "Product search failed"));
  }

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">View Products</h2>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-3"><label htmlFor="searchProduct" className="form-label">Search product</label><input type="text" className="form-control form-control-lg" id="searchProduct" placeholder="Laptop name or shop name" {...register("searchProduct")} />{errors.searchProduct && <span className="text-danger">{errors.searchProduct.message}</span>}</div>
          <div className="mb-4"><label htmlFor="status" className="form-label">Status</label><select className="form-select form-select-lg" id="status" {...register("status")}><option value="">Select status</option><option>All products</option><option>Approved</option><option>Pending</option><option>Suspended</option></select>{errors.status && <span className="text-danger">{errors.status.message}</span>}</div>
          <button type="submit" className="btn btn-primary btn-lg w-100">Search</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default AdminViewProducts;
