"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

function Page({params}:{params:{id:number}}) {
  const {id} = useParams()
  console.log("ID = ", id)
    console.log("useParams= ", useParams())

  const [data, setData] = useState<any>([])

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/users/${id}`)
      const result = await res.json()
      console.log("Data = ", result);
      
      setData(result)
    } catch (error) {
      console.error("Error fetching data:", error)
      setData([])
    }
  } 

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <h1>
      {data.UserID}<br/>
      {data.UserName}<br/>
      {data.Password}
    </h1>
  )
} 

export default Page
