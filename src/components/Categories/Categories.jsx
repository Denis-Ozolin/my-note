import { useState } from 'react';

function Categories({ items }) {
  const [activeId, setActiveId] = useState(null);


  const assignActiveId = (id) => {
    setActiveId(id);
  }

  const removeActiveId = () => {
    setActiveId(null);
  }

  const openCategory = (name) => {
    alert(`${name} is open!`)
  }

  return (
    <div className='category'>
      <ul className='category__list'>
        {items.map(obj => <li
          onMouseEnter={() => assignActiveId(obj.id)}
          onMouseLeave={removeActiveId}
          key={obj.id}
          className='category__item'>
          {obj.name}
          <ul className={activeId === obj.id? 'category__sublist--active': 'category__sublist' }>
            {obj.items.map(item => <li
              onClick={() => openCategory(item.name)}
              key={item.id}
              className='category__inner-item'>
              {item.name}
            </li>)}
          </ul>
        </li>)}
      </ul>
    </div>
  )
}

export default Categories;