function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#ffe4e1", padding: "20px" }}>
      <h2>Admin Layout</h2>
      {children}
    </div>
  )
}

export default AdminLayout