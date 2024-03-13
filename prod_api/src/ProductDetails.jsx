import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <img
        src={productDetails.images[0]}
        alt={`Product ${productDetails.id}`}
      />
      <p>Title: {productDetails.title}</p>
      <p>Price: {productDetails.price}</p>
      <p>Category: {productDetails.category}</p>
      <p>Description: {productDetails.description}</p>
      <p>Rating: {productDetails.rating}</p>
      <p>Stock: {productDetails.stock}</p>
      <p>Discount Percentage: {productDetails.discountPercentage}</p>
    </div>
  );
};

export default ProductDetails;
