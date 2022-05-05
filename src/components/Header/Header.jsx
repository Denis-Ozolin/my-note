import { useDispatch } from 'react-redux';

import Button from '../Button';
import editIcon from '../../assets/images/edit.svg';
import { toggleEdit } from '../../redux/edit/editSlice';


function Header() {
  const dispatch = useDispatch();

  const onToggleEdit = () => {
    dispatch(toggleEdit());
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <h1 className='header__title'>MyNote</h1>
        <div className="header__settings">
          <Button className='button__edit' onClick={onToggleEdit}>
            <img src={editIcon} alt="edit icon" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header