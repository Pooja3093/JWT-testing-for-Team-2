import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_ALL_PRODUCTS, QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import ProductItem from '../ProductItem';


function ProductList() {
  const { category } = useParams();
  const { loading, data } = useQuery(category ? QUERY_PRODUCTS : QUERY_ALL_PRODUCTS, {variables: {category: category}});
  const productData = data?.products || [];


 
  
  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {productData.length ? (
        <div className="flex-row">
          {productData.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
