import React from "react";
import { useGetAllProductQuery } from "../store/dummyProducts";

const AllProducts: React.FC = () => {
  const { data, isLoading, error } = useGetAllProductQuery();
  return (
    <>
      {isLoading ? <h1>Loading...</h1> : ""}
      {error ? <h1>{"Error.message"}</h1> : ""}
      <div className="product-container">
        {data?.products?.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.images[0]} alt="" />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="price-cartbtn">
              <p>{product.price}</p>
              <button>Add</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
