"use client"
import { useEffect, useState } from "react";

function page() {
  const [data,setData] = useState<any>([])

  const fetchData = async () => {
    const result = await fetch("/api/students")
    const data = await result.json()
    console.log(data)

    setData(data)
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user:any)=>(
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default page