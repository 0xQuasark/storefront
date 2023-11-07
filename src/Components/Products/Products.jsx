import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/products';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const activeCategory = useSelector((state) => state.activeCategory);

  useEffect(() => {
    // Fetch products from API and dispatch setProducts action
    // This is just a placeholder, replace with your actual API call
    const fetchedProducts = [
      { name: 'iPhone', category: 'Electronics' },
      { name: 'Harry Potter', category: 'Books' },
      { name: 'T-shirt', category: 'Clothing' },
    ];
    dispatch(setProducts(fetchedProducts));
  }, [dispatch]);
  
  console.log('products', products);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.name}>{product.name}</div>
      ))}
    </div>
  );
}

export default Products;