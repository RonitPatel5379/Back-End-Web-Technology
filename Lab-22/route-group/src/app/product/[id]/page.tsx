 async function Product({ params }: { params: Promise<{ id: number }> }) {
  const {id} = await params
  return <h1>Product ID: {id}</h1>
}

export default Product