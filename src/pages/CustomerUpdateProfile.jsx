import SimpleFormCard from '../components/SimpleFormCard'

function CustomerUpdateProfile() {
  return <SimpleFormCard
    badge="Customer Profile"
    title="Update Profile"
    description="Update your basic account information."
    fields={[
      { label: 'Full name', placeholder: 'Your full name' },
      { label: 'Email', type: 'email', placeholder: 'name@example.com' },
      { label: 'Phone number', type: 'tel', placeholder: '+92 3XX XXXXXXX' },
      { label: 'City', type: 'select', options: ['Abbottabad', 'Mandian', 'Havelian', 'Mansehra'] },
    ]}
    submitLabel="Save Profile"
  />
}

export default CustomerUpdateProfile
