import { useState } from 'react'

function CustomerAddOrder() {
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex justify-content-between align-items-center">
          <div>
            <span className="badge bg-success-subtle text-success mb-1">
              <i className="bi bi-cart-check me-1"></i>Customer Order
            </span>
            <h4 className="fw-bold mb-0">Place Laptop Purchase Order</h4>
            <small className="text-muted">Enter delivery address, checking warranty preferences and payment method</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 12 of 14</span>
        </div>

        <div className="card-custom-body">
          {orderPlaced && (
            <div className="alert alert-success d-flex align-items-center mb-4">
              <i className="bi bi-check-circle-fill fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Order Placed Successfully! (Order #ORD-8492)</h6>
                <p className="small mb-0">The shop has received your purchase request and will contact you for dispatch verification.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Product Selection */}
              <div className="col-12">
                <label className="form-label">Selected Laptop <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="1">
                  <option value="1">Dell Latitude 5420 (Core i5 11th Gen / 16GB / 512GB) — ₨85,000</option>
                  <option value="2">HP EliteBook 840 G5 (Core i7 8th Gen / 8GB / 256GB) — ₨68,000</option>
                  <option value="3">Lenovo ThinkPad T480 (Core i5 8th Gen / 16GB / 256GB) — ₨72,000</option>
                  <option value="4">MacBook Air M1 (2020) — ₨145,000</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Full Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Your full name" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone / WhatsApp Number <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                  <input type="tel" className="form-control" placeholder="+92 3XX XXXXXXX" required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Delivery City <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="Abbottabad">
                  <option value="Abbottabad">Abbottabad (Free Store Pickup / Same-day Delivery)</option>
                  <option value="Mandian">Mandian</option>
                  <option value="Havelian">Havelian</option>
                  <option value="Mansehra">Mansehra</option>
                  <option value="Islamabad">Islamabad / Rawalpindi</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Payment Method <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="cod">
                  <option value="cod">Cash on Delivery (Pay after inspection)</option>
                  <option value="easypaisa">EasyPaisa / JazzCash Mobile Account</option>
                  <option value="bank">Direct Online Bank Transfer</option>
                  <option value="store">Pay at Shop upon Collection</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Complete Delivery Address <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="House # / Street, Sector / Colony, Landmark" required />
              </div>

              <div className="col-12">
                <label className="form-label">Special Delivery / Testing Instructions</label>
                <textarea className="form-control" rows="2" placeholder="e.g. Please install Google Chrome, VLC player & test charger before delivery..."></textarea>
              </div>

              <div className="col-12 pt-2 d-flex gap-2">
                <button type="submit" className="btn btn-success px-4 fw-semibold">
                  <i className="bi bi-bag-check-fill me-2"></i>Confirm & Place Order
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

export default CustomerAddOrder
