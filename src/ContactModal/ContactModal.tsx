import React, { useEffect, useState } from 'react'

const ContactModal = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
      setIsValid(
        !!name && !!phone && !!email
      );
    }, [name, phone, email]);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    
    alert("Hello");
    
    
  };

  return (
    <div className='ContactModal'>
        <form onSubmit={handleSubmit}>
          <input 
             type="text"
             required 
             value={name} 
             placeholder='Name' 
             onChange={(e) => setName(e.target.value)}/>
          <p>Error</p>
          <input 
             type="tel"
             required 
             value={phone} 
             placeholder='Phone' 
             onChange={(e) => setPhone(e.target.value)}/>
          <p>Error</p>
          <input 
             type="email"
             required 
             value={email} 
             placeholder='Email' 
             onChange={(e) => setEmail(e.target.value)}/>
          <p>Error</p>
          <button disabled={!isValid}>Submit</button>
        </form>
    </div>
  )
}

export default ContactModal;