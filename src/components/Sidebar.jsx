import React from 'react'

import {Profile} from './Profile';
import {Contacts} from './Contacts';

export const Sidebar = () => {
  return (
    <div className='app-sidebar'>
       <Profile />
       <Contacts />
    </div>
  )
}
