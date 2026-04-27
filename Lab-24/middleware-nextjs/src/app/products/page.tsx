import React from 'react'

async function page({searchParams}:any) {
  const params = await searchParams

  const page = params.pageNo
  return (
    <div>{page.toString()}</div>
  )
}

export default page