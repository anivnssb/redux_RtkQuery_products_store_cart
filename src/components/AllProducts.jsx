import React from 'react'
import { useGetAllProductQuery } from '../store/dummyProducts'

const AllProducts = () => {
    const {data,isLoading,error}=useGetAllProductQuery()
  return (
<>
{isLoading?<h1>Loading...</h1>:""}
{error?<h1>Error.message</h1>:""}
{data?.products.map((product)=>(
    <div key={product.id}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>
))}
</>
  )
}

export default AllProducts