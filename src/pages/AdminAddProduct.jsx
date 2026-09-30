import { useState } from 'react'

function AdminAddProduct() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex justify-content-between align-items-center">
          <div>
            <span className="badge bg-danger-subtle text-danger mb-1">
              <i className="bi bi-shield-lock me-1"></i>Admin Control Panel
            </span>
            <h4 className="fw-bold mb-0">Add New Laptop Product</h4>
            <small className="text-muted">Direct listing and catalog entry with administrative permissions</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 3 of 14</span>
        </div>

        <div className="card-custom-body">
          {success && (
            <div className="alert alert-success d-flex align-items-center mb-4">
              <i className="bi bi-check-circle-fill fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Product Added to Global Catalog!</h6>
                <p className="small mb-0">The laptop is now visible across all customer searches and marketplace pages.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Laptop Brand & Model <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="e.g. Dell Latitude 5420" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Shop / Seller Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="e.g. Abbottabad Computers" required />
              </div>

              <div className="col-md-4">
                <label className="form-label">Price (PKR) <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">₨</span>
                  <input type="number" className="form-control" placeholder="75000" min="5000" required />
                </div>
              </div>

              <div className="col-md-4">
                <label className="form-label">Location / City <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>Select location...</option>
                  <option value="Abbottabad">Abbottabad</option>
                  <option value="Mandian">Mandian</option>
                  <option value="Jinnahabad">Jinnahabad</option>
                  <option value="Havelian">Havelian</option>
                  <option value="Mansehra">Mansehra</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Physical Condition <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>Select condition...</option>
                  <option value="Like New (10/10)">Like New (10/10)</option>
                  <option value="Excellent (9/10)">Excellent (9/10)</option>
                  <option value="Good (8/10)">Good (8/10)</option>
                  <option value="Fair (7/10)">Fair (7/10)</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Processor (CPU) <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="e.g. Intel Core i5 11th Gen" required />
              </div>

              <div className="col-md-4">
                <label className="form-label">RAM Memory <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="16GB">
                  <option value="8GB">8 GB DDR4</option>
                  <option value="16GB">16 GB DDR4</option>
                  <option value="32GB">32 GB DDR4/DDR5</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Storage (SSD/HDD) <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="512GB SSD">
                  <option value="256GB SSD">256 GB NVMe SSD</option>
                  <option value="512GB SSD">512 GB NVMe SSD</option>
                  <option value="1TB SSD">1 TB NVMe SSD</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Product Image URL</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-image"></i></span>
                  <input type="url" className="form-control" placeholder="https://example.com/laptop.jpg" />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Warranty Period</label>
                <select className="form-select" defaultValue="30 Days Replacement">
                  <option value="7 Days Checking">7 Days Checking Warranty</option>
                  <option value="30 Days Replacement">30 Days Replacement Warranty</option>
                  <option value="3 Months Limited">3 Months Limited Warranty</option>
                  <option value="6 Months Warranty">6 Months Warranty</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Product Detailed Description</label>
                <textarea className="form-control" rows="3" placeholder="Condition details, battery backup time, charger details, scratch marks (if any)..."></textarea>
              </div>

              <div className="col-12 pt-2 d-flex gap-2">
                <button type="submit" className="btn btn-primary px-4">
                  <i className="bi bi-plus-circle me-2"></i>Add Product to Catalog
                </button>
                <button type="reset" className="btn btn-outline-secondary">
                  Reset Form
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminAddProduct
