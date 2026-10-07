import SimpleFormCard from '../components/SimpleFormCard'

function AdminAddProduct() {
  return <SimpleFormCard
    badge="Admin"
    title="Add Product"
    description="Add a laptop to the marketplace."
    fields={[
      { label: 'Laptop name', placeholder: 'e.g. Dell Latitude 5420' },
      { label: 'Shop name', placeholder: 'e.g. Abbottabad Computers' },
      { label: 'Price (PKR)', type: 'number', placeholder: '75000' },
      { label: 'Location', type: 'select', options: ['Abbottabad', 'Mandian', 'Havelian'] },
    ]}
    submitLabel="Add Product"
  />
}

export default AdminAddProduct
