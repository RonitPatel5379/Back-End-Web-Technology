"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"

function Page() {
  const [data, setData] = useState<any[]>([])
  const router = useRouter()
  const fetchData = async () => {
    try {
      const res = await fetch("/api/users")
      const result = await res.json()

      setData(Array.isArray(result) ? result : result.users || [])
    } catch (error) {
      console.error("Error fetching data:", error)
      setData([])
    }
  } 

  useEffect(() => {
    fetchData() 
  }, [])

  return (
    <table className="table">
      <thead>
        <tr aria-colspan={4}>
          <th>UserID</th>
          <th>UserName</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((user: any) => (
            <tr key={user.UserID}>
              <td>{user.UserID}</td>
              <td>{user.UserName}</td>
              <td>{user.Password}</td>
              <td><button onClick={()=>{router.push(`/mysql/${user.UserID}`)}}>View More</button></td>
            </tr>
          )) 
        ) : (
          <tr>
            <td colSpan={5} className="text-center">
              No Data Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Page