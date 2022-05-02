import React from 'react'

function Content({content}) {
  return (
    <div className='content'>
      {content && <h2 className='content__title'>{content.name}</h2>}
      <p className='content__description'></p>
      <p className='content__text'>{content.content}</p>
      <p className='content__code'></p>
      <p className='content__npm'></p>

    </div>
  )
}

export default Content