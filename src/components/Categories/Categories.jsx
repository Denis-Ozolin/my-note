import { useState } from 'react';

function Categories({ items }) {
  const [activeId, setActiveId] = useState(null);


  const assignActiveId = (id) => {
    setActiveId(id);
  }

  const removeActiveId = () => {
    setActiveId(null);
  }

  return (
    <div className='category'>
      <h2 className='category__title'>Categories</h2>
      <ul className='category__list'>
        {items.map(obj => <li
          onMouseEnter={() => assignActiveId(obj.id)}
          onMouseLeave={removeActiveId}
          key={obj.id}
          className='category__item'>
          {obj.name}
          <ul className={activeId === obj.id? 'subcategory__list--active': 'subcategory__list' }>
            {obj.items.map(item => <li key={item.id} className='subcategory__item'>{item.name}</li>)}
          </ul>
        </li>)}
      </ul>
    </div>
  )
}

export default Categories;