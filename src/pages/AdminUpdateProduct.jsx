import { useState } from 'react'

function AdminUpdateProduct() {
  const [updated, setUpdated] = useState(false)

  const handleUpdate = (e) => {
    e.preventDefault()
    setUpdated(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex justify-content-between align-items-center">
          <div>
            <span className="badge bg-danger-subtle text-danger mb-1">
              <i className="bi bi-shield-check me-1"></i>Admin Control Panel
            </span>
            <h4 className="fw-bold mb-0">Update & Moderate Product Listing</h4>
            <small className="text-muted">Modify specs, verified badge, pricing, and visibility status</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 5 of 14</span>
        </div>

        <div className="card-custom-body">
          {updated && (
            <div className="alert alert-success d-flex align-items-center mb-4">
              <i className="bi bi-check2-circle fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Listing Updated Successfully!</h6>
                <p className="small mb-0">All changes have been synchronized across the marketplace.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleUpdate}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Select Product to Edit <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="1">
                  <option value="1">#LP-101 — Dell Latitude 5420 (Abbottabad Computers) — ₨85,000</option>
                  <option value="2">#LP-102 — HP EliteBook 840 G5 (Tech Point) — ₨68,000</option>
                  <option value="3">#LP-103 — Lenovo ThinkPad T480 (Laptop Zone) — ₨72,000</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Laptop Model Title <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="Dell Latitude 5420 (Core i5 11th Gen)" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Approved Price (PKR) <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">₨</span>
                  <input type="number" className="form-control" defaultValue="85000" required />
                </div>
              </div>

              <div className="col-md-4">
                <label className="form-label">Listing Status <span className="text-danger">*</span></label>
                <select className="form-select" defaultValue="Active">
                  <option value="Active">Active / Approved</option>
                  <option value="Pending">Pending Review</option>
                  <option value="Suspended">Suspended / Hidden</option>
                  <option value="Sold">Mark as Sold</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Admin Verified Badge</label>
                <select className="form-select" defaultValue="yes">
                  <option value="yes">✓ Verified by LaptopHub</option>
                  <option value="no">Standard Unverified Listing</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Featured on Home Page?</label>
                <select className="form-select" defaultValue="yes">
                  <option value="yes">Yes, Feature in Top Section</option>
                  <option value="no">Regular Listing Only</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Assigned Shop / Vendor</label>
                <input type="text" className="form-control" defaultValue="Abbottabad Computers" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Warranty Override</label>
                <input type="text" className="form-control" defaultValue="30 Days Official Replacement" />
              </div>

              <div className="col-12">
                <label className="form-label">Admin Remarks / Update Log</label>
                <textarea className="form-control" rows="2" defaultValue="Hardware specifications verified by physical inspection on 30 Sep."></textarea>
              </div>

              <div className="col-12 pt-2 d-flex gap-2">
                <button type="submit" className="btn btn-primary px-4">
                  <i className="bi bi-save me-2"></i>Save Admin Changes
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Discard Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminUpdateProduct
