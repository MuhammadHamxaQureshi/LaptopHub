import { useState } from 'react'

function CustomerDeleteOrder() {
  const [cancelled, setCancelled] = useState(false)

  const handleCancel = (e) => {
    e.preventDefault()
    setCancelled(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm border-danger-subtle">
        <div className="card-custom-header d-flex justify-content-between align-items-center bg-danger-subtle text-danger">
          <div>
            <span className="badge bg-danger text-white mb-1">
              <i className="bi bi-x-circle me-1"></i>Order Management
            </span>
            <h4 className="fw-bold mb-0 text-danger">Cancel Active Purchase Order</h4>
            <small className="text-danger-emphasis">Cancel pending orders prior to dispatch without any cancellation fee</small>
          </div>
          <span className="badge bg-white text-danger border px-3 py-2">Form 13 of 14</span>
        </div>

        <div className="card-custom-body">
          {cancelled && (
            <div className="alert alert-danger d-flex align-items-center mb-4">
              <i className="bi bi-check-circle-fill fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Order #ORD-8492 Cancelled!</h6>
                <p className="small mb-0">Your order has been cancelled and the seller has returned the item to available inventory.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleCancel}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Select Active Order to Cancel <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="1">
                  <option value="1">#ORD-8492 — Dell Latitude 5420 (₨85,000) — Pending Dispatch</option>
                  <option value="2">#ORD-8310 — Lenovo ThinkPad T480 (₨72,000) — Processing</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Cancellation Reason <span className="text-danger">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>Choose reason...</option>
                  <option value="budget">Found another laptop within budget</option>
                  <option value="changed_mind">Decided to buy a different specification model</option>
                  <option value="delay">Delivery time is too long</option>
                  <option value="ordered_by_mistake">Ordered by mistake</option>
                  <option value="other">Other reason</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone Number for Verification <span className="text-danger">*</span></label>
                <input type="tel" className="form-control" placeholder="+92 3XX XXXXXXX" required />
              </div>

              <div className="col-12">
                <label className="form-label">Feedback / Suggestions for LaptopHub</label>
                <textarea className="form-control" rows="3" placeholder="Tell us how we can improve our service..."></textarea>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="confirmCancel" required />
                  <label className="form-check-label text-danger fw-semibold small" htmlFor="confirmCancel">
                    I confirm that I want to cancel this order and understand that the laptop will be released for other buyers.
                  </label>
                </div>
              </div>

              <div className="col-12 pt-2">
                <button type="submit" className="btn btn-danger px-4">
                  <i className="bi bi-x-octagon-fill me-2"></i>Cancel Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerDeleteOrder
