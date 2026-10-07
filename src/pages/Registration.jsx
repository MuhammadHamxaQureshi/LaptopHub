import SimpleFormCard from '../components/SimpleFormCard'

function Registration() {
  return <SimpleFormCard
    badge="Authentication"
    title="Create Account"
    description="Register for a LaptopHub account."
    fields={[
      { label: 'Full name', placeholder: 'e.g. Ali Ahmed' },
      { label: 'Email', type: 'email', placeholder: 'name@example.com' },
      { label: 'Password', type: 'password', placeholder: 'Enter password' },
      { label: 'Account type', type: 'select', options: ['Customer', 'Shop Owner', 'Admin'] },
    ]}
    submitLabel="Register"
  />
}

export default Registration
