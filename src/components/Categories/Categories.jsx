import { useState } from 'react';
import { useSelector } from 'react-redux';

import plusIcon from '../../assets/images/plus.svg';

function Categories({ items, selectContent }) {
  const [activeId, setActiveId] = useState(null);
  const isEdit = useSelector(state => state.edit.isEdit);
  console.log(isEdit);

  const assignActiveId = (id) => {
    setActiveId(id);
  }

  const removeActiveId = () => {
    setActiveId(null);
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
                    {isEdit && <li className='category__item category__item--add'>
            <img src={plusIcon} alt="plus-icon" />    
          </li>}
            {obj.items.map(item => <li
              onClick={() => selectContent(item)}
              key={item.id}
              className='category__inner-item'>
              {item.name}
            </li>)}
          </ul>
        </li>)}
        {isEdit && <li className='category__item category__item--add'>
          <img src={plusIcon} alt="plus-icon" />    
        </li>}
      </ul>
    </div>
  )
}

export default Categories;