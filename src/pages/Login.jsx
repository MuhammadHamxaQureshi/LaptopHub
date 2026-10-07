import SimpleFormCard from '../components/SimpleFormCard'

function Login() {
  return <SimpleFormCard
    badge="Authentication"
    title="Login"
    description="Sign in to your LaptopHub account."
    fields={[
      { label: 'Email', type: 'email', placeholder: 'name@example.com' },
      { label: 'Password', type: 'password', placeholder: 'Enter password' },
      { label: 'Account type', type: 'select', options: ['Customer', 'Shop Owner', 'Admin'] },
    ]}
    submitLabel="Login"
  />
}

export default Login
