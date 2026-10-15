import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const getFieldName = (label) => label
  .toLowerCase()
  .replace(/[^a-z0-9]+(.)/g, (_, character) => character.toUpperCase())
  .replace(/[^a-z0-9]/g, '')

const getFieldSchema = (field) => {
  if (field.type === 'select') {
    return z.string().min(1, `${field.label} is required.`)
  }

  if (field.type === 'email') {
    return z.string()
      .trim()
      .min(1, 'Email is required.')
      .email('Enter a valid email address.')
  }

  if (field.type === 'password') {
    return z.string()
      .min(8, 'Password must be at least 8 characters.')
  }

  if (field.type === 'number') {
    return z.number({
      error: `${field.label} is required.`,
    }).finite(`${field.label} must be a valid number.`).positive(`${field.label} must be greater than 0.`)
  }

  if (field.type === 'tel') {
    return z.string()
      .trim()
      .min(1, 'Phone number is required.')
      .regex(/^(?:\+92|0)3\d{9}$/, 'Enter a valid Pakistani phone number.')
  }

  if (/address/i.test(field.label)) {
    return z.string()
      .trim()
      .min(10, 'Address must be at least 10 characters.')
  }

  if (/reason/i.test(field.label)) {
    return z.string()
      .trim()
      .min(5, 'Please provide a reason of at least 5 characters.')
  }

  return z.string()
    .trim()
    .min(2, `${field.label} must be at least 2 characters.`)
}

function SimpleFormCard({ badge, title, description, fields, submitLabel = 'Save', danger = false }) {
  const [submitted, setSubmitted] = useState(false)
  const schema = z.object(
    Object.fromEntries(fields.map((field) => [getFieldName(field.label), getFieldSchema(field)])),
  )
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: Object.fromEntries(fields.map((field) => [
      getFieldName(field.label),
      field.type === 'number' && field.defaultValue !== undefined
        ? Number(field.defaultValue)
        : field.defaultValue ?? (field.type === 'select' ? field.options[0] : ''),
    ])),
  })

  const onSubmit = () => {
    setSubmitted(true)
  }

  const handleReset = () => {
    reset()
    setSubmitted(false)
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

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row g-3">
              {fields.map((field) => (
                <div className={field.fullWidth ? 'col-12' : 'col-md-6'} key={field.label}>
                  <label className="form-label" htmlFor={getFieldName(field.label)}>{field.label}</label>
                  {field.type === 'select' ? (
                    <select
                      id={getFieldName(field.label)}
                      className={`form-select${errors[getFieldName(field.label)] ? ' is-invalid' : ''}`}
                      aria-invalid={Boolean(errors[getFieldName(field.label)])}
                      {...register(getFieldName(field.label))}
                    >
                      {field.options.map((option) => <option key={option}>{option}</option>)}
                    </select>
                  ) : (
                    <input
                      id={getFieldName(field.label)}
                      type={field.type || 'text'}
                      className={`form-control${errors[getFieldName(field.label)] ? ' is-invalid' : ''}`}
                      placeholder={field.placeholder}
                      aria-invalid={Boolean(errors[getFieldName(field.label)])}
                      {...register(getFieldName(field.label), field.type === 'number' ? { valueAsNumber: true } : {})}
                    />
                  )}
                  {errors[getFieldName(field.label)] && (
                    <div className="invalid-feedback d-block">
                      {errors[getFieldName(field.label)].message}
                    </div>
                  )}
                </div>
              ))}

              <div className="col-12 d-flex gap-2 pt-2">
                <button type="submit" className={`btn ${danger ? 'btn-danger' : 'btn-primary'} px-4`}>
                  {submitLabel}
                </button>
                <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SimpleFormCard
