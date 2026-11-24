
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [student, setStudent] = useState(null);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [message, setMessage] = useState('');

  function register(e) {
    e.preventDefault();
    setStudent({ name, email });
    alert('Registration Successful!');
  }

  function login(e) {
    e.preventDefault();

    if (student && loginEmail === student.email &&
        loginPassword === password) {
      setMessage('Login Successful!');
    } else {
      setMessage('Invalid Email or Password!');
    }
  }

  return (
    <div className="container">

      <h1>Student Registration</h1>

      <form onSubmit={register}>
        <input
          placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      {student && (
        <div className="details">
          <h2>Student Details</h2>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
        </div>
      )}

      <hr />

      <h1>Student Login</h1>

      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Enter Email"
          value={loginEmail}
          onChange={e => setLoginEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={loginPassword}
          onChange={e => setLoginPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <h3>{message}</h3>

    </div>
  );
}

export default App;
