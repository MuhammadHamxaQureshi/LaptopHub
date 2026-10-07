import { useState } from 'react'

function SimpleFormCard({ badge, title, description, fields, submitLabel = 'Save', danger = false }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="form-card-container">
      <div className={`card card-custom shadow-sm${danger ? ' border-danger-subtle' : ''}`}>
        <div className={`card-custom-header${danger ? ' bg-danger-subtle' : ''}`}>
          <span className={`badge ${danger ? 'bg-danger text-white' : 'bg-primary-subtle text-primary'} mb-1`}>
            {badge}
          </span>
          <h4 className={`fw-bold mb-1${danger ? ' text-danger' : ''}`}>{title}</h4>
          <small className="text-muted">{description}</small>
        </div>

        <div className="card-custom-body">
          {submitted && (
            <div className={`alert ${danger ? 'alert-danger' : 'alert-success'} py-2`}>
              {danger ? 'Action completed successfully.' : 'Saved successfully.'}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {fields.map((field) => (
                <div className={field.fullWidth ? 'col-12' : 'col-md-6'} key={field.label}>
                  <label className="form-label">{field.label}</label>
                  {field.type === 'select' ? (
                    <select className="form-select" defaultValue={field.options[0]} required>
                      {field.options.map((option) => <option key={option}>{option}</option>)}
                    </select>
                  ) : (
                    <input
                      type={field.type || 'text'}
                      className="form-control"
                      placeholder={field.placeholder}
                      defaultValue={field.defaultValue}
                      required
                    />
                  )}
                </div>
              ))}

              <div className="col-12 d-flex gap-2 pt-2">
                <button type="submit" className={`btn ${danger ? 'btn-danger' : 'btn-primary'} px-4`}>
                  {submitLabel}
                </button>
                <button type="reset" className="btn btn-outline-secondary">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SimpleFormCard
