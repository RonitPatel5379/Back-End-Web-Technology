"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

function page({params}:{params:{id:number}}) {
  const {id} = useParams()
  const [data,setData] = useState<any>(null)

  const fetchData = async() => {
    const res = await fetch(`/api/user/${id}`)
    const temp = await res.json()
    setData(temp)
  }
  useEffect(()=> {
    if (id) fetchData()
  },[id]) 

  if(!data) return <div>Loading...</div>
  return (
    <div>
      {data.ACTNO}<br/>
      {data.CNAME}<br/>
      {data.BNAME}<br/>
      {data.AMOUNT}<br/>
      {data.ADATE}
    </div>
  ) 
}

export default page