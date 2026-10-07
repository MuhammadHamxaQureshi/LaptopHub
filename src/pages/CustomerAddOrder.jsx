import SimpleFormCard from '../components/SimpleFormCard'

function CustomerAddOrder() {
  return <SimpleFormCard
    badge="Customer Order"
    title="Place Order"
    description="Enter the basic details for your laptop order."
    fields={[
      { label: 'Laptop', type: 'select', options: ['Dell Latitude 5420', 'HP EliteBook 840 G5', 'Lenovo ThinkPad T480'] },
      { label: 'Full name', placeholder: 'Your full name' },
      { label: 'Phone number', type: 'tel', placeholder: '+92 3XX XXXXXXX' },
      { label: 'Delivery address', placeholder: 'City and address', fullWidth: true },
    ]}
    submitLabel="Place Order"
  />
}

export default CustomerAddOrder
