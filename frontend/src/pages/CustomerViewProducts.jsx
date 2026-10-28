import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../api";

const searchSchema = z.object({
  searchLaptop: z.string().min(2, "Search must be at least 2 characters"),
  maximumBudget: z.string().min(1, "Maximum budget is required"),
  location: z.string().min(1, "Location is required"),
});

function CustomerViewProducts() {
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
          <div className="mb-3"><label htmlFor="searchLaptop" className="form-label">Search laptop</label><input type="text" className="form-control form-control-lg" id="searchLaptop" placeholder="e.g. Dell, HP or Lenovo" {...register("searchLaptop")} />{errors.searchLaptop && <span className="text-danger">{errors.searchLaptop.message}</span>}</div>
          <div className="mb-3"><label htmlFor="maximumBudget" className="form-label">Maximum budget (PKR)</label><input type="number" className="form-control form-control-lg" id="maximumBudget" placeholder="150000" {...register("maximumBudget")} />{errors.maximumBudget && <span className="text-danger">{errors.maximumBudget.message}</span>}</div>
          <div className="mb-4"><label htmlFor="location" className="form-label">Location</label><select className="form-select form-select-lg" id="location" {...register("location")}><option value="">Select location</option><option>All locations</option><option>Abbottabad</option><option>Mandian</option><option>Havelian</option></select>{errors.location && <span className="text-danger">{errors.location.message}</span>}</div>
          <button type="submit" className="btn btn-primary btn-lg w-100">Search</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default CustomerViewProducts;
