import React from 'react'
import cv from "../assets/vasiliy_kvasniuk_frontend_developer.pdf"

export const Contacts = () => {
  return (
    <div className='contacts'>
     <ul className='contacts-list'>
       <li><a className='contacts-link contacts-link__phone' href="tel:+380938142304">+380938142304</a></li>
       <li><a className='contacts-link contacts-link__email' href="mailto:vk.kvasniuk@gmail.com">vk.kvasniuk@gmail.com</a></li>
       <li>
         <a
         className='download-btn'
         href={cv}
         target="_blank"
         rel="noreferrer"
         >
           Download CV
           </a>
           </li>
     </ul>
    </div>
  )
}