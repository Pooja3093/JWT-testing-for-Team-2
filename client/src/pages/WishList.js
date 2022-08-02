import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


function WishList() {
  const { data } = useQuery(QUERY_USER);
  const user = data?.user || [];
console.log(user);
  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Wish List for {user.firstName} {user.lastName}
            </h2>
            {user.wishlist.map((list) => (
              <div key={list._id} className="my-2">
                <div className="flex-row">
                  {list.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default WishList;
