import SimpleFormCard from '../components/SimpleFormCard'

function ShopOwnerViewProducts() {
  return <SimpleFormCard
    badge="Shop Owner"
    title="View Shop Products"
    description="Find products listed in your shop."
    fields={[
      { label: 'Search product', placeholder: 'Laptop name or product ID', fullWidth: true },
      { label: 'Stock status', type: 'select', options: ['All products', 'In stock', 'Out of stock'] },
    ]}
    submitLabel="Search"
  />
}

export default ShopOwnerViewProducts
