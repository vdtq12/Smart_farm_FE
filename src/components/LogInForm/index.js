import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import './LogInForm.css'

const LogInForm = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
        if (userData.password !== pass.value) {
            setErrorMessages({ name: "pass", message: errors.pass });
        } else {
            setIsSubmitted(true);
        }
        } else {
        setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="username">
                        <label>Username</label>
                        <input type="text" name="uname" placeholder='Enter your username' required />
                        {renderErrorMessage("uname")}
                    </div>
                    
                    <div className="password">
                        <label>Password </label>
                        <input type="password" name="pass" placeholder='Enter your password' required />
                        {renderErrorMessage("pass")}
                    </div>                    
                </div>

                
                <div className="button-container">
                    <input type="submit" value="Log in"/>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">
                    {/* <a href='/home' className='HomeSite'>
                        <img src="logo.webp" alt='' />
                    </a> */}
                    LOGIN
                </div>
                {isSubmitted ? navigate("/home") : renderForm}
            </div>
        </div>
    );
}

export default LogInForm