import React, { useState } from 'react'

const ContactModal = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

  return (
    <div className='ContactModal'>
        <form>
          <input required value={name} placeholder='Name' onChange={(e) => setName(e.target.value)}/>
          <input required value={phone} placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>
          <input required value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default ContactModal;