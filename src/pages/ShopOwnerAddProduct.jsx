import { useState } from 'react'

function ShopOwnerAddProduct() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex justify-content-between align-items-center">
          <div>
            <span className="badge bg-warning-subtle text-warning-emphasis mb-1">
              <i className="bi bi-shop me-1"></i>Shop Owner Inventory
            </span>
            <h4 className="fw-bold mb-0">List New Laptop for Sale</h4>
            <small className="text-muted">Post your shop's laptop into the LaptopHub marketplace</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 7 of 14</span>
        </div>

        <div className="card-custom-body">
          {submitted && (
            <div className="alert alert-success d-flex align-items-center mb-4">
              <i className="bi bi-check-circle-fill fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Laptop Listed Successfully!</h6>
                <p className="small mb-0">Your item has been submitted for display in your shop storefront.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Laptop Title & Series <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="e.g. Lenovo ThinkPad T490" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Your Shop Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="Abbottabad Computers" required />
              </div>

              <div className="col-md-4">
                <label className="form-label">Asking Price (PKR) <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">₨</span>
                  <input type="number" className="form-control" placeholder="65000" required />
                </div>
              </div>

              <div className="col-md-4">
                <label className="form-label">Available Quantity <span className="text-danger">*</span></label>
                <input type="number" className="form-control" defaultValue="1" min="1" required />
              </div>

              <div className="col-md-4">
                <label className="form-label">Condition Grade <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="9/10">
                  <option value="10/10">10/10 — Like New / Open Box</option>
                  <option value="9/10">9/10 — Very Good / Minor Scuffs</option>
                  <option value="8/10">8/10 — Good / Normal Wear</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Battery Health / Backup <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-battery-charging"></i></span>
                  <input type="text" className="form-control" placeholder="e.g. 88% Health (3.5 - 4 Hours)" required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Accessories Included</label>
                <input type="text" className="form-control" defaultValue="Original Charger + Power Cable + Bag" />
              </div>

              <div className="col-12">
                <label className="form-label">Hardware Specifications Summary</label>
                <input type="text" className="form-control" placeholder="Core i5-8365U, 16GB RAM, 256GB NVMe, 14 inch FHD IPS" required />
              </div>

              <div className="col-12">
                <label className="form-label">Shop Contact / WhatsApp Number <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-whatsapp text-success"></i></span>
                  <input type="tel" className="form-control" placeholder="+92 300 1234567" required />
                </div>
              </div>

              <div className="col-12 pt-2 d-flex gap-2">
                <button type="submit" className="btn btn-warning px-4 text-dark fw-semibold">
                  <i className="bi bi-upload me-2"></i>Publish Listing
                </button>
                <button type="reset" className="btn btn-outline-secondary">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShopOwnerAddProduct
