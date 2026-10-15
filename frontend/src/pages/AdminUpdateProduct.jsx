import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
  product: z.string().min(1, "Product is required"),
  price: z.string().min(1, "Price is required"),
  status: z.string().min(1, "Status is required"),
});

function AdminUpdateProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(productSchema) 
  });
  function myFormSubmissionFunction(data) { console.log("Form submitted.", data); }

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-3"><label htmlFor="product" className="form-label">Product</label><select className="form-select form-select-lg" id="product" {...register("product")}><option value="">Select a product</option><option>Dell Latitude 5420</option><option>HP EliteBook 840 G5</option><option>Lenovo ThinkPad T480</option></select>{errors.product && <span className="text-danger">{errors.product.message}</span>}</div>
          <div className="mb-3"><label htmlFor="price" className="form-label">New price (PKR)</label><input type="number" className="form-control form-control-lg" id="price" placeholder="85000" {...register("price")} />{errors.price && <span className="text-danger">{errors.price.message}</span>}</div>
          <div className="mb-4"><label htmlFor="status" className="form-label">Status</label><select className="form-select form-select-lg" id="status" {...register("status")}><option value="">Select status</option><option>Approved</option><option>Pending</option><option>Suspended</option></select>{errors.status && <span className="text-danger">{errors.status.message}</span>}</div>
          <button type="submit" className="btn btn-primary btn-lg w-100">Update Product</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default AdminUpdateProduct;
