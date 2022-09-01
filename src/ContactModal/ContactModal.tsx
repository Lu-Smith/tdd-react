import React, { useState } from 'react'

const ContactModal = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('')
  return (
    <div className='ContactModal'>
        <form>
          <input value={name} placeholder='Name'/>
          <input value={phone} placeholder='Phone'/>
          <input value={email} placeholder='Email'/>
        </form>
    </div>
  )
}

export default ContactModal;