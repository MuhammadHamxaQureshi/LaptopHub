import { useState } from 'react'

const allProducts = [
  { id: 'LP-101', name: 'Dell Latitude 5420', shop: 'Abbottabad Computers', price: 85000, condition: 'Excellent (9/10)', status: 'Approved', verified: true },
  { id: 'LP-102', name: 'HP EliteBook 840 G5', shop: 'Tech Point', price: 68000, condition: 'Good (8/10)', status: 'Approved', verified: true },
  { id: 'LP-103', name: 'Lenovo ThinkPad T480', shop: 'Laptop Zone', price: 72000, condition: 'Like New (10/10)', status: 'Pending Review', verified: false },
  { id: 'LP-104', name: 'MacBook Air M1 2020', shop: 'Apple Mart', price: 145000, condition: 'Like New (10/10)', status: 'Approved', verified: true },
  { id: 'LP-105', name: 'Dell XPS 13 9305', shop: 'Abbottabad Computers', price: 110000, condition: 'Excellent (9/10)', status: 'Suspended', verified: false },
]

function AdminViewProducts() {
  const [filter, setFilter] = useState('')

  const filteredProducts = allProducts.filter(p => 
    p.name.toLowerCase().includes(filter.toLowerCase()) || 
    p.shop.toLowerCase().includes(filter.toLowerCase()) ||
    p.id.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="form-card-container" style={{ maxWidth: '1050px' }}>
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div>
            <span className="badge bg-danger-subtle text-danger mb-1">
              <i className="bi bi-speedometer2 me-1"></i>Admin Dashboard
            </span>
            <h4 className="fw-bold mb-0">Master Product Catalog</h4>
            <small className="text-muted">Manage, inspect, and moderate all platform products</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 6 of 14</span>
        </div>

        <div className="card-custom-body">
          {/* Search & Filter bar */}
          <div className="row g-3 mb-4 align-items-center">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-search"></i></span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search by laptop name, shop or product ID..." 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option value="">All Statuses</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending Review</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            <div className="col-md-3 text-md-end">
              <button className="btn btn-outline-secondary w-100" onClick={() => setFilter('')}>
                <i className="bi bi-arrow-clockwise me-1"></i> Reset Filters
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive rounded border">
            <table className="table table-custom table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Laptop Model</th>
                  <th>Shop / Vendor</th>
                  <th>Condition</th>
                  <th>Price (PKR)</th>
                  <th>Status</th>
                  <th>Verified</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p) => (
                  <tr key={p.id}>
                    <td><span className="badge bg-light text-dark border fw-semibold">{p.id}</span></td>
                    <td className="fw-bold">{p.name}</td>
                    <td>{p.shop}</td>
                    <td><small className="text-muted">{p.condition}</small></td>
                    <td className="fw-bold text-primary">₨{p.price.toLocaleString()}</td>
                    <td>
                      <span className={`badge ${
                        p.status === 'Approved' ? 'bg-success-subtle text-success' : 
                        p.status === 'Pending Review' ? 'bg-warning-subtle text-warning' : 
                        'bg-danger-subtle text-danger'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td>
                      {p.verified ? (
                        <span className="text-success small fw-semibold"><i className="bi bi-patch-check-fill me-1"></i>Verified</span>
                      ) : (
                        <span className="text-muted small">Standard</span>
                      )}
                    </td>
                    <td className="text-end">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-primary" title="Edit Product"><i className="bi bi-pencil"></i></button>
                        <button className="btn btn-outline-danger" title="Delete Product"><i className="bi bi-trash"></i></button>
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

export default AdminViewProducts
