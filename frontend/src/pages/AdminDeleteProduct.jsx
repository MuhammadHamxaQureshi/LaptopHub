import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../api";

const productSchema = z.object({
  product: z
    .string()
    .min(1, "Product is required"),
  reason: z
    .string()
    .min(5, "Reason must be at least 5 characters")
    .max(50, "Reason must be at most 50 characters"),
});

function AdminDeleteProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  function myFormSubmissionFunction(data) {
    api.post("/products/delete", data)
      .then((response) => alert(response.data))
      .catch((error) => alert(error.response?.data || "Product delete failed"));
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">
                Delete Product
              </h2>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="mb-3">
                  <label htmlFor="product" className="form-label">
                    Product
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="product"
                    {...register("product")}
                  >
                    <option value="">Select a product</option>
                    <option value="Dell Latitude 5420">Dell Latitude 5420</option>
                    <option value="HP EliteBook 840 G5">HP EliteBook 840 G5</option>
                    <option value="Lenovo ThinkPad T480">Lenovo ThinkPad T480</option>
                  </select>
                  {errors.product && (
                    <span className="text-danger">
                      {errors.product.message}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="reason" className="form-label">
                    Reason
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="reason"
                    placeholder="Why should it be removed?"
                    {...register("reason")}
                  />
                  {errors.reason && (
                    <span className="text-danger">
                      {errors.reason.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-danger btn-lg w-100">
                  Delete Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDeleteProduct;
