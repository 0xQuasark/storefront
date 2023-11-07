import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories';
import { setActiveCategory } from '../../store/active-category';


function Categories() {
  const categories = useSelector((state) => state.categories);
  const activeCategory = useSelector((state) => state.activeCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedCategories = [
      'Electronics', 
      'Books', 
      'Clothing'
    ];
    dispatch(setCategories(fetchedCategories));
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div>
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;