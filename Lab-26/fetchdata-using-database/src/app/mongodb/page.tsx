"use client"

import { log } from "console"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function page() {
  const [data,setData] = useState<any>([])
  const [loading,setLoading] = useState<boolean>(true)
  const router = useRouter()
  const fetchData = async () => {
    const res = await fetch(`/api/user`)
    
    const temp = await res.json()
    console.log("Data = ", temp)
    setData(temp)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  },[])  
  return ( 
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ACTNO</th>
            <th scope="col">CNAME</th>
            <th scope="col">BNAME</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">ADATE</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading &&
            <tr>
              <td colSpan={5}>Loading data</td>
            </tr>
          }
          {data.map((d:any)=> {
            return (
              <tr key={d.ACTNO}>
                <td>{d.ACTNO}</td>
                <td>{d.CNAME}</td>
                <td>{d.BNAME}</td>
                <td>{d.AMOUNT}</td>
                <td>{d.ADATE}</td>
                <td><button onClick={()=>{router.push(`/mongodb/${d.ACTNO}`)}}>view more</button></td>
              </tr>
            ) 
          })}
        </tbody>
      </table>
    </>
  )
}

export default page