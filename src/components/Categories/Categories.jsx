import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Modal, CategoryInput, NoteInput } from '../../components';
import plusIcon from '../../assets/images/plus.svg';

function Categories({ items, selectContent }) {
  const [activeId, setActiveId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [changeType, setChangeType] = useState(null);

  const isEdit = useSelector(state => state.edit.isEdit);

  const assignActiveId = (id) => {
    setActiveId(id);
  }

  const removeActiveId = () => {
    setActiveId(null);
  }

  const onCloseModal = () => {
    setIsOpenModal(false);
  };
  
  const addNewCategory = () => {
    setIsOpenModal(!isOpenModal);
    setChangeType('category');
  }

  const addNewNote = () => {
    setIsOpenModal(!isOpenModal);
    setChangeType('note');
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
            {isEdit &&
              <li onClick={addNewNote} className='category__item category__item--add'>
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
        {isEdit && <li onClick={addNewCategory} className='category__item category__item--add'>
          <img src={plusIcon} alt="plus-icon" />    
        </li>}
      </ul>
      {isOpenModal &&
        <Modal closeModal={onCloseModal}>
          {changeType === 'category' && <CategoryInput/>}
          {changeType === 'note' && <NoteInput/>}
        </Modal>}
    </div>
  )
}

export default Categories;