async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  return <h2>Product Details Page for ID: {id}</h2>;
}

export default ProductDetail