import React from 'react'

function Content({ content }) {
  const { name, description, notes, scripts } = content;

  return (
    <div className='content'>
      {content && <h2 className='content__title'>{name}</h2>}
        
      {description &&
        <div className='content__description'>
          {description.map((text, index) =>
            <p key={index} className='content__text'>{text}</p>
          )}
        </div>}  
      {notes && <ul className='content__note-list'>
        {notes.map(({ id, instruction, npm, link, shortcut }) => (
          <li key={id} className='content__note'>
            {instruction &&
              <div className='content__box'>
                <span className='content__marker'></span>
                <p className='content__instruction'>{instruction}</p>
              </div>}
            {npm && <p className='content__npm'>{npm}</p>}
            {link && <a href={link} className='content__link' target='_blank' rel='noreferrer'>{link}</a>}
            {shortcut && <p className='content__shortcut'>{shortcut}</p>}
          </li>
        ))}
      </ul>}
      {scripts && <ul className='content__script-list'>
        {scripts.map(({ id, path, codes }) => (
          <li key={id} className='content__script'>
            <p className='content__path'>{path}</p>
            {codes.map((code, index) => <p key={index} className='content__code'>{code}</p>)}
          </li>
        ))}  
      </ul>}
    </div>
  )
}

export default Content