import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const profileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  city: z.string().min(1, "City is required"),
});

function CustomerUpdateProfile() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(profileSchema) });
  function myFormSubmissionFunction(data) { console.log("Form submitted.", data); }

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">Update Profile</h2>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-3"><label htmlFor="fullName" className="form-label">Full name</label><input type="text" className="form-control form-control-lg" id="fullName" placeholder="Your full name" {...register("fullName")} />{errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}</div>
          <div className="mb-3"><label htmlFor="email" className="form-label">Email</label><input type="email" className="form-control form-control-lg" id="email" placeholder="name@example.com" {...register("email")} />{errors.email && <span className="text-danger">{errors.email.message}</span>}</div>
          <div className="mb-3"><label htmlFor="phoneNumber" className="form-label">Phone number</label><input type="tel" className="form-control form-control-lg" id="phoneNumber" placeholder="+92 3XX XXXXXXX" {...register("phoneNumber")} />{errors.phoneNumber && <span className="text-danger">{errors.phoneNumber.message}</span>}</div>
          <div className="mb-4"><label htmlFor="city" className="form-label">City</label><select className="form-select form-select-lg" id="city" {...register("city")}><option value="">Select city</option><option>Abbottabad</option><option>Mandian</option><option>Havelian</option><option>Mansehra</option></select>{errors.city && <span className="text-danger">{errors.city.message}</span>}</div>
          <button type="submit" className="btn btn-primary btn-lg w-100">Save Profile</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default CustomerUpdateProfile;
