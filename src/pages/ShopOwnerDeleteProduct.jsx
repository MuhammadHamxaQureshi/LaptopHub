import SimpleFormCard from '../components/SimpleFormCard'

function ShopOwnerDeleteProduct() {
  return <SimpleFormCard
    badge="Shop Owner Action"
    title="Delete Shop Product"
    description="Remove a laptop from your shop."
    fields={[
      { label: 'Product', type: 'select', options: ['Dell Latitude 5420', 'Dell XPS 13 9305', 'HP ProBook 450 G6'] },
      { label: 'Reason', placeholder: 'e.g. Sold' },
    ]}
    submitLabel="Delete Product"
    danger
  />
}

export default ShopOwnerDeleteProduct
