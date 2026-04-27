async function Pagination({params,}:{params:Promise<{pageNo:number}>}) {
  const pageNo = ((await params).pageNo)
  const limit = 10
  const start = (pageNo-1)*limit+1
  const end = pageNo*limit

  return (
    <div>
      <h1>Pagination</h1><br/>
      <h4>Page No:{pageNo}</h4>
      <h4>Start: {start}</h4>
      <h4>End:{end}</h4>
    </div>
  )
}

export default Pagination