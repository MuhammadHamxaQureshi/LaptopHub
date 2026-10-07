import SimpleFormCard from '../components/SimpleFormCard'

function AdminViewProducts() {
  return <SimpleFormCard
    badge="Admin Dashboard"
    title="View Products"
    description="Search the product catalog."
    fields={[
      { label: 'Search product', placeholder: 'Laptop name or shop name', fullWidth: true },
      { label: 'Status', type: 'select', options: ['All products', 'Approved', 'Pending', 'Suspended'] },
    ]}
    submitLabel="Search"
  />
}

export default AdminViewProducts
