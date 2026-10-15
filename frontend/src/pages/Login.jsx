import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  accountType: z.string().min(1, "Account type is required"),
});

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) });
  function myFormSubmissionFunction(data) { console.log("Form submitted.", data); }

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <div className="card shadow-sm border-0 rounded-4"><div className="card-body p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-3"><label htmlFor="email" className="form-label">Email</label><input type="email" className="form-control form-control-lg" id="email" placeholder="name@example.com" {...register("email")} />{errors.email && <span className="text-danger">{errors.email.message}</span>}</div>
          <div className="mb-3"><label htmlFor="password" className="form-label">Password</label><input type="password" className="form-control form-control-lg" id="password" placeholder="Enter password" {...register("password")} />{errors.password && <span className="text-danger">{errors.password.message}</span>}</div>
          <div className="mb-4"><label htmlFor="accountType" className="form-label">Account type</label><select className="form-select form-select-lg" id="accountType" {...register("accountType")}><option value="">Select account type</option><option>Customer</option><option>Shop Owner</option><option>Admin</option></select>{errors.accountType && <span className="text-danger">{errors.accountType.message}</span>}</div>
          <button type="submit" className="btn btn-primary btn-lg w-100">Login</button>
        </form>
      </div></div>
    </div></div></div>
  );
}

export default Login;
