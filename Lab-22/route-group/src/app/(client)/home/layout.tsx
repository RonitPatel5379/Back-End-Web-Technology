function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#e6ffe6", padding: "20px" }}>
      <h2>Client Layout</h2>
      {children}
    </div>
  )
}

export default ClientLayout