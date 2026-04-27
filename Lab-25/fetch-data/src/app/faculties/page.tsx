"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {

    const router=useRouter();

    const [data,setData]=useState<any>([]);
    const [loading, setLoading]=useState<boolean>(true);

    const fetchData=async()=>{
        const res=await fetch("https://6883107f21fa24876a9c7d86.mockapi.io/faculty");
        const data=await res.json();

        setData(data);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
        <table className="table" style={{marginLeft:"450px",marginTop:"100px",gap:"55px"}}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>

            {loading && 
                <tr>
                    <td colSpan={5}>Loading data</td>
                </tr>
            }

            {data.map((user:any)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={()=>{router.push(`/faculties/${user.id}`)}}>
                                View More
                            </button>
                        </td>
                    </tr>
                )
            })}
          </tbody>
        </table>
    </>
  )
}

export default page