export default function ProductModal({ params }: { params: { id: string } }) {
  return (
    <div style={{ background: "#eee", padding: 20 }}>
      <h2>Modal View - Product {params.id}</h2>
    </div>
  )
}