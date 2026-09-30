import { useState } from 'react'

function AdminDeleteProduct() {
  const [deleted, setDeleted] = useState(false)

  const handleDelete = (e) => {
    e.preventDefault()
    setDeleted(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm border-danger-subtle">
        <div className="card-custom-header d-flex justify-content-between align-items-center bg-danger-subtle text-danger">
          <div>
            <span className="badge bg-danger text-white mb-1">
              <i className="bi bi-shield-slash me-1"></i>Admin Action
            </span>
            <h4 className="fw-bold mb-0 text-danger">Delete / Delist Laptop Product</h4>
            <small className="text-danger-emphasis">Remove fraudulent, counterfeit, or prohibited product from marketplace</small>
          </div>
          <span className="badge bg-white text-danger border px-3 py-2">Form 4 of 14</span>
        </div>

        <div className="card-custom-body">
          {deleted && (
            <div className="alert alert-danger d-flex align-items-center mb-4">
              <i className="bi bi-trash-fill fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Product Successfully Removed!</h6>
                <p className="small mb-0">The product listing has been deleted and the seller has been notified.</p>
              </div>
            </div>
          )}

          <div className="alert alert-warning d-flex align-items-center mb-4">
            <i className="bi bi-exclamation-triangle-fill fs-4 me-3 flex-shrink-0"></i>
            <div className="small">
              <strong>Caution:</strong> This administrative action permanently removes the listing from search results and invalidates active shopping carts with this item.
            </div>
          </div>

          <form onSubmit={handleDelete}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Select Product to Delete <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>Choose product listing...</option>
                  <option value="1">#LP-101 — Dell Latitude 5420 (Abbottabad Computers)</option>
                  <option value="2">#LP-102 — HP EliteBook 840 G5 (Tech Point)</option>
                  <option value="3">#LP-103 — Lenovo ThinkPad T480 (Laptop Zone)</option>
                  <option value="4">#LP-104 — MacBook Air M1 2020 (Apple Mart)</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Reason for Deletion <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>Select deletion reason...</option>
                  <option value="fake">Fake / Counterfeit Hardware Specs</option>
                  <option value="duplicate">Duplicate Listing</option>
                  <option value="sold">Sold Outside Platform</option>
                  <option value="policy">Violation of Platform Policies</option>
                  <option value="shop_request">Requested by Shop Owner</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Admin Audit Notes / Comments</label>
                <textarea className="form-control" rows="3" placeholder="Provide context for moderation logs..."></textarea>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="confirmDelete" required />
                  <label className="form-check-label text-danger fw-semibold small" htmlFor="confirmDelete">
                    I confirm that I have reviewed the listing and authorize permanent removal.
                  </label>
                </div>
              </div>

              <div className="col-12 pt-2">
                <button type="submit" className="btn btn-danger px-4">
                  <i className="bi bi-trash3-fill me-2"></i>Permanently Delete Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminDeleteProduct
