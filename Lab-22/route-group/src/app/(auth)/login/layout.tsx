function AuthLayout({ children }:{ children: React.ReactNode }) {
  return (
    <div style={{ background: "#f0f8ff", padding: "20px" }}>
      <h2>Auth Layout</h2>
      {children}
    </div>
  )
}

export default AuthLayout