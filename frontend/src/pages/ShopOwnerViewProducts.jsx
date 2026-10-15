import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  searchProduct: z.string().min(2, "Search must be at least 2 characters"),
  stockStatus: z.string().min(1, "Stock status is required"),
});

function ShopOwnerViewProducts() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(searchSchema) });
  function myFormSubmissionFunction(data) { console.log("Form submitted.", data); }

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">View Shop Products</h2>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-3"><label htmlFor="searchProduct" className="form-label">Search product</label><input type="text" className="form-control form-control-lg" id="searchProduct" placeholder="Laptop name or product ID" {...register("searchProduct")} />{errors.searchProduct && <span className="text-danger">{errors.searchProduct.message}</span>}</div>
          <div className="mb-4"><label htmlFor="stockStatus" className="form-label">Stock status</label><select className="form-select form-select-lg" id="stockStatus" {...register("stockStatus")}><option value="">Select stock status</option><option>All products</option><option>In stock</option><option>Out of stock</option></select>{errors.stockStatus && <span className="text-danger">{errors.stockStatus.message}</span>}</div>
          <button type="submit" className="btn btn-primary btn-lg w-100">Search</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default ShopOwnerViewProducts;
