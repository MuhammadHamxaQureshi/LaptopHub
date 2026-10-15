import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
  laptopName: z.string().min(2, "Laptop name must be at least 2 characters"),
  shopName: z.string().min(2, "Shop name must be at least 2 characters"),
  price: z.string().min(1, "Price is required"),
  location: z.string().min(1, "Location is required"),
});

function AdminAddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(productSchema) });
  function myFormSubmissionFunction(data) { console.log("Form submitted.", data); }

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-3"><label htmlFor="laptopName" className="form-label">Laptop name</label><input type="text" className="form-control form-control-lg" id="laptopName" placeholder="e.g. Dell Latitude 5420" {...register("laptopName")} />{errors.laptopName && <span className="text-danger">{errors.laptopName.message}</span>}</div>
          <div className="mb-3"><label htmlFor="shopName" className="form-label">Shop name</label><input type="text" className="form-control form-control-lg" id="shopName" placeholder="e.g. Abbottabad Computers" {...register("shopName")} />{errors.shopName && <span className="text-danger">{errors.shopName.message}</span>}</div>
          <div className="mb-3"><label htmlFor="price" className="form-label">Price (PKR)</label><input type="number" className="form-control form-control-lg" id="price" placeholder="75000" {...register("price")} />{errors.price && <span className="text-danger">{errors.price.message}</span>}</div>
          <div className="mb-4"><label htmlFor="location" className="form-label">Location</label><select className="form-select form-select-lg" id="location" {...register("location")}><option value="">Select location</option><option>Abbottabad</option><option>Mandian</option><option>Havelian</option></select>{errors.location && <span className="text-danger">{errors.location.message}</span>}</div>
          <button type="submit" className="btn btn-primary btn-lg w-100">Add Product</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default AdminAddProduct;
