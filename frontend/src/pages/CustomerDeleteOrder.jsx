import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const orderSchema = z.object({
  order: z.string().min(1, "Order is required"),
  reason: z.string().min(5, "Reason must be at least 5 characters").max(50, "Reason must be at most 50 characters"),
});

function CustomerDeleteOrder() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(orderSchema) });
  function myFormSubmissionFunction(data) { console.log("Form submitted.", data); }

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">Cancel Order</h2>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-3"><label htmlFor="order" className="form-label">Order</label><select className="form-select form-select-lg" id="order" {...register("order")}><option value="">Select an order</option><option>ORD-8492 - Dell Latitude 5420</option><option>ORD-8310 - Lenovo ThinkPad T480</option></select>{errors.order && <span className="text-danger">{errors.order.message}</span>}</div>
          <div className="mb-4"><label htmlFor="reason" className="form-label">Reason</label><input type="text" className="form-control form-control-lg" id="reason" placeholder="Why are you cancelling?" {...register("reason")} />{errors.reason && <span className="text-danger">{errors.reason.message}</span>}</div>
          <button type="submit" className="btn btn-danger btn-lg w-100">Cancel Order</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default CustomerDeleteOrder;
