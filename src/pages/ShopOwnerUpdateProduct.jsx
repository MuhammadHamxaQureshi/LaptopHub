import { useState } from 'react'

function ShopOwnerUpdateProduct() {
  const [updated, setUpdated] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUpdated(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex justify-content-between align-items-center">
          <div>
            <span className="badge bg-warning-subtle text-warning-emphasis mb-1">
              <i className="bi bi-pencil-square me-1"></i>Shop Inventory Edit
            </span>
            <h4 className="fw-bold mb-0">Update Shop Product & Pricing</h4>
            <small className="text-muted">Adjust discount, stock, warranty and hardware upgrades</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 9 of 14</span>
        </div>

        <div className="card-custom-body">
          {updated && (
            <div className="alert alert-success d-flex align-items-center mb-4">
              <i className="bi bi-check-circle-fill fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Shop Listing Updated!</h6>
                <p className="small mb-0">Changes to your laptop price, discount and stock are now live.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Select Listing to Edit <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="1">
                  <option value="1">Dell Latitude 5420 — Currently ₨85,000 (In Stock)</option>
                  <option value="2">Dell XPS 13 9305 — Currently ₨110,000 (In Stock)</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Regular Price (PKR) <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">₨</span>
                  <input type="number" className="form-control" defaultValue="85000" required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Special Discount Price (Optional)</label>
                <div className="input-group">
                  <span className="input-group-text">₨</span>
                  <input type="number" className="form-control" placeholder="82000" />
                </div>
              </div>

              <div className="col-md-4">
                <label className="form-label">Stock Status <span className="text-danger">*</span></label>
                <select className="form-select" defaultValue="available">
                  <option value="available">In Stock (Available)</option>
                  <option value="limited">Only 1 Left</option>
                  <option value="reserved">Reserved for Customer</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">RAM Upgraded to</label>
                <select className="form-select" defaultValue="16GB">
                  <option value="8GB">8GB DDR4</option>
                  <option value="16GB">16GB DDR4</option>
                  <option value="32GB">32GB DDR4</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">SSD Storage Upgraded to</label>
                <select className="form-select" defaultValue="512GB">
                  <option value="256GB">256GB NVMe SSD</option>
                  <option value="512GB">512GB NVMe SSD</option>
                  <option value="1TB">1TB NVMe SSD</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Shop Note for Buyers</label>
                <textarea className="form-control" rows="2" defaultValue="Special student discount available on walk-in visits. Fresh Windows 11 Pro installed."></textarea>
              </div>

              <div className="col-12 pt-2 d-flex gap-2">
                <button type="submit" className="btn btn-warning px-4 text-dark fw-semibold">
                  <i className="bi bi-check2-all me-2"></i>Update Shop Listing
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShopOwnerUpdateProduct
