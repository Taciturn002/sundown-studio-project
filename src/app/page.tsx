'use client'
import React from 'react'
import Landingpage1 from '../../component/Landingpage1'
import Services from '../../component/Services'
import ContactForm from '../../component/contactForm'
import UserList from '../../component/UserList'


function page() {
  return (
    <div >
      
      <Landingpage1 />
      <Services />
      <UserList/>
      <ContactForm />
      
    </div>
  )
}

export default page
