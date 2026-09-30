import './App.css'

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
                <a href="#laptops" className="btn btn-primary btn-lg px-4 shadow-sm">
                  <i className="bi bi-laptop me-2"></i>Explore Laptops
                </a>
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
              <div className="hero-img-box">
                <img 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85" 
                  alt="Modern Laptop Workspace" 
                  className="img-fluid"
                />
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
    </div>
  )
}

function App() {
  return (
    <div className="form-page-wrapper">
      {/* ========================================================================= */}
      {/* VIVA TESTING: Sir ko jo form dikhana ho, sirf usko uncomment karein       */}
      {/* Baki sab forms ko comment (//) rehne dein.                                 */}
      {/* ========================================================================= */}

      {/* --- 0. Landing Page --- */}
      {/* <LandingPage /> */}

      {/* --- 1. AUTHENTICATION FORMS --- */}
      <Registration />
      {/* <Login /> */}

      {/* --- 2. ADMIN STAKEHOLDER FORMS --- */}
      {/* <AdminAddProduct /> */}
      {/* <AdminDeleteProduct /> */}
      {/* <AdminUpdateProduct /> */}
      {/* <AdminViewProducts /> */}

      {/* --- 3. SHOP OWNER STAKEHOLDER FORMS --- */}
      {/* <ShopOwnerAddProduct /> */}
      {/* <ShopOwnerDeleteProduct /> */}
      {/* <ShopOwnerUpdateProduct /> */}
      {/* <ShopOwnerViewProducts /> */}

      {/* --- 4. CUSTOMER STAKEHOLDER FORMS --- */}
      {/* <CustomerViewProducts /> */}
      {/* <CustomerAddOrder /> */}
      {/* <CustomerDeleteOrder /> */}
      {/* <CustomerUpdateProfile /> */}
    </div>
  )
}

export default App
