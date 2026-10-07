import SimpleFormCard from '../components/SimpleFormCard'

function ShopOwnerAddProduct() {
  return <SimpleFormCard
    badge="Shop Owner"
    title="Add Shop Product"
    description="List a laptop in your shop."
    fields={[
      { label: 'Laptop name', placeholder: 'e.g. Lenovo ThinkPad T490' },
      { label: 'Price (PKR)', type: 'number', placeholder: '65000' },
      { label: 'Quantity', type: 'number', placeholder: '1' },
      { label: 'Condition', type: 'select', options: ['Like New', 'Very Good', 'Good'] },
    ]}
    submitLabel="Publish Product"
  />
}

export default ShopOwnerAddProduct
