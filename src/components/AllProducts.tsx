import React from 'react'
import { useGetAllProductQuery } from '../store/dummyProducts'

type Product = {
  id: number
  title: string
  description: string
  price: number
}

const AllProducts: React.FC = () => {
  const { data, isLoading, error } = useGetAllProductQuery()
  return (
    <>
      {isLoading ? <h1>Loading...</h1> : ''}
      {error ? <h1>{'Error.message'}</h1> : ''}
      {data?.products?.map((product: Product) => (
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