import React from 'react'

const page =async (props) => {
    const slug = await props.params
    console.log(slug);
  return (
    <div>
        <h1>{slug.prd}</h1>
        <h1>prd</h1>
    </div>
  )
}

export default page