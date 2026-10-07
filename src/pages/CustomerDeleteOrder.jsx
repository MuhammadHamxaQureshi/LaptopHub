import SimpleFormCard from '../components/SimpleFormCard'

function CustomerDeleteOrder() {
  return <SimpleFormCard
    badge="Order Management"
    title="Cancel Order"
    description="Cancel a pending laptop order."
    fields={[
      { label: 'Order', type: 'select', options: ['ORD-8492 - Dell Latitude 5420', 'ORD-8310 - Lenovo ThinkPad T480'] },
      { label: 'Reason', placeholder: 'Why are you cancelling?' },
    ]}
    submitLabel="Cancel Order"
    danger
  />
}

export default CustomerDeleteOrder
