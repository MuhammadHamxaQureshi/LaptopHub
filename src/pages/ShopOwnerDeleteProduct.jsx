import { useState } from 'react'

function ShopOwnerDeleteProduct() {
  const [removed, setRemoved] = useState(false)

  const handleRemove = (e) => {
    e.preventDefault()
    setRemoved(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm border-danger-subtle">
        <div className="card-custom-header d-flex justify-content-between align-items-center bg-danger-subtle text-danger">
          <div>
            <span className="badge bg-danger text-white mb-1">
              <i className="bi bi-shop me-1"></i>Shop Inventory Action
            </span>
            <h4 className="fw-bold mb-0 text-danger">Remove Laptop from Shop</h4>
            <small className="text-danger-emphasis">Take down an item from your shop listings when sold or out of stock</small>
          </div>
          <span className="badge bg-white text-danger border px-3 py-2">Form 8 of 14</span>
        </div>

        <div className="card-custom-body">
          {removed && (
            <div className="alert alert-danger d-flex align-items-center mb-4">
              <i className="bi bi-check-circle-fill fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Listing Successfully Removed!</h6>
                <p className="small mb-0">The item has been removed from your shop inventory and public buyers.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleRemove}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Select Your Shop Listing <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>Choose your item...</option>
                  <option value="1">Dell Latitude 5420 (Core i5 11th Gen) — ₨85,000</option>
                  <option value="2">Dell XPS 13 9305 — ₨110,000</option>
                  <option value="3">HP ProBook 450 G6 — ₨52,000</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Reason for Removal <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="walkin">
                  <option value="walkin">Sold to walk-in shop customer</option>
                  <option value="laptophub">Sold via LaptopHub online buyer</option>
                  <option value="repair">Hardware sent for maintenance / repair</option>
                  <option value="relocated">Transferred to another branch</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Sale Final Price (if sold)</label>
                <div className="input-group">
                  <span className="input-group-text">₨</span>
                  <input type="number" className="form-control" placeholder="82000" />
                </div>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="archiveCheck" defaultChecked />
                  <label className="form-check-label small text-muted" htmlFor="archiveCheck">
                    Keep receipt and transaction records in my shop sales history.
                  </label>
                </div>
              </div>

              <div className="col-12 pt-2">
                <button type="submit" className="btn btn-danger px-4">
                  <i className="bi bi-trash3 me-2"></i>Confirm & Remove Listing
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShopOwnerDeleteProduct
