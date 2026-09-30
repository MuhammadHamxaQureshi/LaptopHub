import { useState } from 'react'

function Login({ onNavigate }) {
  const [role, setRole] = useState('customer')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoggedIn(true)
  }

  return (
    <div className="form-card-container" style={{ maxWidth: '550px' }}>
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header text-center">
          <div className="feature-icon-circle mx-auto mb-2">
            <i className="bi bi-shield-lock-fill"></i>
          </div>
          <h4 className="fw-bold mb-1">Welcome Back</h4>
          <p className="text-muted small mb-0">Sign in to your LaptopHub account</p>
        </div>

        <div className="card-custom-body">
          {loggedIn && (
            <div className="alert alert-success d-flex align-items-center mb-3">
              <i className="bi bi-check-circle-fill me-2 fs-5"></i>
              <div>Login successful as <strong>{role.toUpperCase()}</strong>!</div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Stakeholder Role</label>
              <div className="btn-group w-100" role="group">
                <input 
                  type="radio" 
                  className="btn-check" 
                  name="userRole" 
                  id="roleAdmin" 
                  checked={role === 'admin'} 
                  onChange={() => setRole('admin')} 
                />
                <label className="btn btn-outline-primary btn-sm" htmlFor="roleAdmin">
                  <i className="bi bi-gear-fill me-1"></i> Admin
                </label>

                <input 
                  type="radio" 
                  className="btn-check" 
                  name="userRole" 
                  id="roleShop" 
                  checked={role === 'shop_owner'} 
                  onChange={() => setRole('shop_owner')} 
                />
                <label className="btn btn-outline-primary btn-sm" htmlFor="roleShop">
                  <i className="bi bi-shop me-1"></i> Shop Owner
                </label>

                <input 
                  type="radio" 
                  className="btn-check" 
                  name="userRole" 
                  id="roleCustomer" 
                  checked={role === 'customer'} 
                  onChange={() => setRole('customer')} 
                />
                <label className="btn btn-outline-primary btn-sm" htmlFor="roleCustomer">
                  <i className="bi bi-person me-1"></i> Customer
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                <input type="email" className="form-control" placeholder="user@laptophub.com" required />
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label mb-0">Password <span className="text-danger">*</span></label>
                <a href="#" className="small text-decoration-none">Forgot password?</a>
              </div>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-key"></i></span>
                <input type="password" className="form-control" placeholder="••••••••" required />
              </div>
            </div>

            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label small text-muted" htmlFor="rememberMe">Remember my login</label>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
              <i className="bi bi-box-arrow-in-right me-2"></i>Sign In
            </button>

            <div className="text-center">
              <span className="small text-muted">Don't have an account? </span>
              <button 
                type="button" 
                className="btn btn-link btn-sm text-decoration-none p-0 fw-semibold"
                onClick={() => onNavigate && onNavigate('registration')}
              >
                Register Here
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
