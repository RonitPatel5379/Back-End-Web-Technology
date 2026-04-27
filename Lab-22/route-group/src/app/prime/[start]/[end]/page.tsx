async function PrimeRange({params,}: {params: Promise<{ start:number; end:number}>
}) {
  const { start, end } = await params
  const s = Number(start)
  const e = Number(end)
  const primes: number[] = []
  for (let n = s; n <= e; n++) {
    let count = 0
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++
      }
    }
    if (count === 2) {
      primes.push(n)
    }
  }
  return (
    <div>
      <h1>Prime Numbers Between {s} and {e}</h1><br/>
      <h3>{primes.join(",")}</h3>
    </div>
  )
}
export default PrimeRange