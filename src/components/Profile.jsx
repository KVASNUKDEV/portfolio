import React from 'react'
import avatar from '../assets/images/kvasnyuk.jpeg';

export const Profile = () => {
  return (
    <div className='profile'>
       <img className="profile-avatar" src={avatar} alt="Vasiliy Vasniuk" />
       <h4 className="profile-title">Vasiliy Kvasniuk</h4>
       <p className="profile-position">Front-end Developer</p>
    </div>
  )
}