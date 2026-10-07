import SimpleFormCard from '../components/SimpleFormCard'

function CustomerViewProducts() {
  return <SimpleFormCard
    badge="Customer"
    title="View Products"
    description="Search laptops available for purchase."
    fields={[
      { label: 'Search laptop', placeholder: 'e.g. Dell, HP or Lenovo', fullWidth: true },
      { label: 'Maximum budget (PKR)', type: 'number', placeholder: '150000' },
      { label: 'Location', type: 'select', options: ['All locations', 'Abbottabad', 'Mandian', 'Havelian'] },
    ]}
    submitLabel="Search"
  />
}

export default CustomerViewProducts
