import React from 'react'

import Button from '../Button';
import settingsIcon from '../../assets/images/settings.png';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <h1 className='header__title'>MyNote</h1>
        <div className="header__settings">
          <Button className='button__settings'>
            <img src={settingsIcon} className='header__icon' alt="settings icon" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header