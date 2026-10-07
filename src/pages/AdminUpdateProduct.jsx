import SimpleFormCard from '../components/SimpleFormCard'

function AdminUpdateProduct() {
  return <SimpleFormCard
    badge="Admin"
    title="Update Product"
    description="Quickly update basic product information."
    fields={[
      { label: 'Product', type: 'select', options: ['Dell Latitude 5420', 'HP EliteBook 840 G5', 'Lenovo ThinkPad T480'] },
      { label: 'New price (PKR)', type: 'number', placeholder: '85000' },
      { label: 'Status', type: 'select', options: ['Approved', 'Pending', 'Suspended'] },
    ]}
    submitLabel="Update Product"
  />
}

export default AdminUpdateProduct
