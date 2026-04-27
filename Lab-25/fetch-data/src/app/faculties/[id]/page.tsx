import React from 'react'
async function page(
    {params}: {params: Promise<{id:string}>}
) {

    const {id}=await params
    const res=await fetch(`https://6883107f21fa24876a9c7d86.mockapi.io/faculty/${id}`)

    const data=await res.json();
    
  return (
    <div>
        <h1>{data.id}</h1>
        <h2>{data.name}</h2>
        <h3>{data.email}</h3>
    </div>
  )
}

export default page