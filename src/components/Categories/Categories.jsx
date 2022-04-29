import React from 'react';

function Categories({items}) {
  return (
    <div className='category'>
      <h2 className='category__title'>Categories</h2>
      <ul className='category__list'>
        {items.map(item => <li key={item} className='category__item'>{item}</li>)}
      </ul>
    </div>
  )
}

export default Categories;