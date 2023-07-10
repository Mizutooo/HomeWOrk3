import React, { useState } from 'react';
import './App.css';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [showData, setShowData] = useState(false);
  const [message, setMessage] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowData(true);
    setMessage('Success! Thank you for registering.');
  };

  const onButton = () => {
    setShowData(false);
    setMessage('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <form onSubmit={handleSubmit} className='style'>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            style={{ padding: '5px', width: '200px', fontFamily: 'Arial' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            style={{ padding: '5px', width: '200px', fontFamily: 'Arial' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            style={{ padding: '5px', width: '200px', fontFamily: 'Arial' }}
          />    
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={onButton} className='button' type="submit" style={{ padding: '12px', backgroundColor: 'green', color: 'white', border: 'none', fontFamily: 'Arial', width: '216px',  }}>
            Register
          </button>
        </div>
        {message && (
          <div className='success-modal'>
            <p>{message}</p>
          </div>
        )}
      </form>
      {showData && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;

