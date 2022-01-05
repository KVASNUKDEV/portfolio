import React from 'react'

export const Card = ({title, link, image, tags}) => {
  return (
    <div className='card'>
      <a href={link} target="_blank" rel="noreferrer">
      <div className="card-thumbnail" style={{backgroundImage: `url(${image})`}}/>
      <h4 className='card-title'>{title}</h4>
      <p className='card-tags'>
        {tags?.map((tag) => <span className={tag}/>)}
      </p>
      </a>
    </div>
  )
}
