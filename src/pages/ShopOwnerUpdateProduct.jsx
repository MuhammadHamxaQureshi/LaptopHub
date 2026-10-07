import SimpleFormCard from '../components/SimpleFormCard'

function ShopOwnerUpdateProduct() {
  return <SimpleFormCard
    badge="Shop Owner"
    title="Update Shop Product"
    description="Change price or stock for a listed laptop."
    fields={[
      { label: 'Product', type: 'select', options: ['Dell Latitude 5420', 'Dell XPS 13 9305', 'HP ProBook 450 G6'] },
      { label: 'Price (PKR)', type: 'number', placeholder: '85000' },
      { label: 'Stock', type: 'number', placeholder: '1' },
    ]}
    submitLabel="Update Product"
  />
}

export default ShopOwnerUpdateProduct
