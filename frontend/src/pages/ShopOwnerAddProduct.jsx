import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
  laptopName: z.string().min(2, "Laptop name must be at least 2 characters"),
  price: z.string().min(1, "Price is required"),
  quantity: z.string().min(1, "Quantity is required"),
  condition: z.string().min(1, "Condition is required"),
});

function ShopOwnerAddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(productSchema) });
  function myFormSubmissionFunction(data) { console.log("Form submitted.", data); }

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">Add Shop Product</h2>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-3"><label htmlFor="laptopName" className="form-label">Laptop name</label><input type="text" className="form-control form-control-lg" id="laptopName" placeholder="e.g. Lenovo ThinkPad T490" {...register("laptopName")} />{errors.laptopName && <span className="text-danger">{errors.laptopName.message}</span>}</div>
          <div className="mb-3"><label htmlFor="price" className="form-label">Price (PKR)</label><input type="number" className="form-control form-control-lg" id="price" placeholder="65000" {...register("price")} />{errors.price && <span className="text-danger">{errors.price.message}</span>}</div>
          <div className="mb-3"><label htmlFor="quantity" className="form-label">Quantity</label><input type="number" className="form-control form-control-lg" id="quantity" placeholder="1" {...register("quantity")} />{errors.quantity && <span className="text-danger">{errors.quantity.message}</span>}</div>
          <div className="mb-4"><label htmlFor="condition" className="form-label">Condition</label><select className="form-select form-select-lg" id="condition" {...register("condition")}><option value="">Select condition</option><option>Like New</option><option>Very Good</option><option>Good</option></select>{errors.condition && <span className="text-danger">{errors.condition.message}</span>}</div>
          <button type="submit" className="btn btn-primary btn-lg w-100">Publish Product</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default ShopOwnerAddProduct;
