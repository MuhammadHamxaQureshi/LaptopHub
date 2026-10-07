import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

// =========================================================================
// LAPTOPHUB - LAB TASK 2 (14 FORMS & LANDING PAGE)
// VIVA CHECKING: Jo form check karwani ho, sirf uski line uncomment karein!
// =========================================================================

// --- 1. Authentication & Account Forms (2 Forms) ---
import Registration from './pages/Registration'
import Login from './pages/Login'

// --- 2. Admin Stakeholder Forms (4 Forms) ---
import AdminAddProduct from './pages/AdminAddProduct'
import AdminDeleteProduct from './pages/AdminDeleteProduct'
import AdminUpdateProduct from './pages/AdminUpdateProduct'
import AdminViewProducts from './pages/AdminViewProducts'

// --- 3. Shop Owner Stakeholder Forms (4 Forms) ---
import ShopOwnerAddProduct from './pages/ShopOwnerAddProduct'
import ShopOwnerDeleteProduct from './pages/ShopOwnerDeleteProduct'
import ShopOwnerUpdateProduct from './pages/ShopOwnerUpdateProduct'
import ShopOwnerViewProducts from './pages/ShopOwnerViewProducts'

// --- 4. Customer Stakeholder Forms (4 Forms) ---
import CustomerViewProducts from './pages/CustomerViewProducts'
import CustomerAddOrder from './pages/CustomerAddOrder'
import CustomerDeleteOrder from './pages/CustomerDeleteOrder'
import CustomerUpdateProfile from './pages/CustomerUpdateProfile'

// --- Optional: Landing Page ---
const starterProducts = [
  { id: 1, name: 'Dell Latitude 5420', shop: 'Abbottabad Computers', location: 'Abbottabad', price: 85000, condition: 'Excellent', stock: 'Available', specs: 'Core i5 11th Gen · 16GB · 512GB SSD', image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'HP EliteBook 840 G5', shop: 'Tech Point', location: 'Mandian', price: 68000, condition: 'Good', stock: 'Available', specs: 'Core i7 8th Gen · 8GB · 256GB SSD', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Lenovo ThinkPad T480', shop: 'Laptop Zone', location: 'Jinnahabad', price: 72000, condition: 'Like New', stock: 'Limited Stock', specs: 'Core i5 8th Gen · 16GB · 256GB SSD', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80' },
]

function LandingPage() {
  return (
    <div>
      <section className="landing-hero" id="home">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hero-tag">
                <i className="bi bi-patch-check-fill me-1"></i> VERIFIED SECOND-HAND LAPTOPS
              </span>
              <h1 className="hero-title mb-3">
                Find your perfect <span>laptop</span> for less.
              </h1>
              <p className="hero-subtitle mb-4">
                Reliable second-hand laptops, thoroughly inspected and tested with 30-day replacement warranty for students, developers & professionals.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link to="/customer/products" className="btn btn-primary btn-lg px-4 shadow-sm">
                  <i className="bi bi-laptop me-2"></i>Explore Laptops
                </Link>
              </div>

              <div className="row g-3 pt-3 border-top">
                <div className="col-4">
                  <h4 className="fw-bold text-dark mb-0">500+</h4>
                  <small className="text-muted">Laptops Sold</small>
                </div>
                <div className="col-4">
                  <h4 className="fw-bold text-dark mb-0">4.9 ★</h4>
                  <small className="text-muted">Happy Users</small>
                </div>
                <div className="col-4">
                  <h4 className="fw-bold text-dark mb-0">30 Days</h4>
                  <small className="text-muted">Warranty</small>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div id="laptopHeroCarousel" className="carousel slide hero-img-box" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  {starterProducts.map((product, index) => (
                    <button
                      key={product.id}
                      type="button"
                      data-bs-target="#laptopHeroCarousel"
                      data-bs-slide-to={index}
                      className={index === 0 ? 'active' : ''}
                      aria-current={index === 0 ? 'true' : undefined}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner rounded-4 shadow">
                  {starterProducts.map((product, index) => (
                    <div className={`carousel-item${index === 0 ? ' active' : ''}`} key={product.id}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid"
                      />
                      <div className="carousel-caption d-none d-md-block text-start">
                        <span className="badge bg-primary">{product.stock}</span>
                        <h5 className="fw-bold">{product.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#laptopHeroCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#laptopHeroCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="hero-badge-float">
                  <span className="badge bg-primary mb-1">BEST PRICE</span>
                  <div className="text-muted small">Starting from</div>
                  <h4 className="text-primary fw-bold mb-0">₨24,900</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="laptops">
        <div className="container py-3">
          <div className="section-heading mb-4">
            <span className="text-primary fw-bold small text-uppercase">Verified Inventory</span>
            <h2 className="fw-bold mt-1 mb-0">Popular Laptops in Stock</h2>
          </div>

          <div className="row g-4">
            {starterProducts.map((p) => (
              <div className="col-md-4" key={p.id}>
                <div className="product-card-preview shadow-sm h-100 d-flex flex-column justify-content-between">
                  <div>
                    <img src={p.image} alt={p.name} />
                    <div className="p-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="badge bg-light text-dark border">{p.shop}</span>
                        <span className="badge bg-success-subtle text-success">{p.stock}</span>
                      </div>
                      <h5 className="fw-bold mt-2 mb-1">{p.name}</h5>
                      <p className="text-muted small mb-2"><i className="bi bi-geo-alt me-1 text-danger"></i>{p.location}</p>
                      <p className="small text-secondary mb-3">{p.specs}</p>
                    </div>
                  </div>
                  <div className="p-3 pt-0 d-flex justify-content-between align-items-center border-top bg-light-subtle">
                    <span className="fw-bold text-primary fs-5">₨{p.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="landing-footer bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="fw-bold">
                <i className="bi bi-laptop me-2"></i>LaptopHub
              </h5>
              <p className="text-white-50 mb-0">
                Reliable second-hand laptops for students, developers and professionals.
              </p>
            </div>
            <div className="col-md-3">
              <h6 className="fw-bold">Quick Links</h6>
              <Link className="footer-link" to="/customer/products">Browse Laptops</Link>
              <Link className="footer-link" to="/register">Create Account</Link>
            </div>
            <div className="col-md-3">
              <h6 className="fw-bold">Contact</h6>
              <p className="text-white-50 mb-1"><i className="bi bi-geo-alt me-2"></i>Abbottabad</p>
              <p className="text-white-50 mb-0"><i className="bi bi-phone me-2"></i>+92 300 1234567</p>
            </div>
          </div>
          <hr className="border-secondary my-4" />
          <p className="text-white-50 small mb-0 text-center">
            © 2026 LaptopHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <div className="form-page-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-product" element={<AdminAddProduct />} />
        <Route path="/admin/delete-product" element={<AdminDeleteProduct />} />
        <Route path="/admin/update-product" element={<AdminUpdateProduct />} />
        <Route path="/admin/products" element={<AdminViewProducts />} />
        <Route path="/shop-owner/add-product" element={<ShopOwnerAddProduct />} />
        <Route path="/shop-owner/delete-product" element={<ShopOwnerDeleteProduct />} />
        <Route path="/shop-owner/update-product" element={<ShopOwnerUpdateProduct />} />
        <Route path="/shop-owner/products" element={<ShopOwnerViewProducts />} />
        <Route path="/customer/products" element={<CustomerViewProducts />} />
        <Route path="/customer/add-order" element={<CustomerAddOrder />} />
        <Route path="/customer/delete-order" element={<CustomerDeleteOrder />} />
        <Route path="/customer/profile" element={<CustomerUpdateProfile />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

const navLinkClass = ({ isActive }) =>
  `dropdown-item${isActive ? ' active' : ''}`

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded shadow-sm mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-laptop me-2"></i>LaptopHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <NavDropdown title="Authentication">
              <NavLink className={navLinkClass} to="/register">Register</NavLink>
              <NavLink className={navLinkClass} to="/login">Login</NavLink>
            </NavDropdown>
            <NavDropdown title="Admin">
              <NavLink className={navLinkClass} to="/admin/products">View Products</NavLink>
              <NavLink className={navLinkClass} to="/admin/add-product">Add Product</NavLink>
              <NavLink className={navLinkClass} to="/admin/update-product">Update Product</NavLink>
              <NavLink className={navLinkClass} to="/admin/delete-product">Delete Product</NavLink>
            </NavDropdown>
            <NavDropdown title="Shop Owner">
              <NavLink className={navLinkClass} to="/shop-owner/products">View Products</NavLink>
              <NavLink className={navLinkClass} to="/shop-owner/add-product">Add Product</NavLink>
              <NavLink className={navLinkClass} to="/shop-owner/update-product">Update Product</NavLink>
              <NavLink className={navLinkClass} to="/shop-owner/delete-product">Delete Product</NavLink>
            </NavDropdown>
            <NavDropdown title="Customer">
              <NavLink className={navLinkClass} to="/customer/products">View Products</NavLink>
              <NavLink className={navLinkClass} to="/customer/add-order">Add Order</NavLink>
              <NavLink className={navLinkClass} to="/customer/delete-order">Delete Order</NavLink>
              <NavLink className={navLinkClass} to="/customer/profile">Update Profile</NavLink>
            </NavDropdown>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function NavDropdown({ title, children }) {
  return (
    <li className="nav-item dropdown">
      <button
        className="nav-link dropdown-toggle btn btn-link"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">{children}</ul>
    </li>
  )
}

export default App
