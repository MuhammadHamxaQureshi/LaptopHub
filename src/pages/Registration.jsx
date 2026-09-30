import { useState } from 'react'

function Registration({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex justify-content-between align-items-center">
          <div>
            <span className="badge bg-primary-subtle text-primary mb-1">
              <i className="bi bi-person-badge me-1"></i>Authentication
            </span>
            <h4 className="fw-bold mb-0">Create New Account</h4>
            <small className="text-muted">Register as a Customer, Shop Owner or Admin</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 1 of 14</span>
        </div>

        <div className="card-custom-body">
          {submitted && (
            <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
              <i className="bi bi-check-circle-fill fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Registration Successful!</h6>
                <p className="small mb-0">Your account has been created. You can now proceed to login.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person"></i></span>
                  <input type="text" className="form-control" placeholder="e.g. Ali Ahmed" required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Email Address <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                  <input type="email" className="form-control" placeholder="name@example.com" required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Password <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-lock"></i></span>
                  <input type="password" className="form-control" placeholder="Min 8 characters" required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-shield-lock"></i></span>
                  <input type="password" className="form-control" placeholder="Re-enter password" required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                  <input type="tel" className="form-control" placeholder="+92 3XX XXXXXXX" required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Account Stakeholder Role <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>Select stakeholder type...</option>
                  <option value="customer">Customer (Buyer)</option>
                  <option value="shop_owner">Shop Owner (Seller)</option>
                  <option value="admin">System Administrator</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Shop / Residential Address</label>
                <input type="text" className="form-control" placeholder="Shop # / Street, Area, City" />
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="termsCheck" required />
                  <label className="form-check-label small text-muted" htmlFor="termsCheck">
                    I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> & <a href="#" className="text-decoration-none">Privacy Policy</a> of LaptopHub.
                  </label>
                </div>
              </div>

              <div className="col-12 pt-2 d-flex gap-2">
                <button type="submit" className="btn btn-primary px-4">
                  <i className="bi bi-person-check me-2"></i>Create Account
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={() => onNavigate && onNavigate('login')}
                >
                  Already registered? Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
