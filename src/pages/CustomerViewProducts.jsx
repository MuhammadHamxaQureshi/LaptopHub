import { useState } from 'react'

const buyerProducts = [
  { id: 1, name: 'Dell Latitude 5420', shop: 'Abbottabad Computers', location: 'Abbottabad', price: 85000, condition: 'Excellent (9/10)', specs: 'Core i5 11th Gen · 16GB RAM · 512GB SSD', image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'HP EliteBook 840 G5', shop: 'Tech Point', location: 'Mandian', price: 68000, condition: 'Good (8/10)', specs: 'Core i7 8th Gen · 8GB RAM · 256GB SSD', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Lenovo ThinkPad T480', shop: 'Laptop Zone', location: 'Jinnahabad', price: 72000, condition: 'Like New (10/10)', specs: 'Core i5 8th Gen · 16GB RAM · 256GB SSD', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'MacBook Air M1 (2020)', shop: 'Apple Mart', location: 'Karakoram Plaza', price: 145000, condition: 'Like New (10/10)', specs: 'Apple M1 Chip · 8GB Unified · 256GB SSD', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80' },
]

function CustomerViewProducts({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [maxPrice, setMaxPrice] = useState(150000)

  const filtered = buyerProducts.filter(p => 
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.shop.toLowerCase().includes(searchTerm.toLowerCase())) &&
    p.price <= maxPrice
  )

  return (
    <div className="form-card-container" style={{ maxWidth: '1050px' }}>
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div>
            <span className="badge bg-success-subtle text-success mb-1">
              <i className="bi bi-cart3 me-1"></i>Customer Marketplace
            </span>
            <h4 className="fw-bold mb-0">Browse Verified Second-Hand Laptops</h4>
            <small className="text-muted">Explore checked laptops with 30-day warranty across Abbottabad</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 11 of 14</span>
        </div>

        <div className="card-custom-body">
          {/* Filters Bar */}
          <div className="row g-3 mb-4 bg-light p-3 rounded border">
            <div className="col-md-6">
              <label className="form-label small">Search Model or Shop</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-search"></i></span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g. Dell, HP, ThinkPad..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label small mb-0">Max Budget (PKR)</label>
                <span className="fw-bold text-primary small">Up to ₨{maxPrice.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                className="form-range" 
                min="30000" 
                max="200000" 
                step="5000" 
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Laptop Cards Grid */}
          <div className="row g-4">
            {filtered.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div className="card h-100 border shadow-sm product-card-preview">
                  <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-light text-dark border">{item.shop}</span>
                        <span className="badge bg-success-subtle text-success">{item.condition}</span>
                      </div>
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="text-muted small mb-2"><i className="bi bi-geo-alt-fill text-danger me-1"></i>{item.location}</p>
                      <p className="small text-secondary mb-3">{item.specs}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                      <div>
                        <small className="text-muted d-block">Price</small>
                        <h4 className="fw-bold text-primary mb-0">₨{item.price.toLocaleString()}</h4>
                      </div>
                      <button 
                        className="btn btn-primary px-3"
                        onClick={() => onNavigate && onNavigate('custAdd')}
                      >
                        <i className="bi bi-cart-plus me-1"></i> Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerViewProducts
