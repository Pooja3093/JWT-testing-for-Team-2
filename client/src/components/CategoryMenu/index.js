import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useNavigate } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

function CategoryMenu() {
  // const navigate = useNavigate();
  // navigate('./create', { replace: true });
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];
 console.log(categories);

 const handleClick = (id) => {
 
};

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
       <button
       key={item._id}
      //  onClick={() => {
      //   <Route exact path="/" render={() =>
      //     <Redirect to="/${item._id}"/>
      // }/>
      //  }}
     >
       {item.name}
     </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
