import React, { useEffect, useState } from 'react'

const ContactModal = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [isValiid, setIsValid] = useState(false);

    useEffect(() => {
      setIsValid(true);
    }, [name, phone, email]);

  return (
    <div className='ContactModal'>
        <form>
          <input 
             required 
             value={name} 
             placeholder='Name' 
             onChange={(e) => setName(e.target.value)}/>
          <input 
             required 
             value={phone} 
             placeholder='Phone' 
             onChange={(e) => setPhone(e.target.value)}/>
          <input 
             required 
             value={email} 
             placeholder='Email' 
             onChange={(e) => setEmail(e.target.value)}/>
          <button disabled={!isValiid}>Submit</button>
        </form>
    </div>
  )
}

export default ContactModal;