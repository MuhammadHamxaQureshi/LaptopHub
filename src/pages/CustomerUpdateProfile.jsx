import { useState } from 'react'

function CustomerUpdateProfile() {
  const [saved, setSaved] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
  }

  return (
    <div className="form-card-container">
      <div className="card card-custom shadow-sm">
        <div className="card-custom-header d-flex justify-content-between align-items-center">
          <div>
            <span className="badge bg-success-subtle text-success mb-1">
              <i className="bi bi-person-gear me-1"></i>Customer Profile
            </span>
            <h4 className="fw-bold mb-0">Update Profile & Delivery Addresses</h4>
            <small className="text-muted">Manage your personal information, notification settings and default shipping addresses</small>
          </div>
          <span className="badge bg-light text-secondary border px-3 py-2">Form 14 of 14</span>
        </div>

        <div className="card-custom-body">
          {saved && (
            <div className="alert alert-success d-flex align-items-center mb-4">
              <i className="bi bi-check-circle-fill fs-4 me-3"></i>
              <div>
                <h6 className="alert-heading fw-bold mb-1">Profile Updated Successfully!</h6>
                <p className="small mb-0">Your profile details and delivery address preferences have been saved.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSave}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="Hamza Qureshi" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email Address <span className="text-danger">*</span></label>
                <input type="email" className="form-control" defaultValue="hamza@example.com" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                  <input type="tel" className="form-control" defaultValue="+92 312 9876543" required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Primary City / Region <span className="text-danger">*</span></label>
                <select className="form-select" defaultValue="Abbottabad">
                  <option value="Abbottabad">Abbottabad</option>
                  <option value="Mandian">Mandian</option>
                  <option value="Havelian">Havelian</option>
                  <option value="Mansehra">Mansehra</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Default Shipping Address <span className="text-danger">*</span></label>
                <input type="text" className="form-control" defaultValue="House 42, Street 7, PMA Road, Abbottabad" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Preferred Contact Channel</label>
                <select className="form-select" defaultValue="whatsapp">
                  <option value="whatsapp">WhatsApp Messages</option>
                  <option value="phone">Direct Phone Calls</option>
                  <option value="email">Email Notifications</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Interested Laptop Categories</label>
                <select className="form-select" defaultValue="coding">
                  <option value="coding">Software Development / Coding</option>
                  <option value="gaming">Gaming & Video Editing</option>
                  <option value="study">University / Office General Use</option>
                </select>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="smsAlerts" defaultChecked />
                  <label className="form-check-label small text-muted" htmlFor="smsAlerts">
                    Receive SMS alerts when price drops or new laptops matching my interests are posted.
                  </label>
                </div>
              </div>

              <div className="col-12 pt-2 d-flex gap-2">
                <button type="submit" className="btn btn-primary px-4">
                  <i className="bi bi-save2 me-2"></i>Save Profile Changes
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Reset Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerUpdateProfile
