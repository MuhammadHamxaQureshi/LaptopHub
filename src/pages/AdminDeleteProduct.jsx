import SimpleFormCard from '../components/SimpleFormCard'

function AdminDeleteProduct() {
  return <SimpleFormCard
    badge="Admin Action"
    title="Delete Product"
    description="Remove a product from the marketplace."
    fields={[
      { label: 'Product', type: 'select', options: ['Dell Latitude 5420', 'HP EliteBook 840 G5', 'Lenovo ThinkPad T480'] },
      { label: 'Reason', placeholder: 'Why should it be removed?' },
    ]}
    submitLabel="Delete Product"
    danger
  />
}

export default AdminDeleteProduct
