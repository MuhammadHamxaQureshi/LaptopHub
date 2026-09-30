import { useState } from 'react'

const myShopListings = [
  { id: 'SH-01', model: 'Dell Latitude 5420', specs: 'i5 11th Gen · 16GB · 512GB SSD', price: 85000, discount: 82000, stock: 2, condition: '9/10', views: 142 },
  { id: 'SH-02', model: 'Dell XPS 13 9305', specs: 'i7 11th Gen · 16GB · 512GB SSD', price: 110000, discount: null, stock: 1, condition: '9.5/10', views: 89 },
  { id: 'SH-03', model: 'HP ProBook 450 G6', specs: 'i5 8th Gen · 8GB · 256GB SSD', price: 52000, discount: 49999, stock: 3, condition: '8.5/10', views: 230 },
]

function ShopOwnerViewProducts() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = myShopListings.filter(l => 
    l.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="form-card-container" style={{ maxWidth: '1000px' }}>
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div>
            <span className="badge bg-warning-subtle text-warning-emphasis mb-1">
              <i className="bi bi-shop-window me-1"></i>Shop Storefront & Stock
            </span>
            <h4 className="fw-bold mb-0">Abbottabad Computers — Active Inventory</h4>
            <small className="text-muted">Review performance, stock quantities, and view counts</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 10 of 14</span>
        </div>

        <div className="card-custom-body">
          {/* Summary Mini Cards */}
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="p-3 bg-light rounded border">
                <div className="text-muted small">Total Active Listings</div>
                <h3 className="fw-bold text-dark mb-0">3 Models</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 bg-light rounded border">
                <div className="text-muted small">Total In-Stock Units</div>
                <h3 className="fw-bold text-primary mb-0">6 Units</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 bg-light rounded border">
                <div className="text-muted small">Customer Inquiries</div>
                <h3 className="fw-bold text-success mb-0">461 Views</h3>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-search"></i></span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search your store laptops..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
              </div>
            </div>
            <div className="col-md-4 text-end">
              <button className="btn btn-warning w-100 fw-semibold text-dark">
                <i className="bi bi-plus-lg me-1"></i> Add Another Unit
              </button>
            </div>
          </div>

          <div className="table-responsive rounded border">
            <table className="table table-custom table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th>Item Code</th>
                  <th>Laptop Model & Specs</th>
                  <th>Price</th>
                  <th>In Stock</th>
                  <th>Condition</th>
                  <th>Customer Views</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td><span className="badge bg-light text-dark border">{item.id}</span></td>
                    <td>
                      <div className="fw-bold">{item.model}</div>
                      <small className="text-muted">{item.specs}</small>
                    </td>
                    <td>
                      <div className="fw-bold text-primary">₨{item.price.toLocaleString()}</div>
                      {item.discount && (
                        <small className="text-danger fw-semibold">Offer: ₨{item.discount.toLocaleString()}</small>
                      )}
                    </td>
                    <td><span className="badge bg-success-subtle text-success">{item.stock} Available</span></td>
                    <td><span className="badge bg-info-subtle text-info-emphasis">{item.condition}</span></td>
                    <td><i className="bi bi-eye me-1 text-muted"></i>{item.views}</td>
                    <td className="text-end">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-primary" title="Edit"><i className="bi bi-pencil"></i></button>
                        <button className="btn btn-outline-danger" title="Remove"><i className="bi bi-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopOwnerViewProducts
