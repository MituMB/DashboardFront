import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../Utils';
import './Login.scss'
const Login = () => {
    const [loginInfo,setLoginInfo] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const { username, password } = loginInfo;
        if(!username){
            return handleError('Username Required.');
        }
        else if(!password){
            return handleError('Password Required.');
        }
        try{
            const serverLoginInfo = {
                EmpCode: loginInfo.username,
                Password: loginInfo.password
            }
            const url = 'https://localhost:7052/api/v1/Login/login';
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(serverLoginInfo)
            })
            const result = await response.json();
            const { loginStatus } = result;
           
            if(loginStatus === 2){
                handleSuccess('Login Successful.');
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
              
            }
        }
        catch(err){
            handleError(err);
        }
    }
  return (
    <>
    {/* <div className='container'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">User Name</label>
                <input 
                    onChange={handleChange}
                    type='text'
                    name='username'
                    autoFocus
                    placeholder='Enter Your User Name.'
                    value={loginInfo.username}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder='Enter Your Password.'
                    value={loginInfo.password}
                />
            </div>
            <button type='submit'>Login</button>
        </form>
        <ToastContainer />
    </div> */}
{/* <section className="login_wrapper"> */}

    <div className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                {/* <img src="" className="illustration" /> */}

{/* <img src="/user.jpg" alt="illustration" className="illustration" />          */}
       <h1 className="opacity title">LOGIN</h1>
                <form onSubmit={handleLogin}>
                <label htmlFor="username">User Name</label>
                <input 
                    onChange={handleChange}
                    type='text'
                    name='username'
                    // autoFocus
                    placeholder='Enter Your User Name.'
                    value={loginInfo.username}
                />
                <label htmlFor="password">Password</label>
                    <input 
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder='Enter Your Password.'
                    value={loginInfo.password}
                />
                    <button type='submit' className="opacity">SUBMIT</button>
                </form>
                {/* <div className="register-forget opacity">
                    <a href="">REGISTER</a>
                    <a href="">FORGOT PASSWORD</a>
                </div> */}
            </div>
            <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
        <ToastContainer />
    </div>
{/* </section> */}
    </>
  )
}

export default Login