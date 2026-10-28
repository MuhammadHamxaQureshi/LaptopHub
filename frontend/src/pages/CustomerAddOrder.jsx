import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../api";

const orderSchema = z.object({
  laptop: z.string().min(1, "Laptop is required"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  deliveryAddress: z.string().min(10, "Address must be at least 10 characters"),
});

function CustomerAddOrder() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(orderSchema) });
  function myFormSubmissionFunction(data) {
    api.post("/orders/place", data)
      .then((response) => alert(response.data))
      .catch((error) => alert(error.response?.data || "Order failed"));
  }

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">Place Order</h2>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-3"><label htmlFor="laptop" className="form-label">Laptop</label><select className="form-select form-select-lg" id="laptop" {...register("laptop")}><option value="">Select a laptop</option><option>Dell Latitude 5420</option><option>HP EliteBook 840 G5</option><option>Lenovo ThinkPad T480</option></select>{errors.laptop && <span className="text-danger">{errors.laptop.message}</span>}</div>
          <div className="mb-3"><label htmlFor="fullName" className="form-label">Full name</label><input type="text" className="form-control form-control-lg" id="fullName" placeholder="Your full name" {...register("fullName")} />{errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}</div>
          <div className="mb-3"><label htmlFor="phoneNumber" className="form-label">Phone number</label><input type="tel" className="form-control form-control-lg" id="phoneNumber" placeholder="+92 3XX XXXXXXX" {...register("phoneNumber")} />{errors.phoneNumber && <span className="text-danger">{errors.phoneNumber.message}</span>}</div>
          <div className="mb-4"><label htmlFor="deliveryAddress" className="form-label">Delivery address</label><textarea className="form-control form-control-lg" id="deliveryAddress" rows="4" placeholder="City and address" {...register("deliveryAddress")}></textarea>{errors.deliveryAddress && <span className="text-danger">{errors.deliveryAddress.message}</span>}</div>
          <button type="submit" className="btn btn-primary btn-lg w-100">Place Order</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default CustomerAddOrder;
