import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import avatar from '../assets/avatar.png'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:2000/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 >SIGN IN</h1>
        <br />
       
        <img src={avatar} className='avatar'/><br />
       
        <input className='inputStyle' type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder=' | Enter Your Email'></input>
        <br />
        <input className='inputStyle' type='password' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder=' |Enter Your Password'></input>

          <div className="remember-me-container">
            <div className="remember-me-container-label">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
              
            </div>
            <div className='forgotContainer'>
            <p>
              <Link to={'/register'}>Register</Link>
              </p>
            </div>
        </div>

        <button type="submit" className='submit'>LOGIN</button>
      </form>
    </div>
    );
};

export default Login;
