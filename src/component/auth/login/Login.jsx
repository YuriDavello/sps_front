import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import './Login.css';

const User = {
    email: '',
    password: ''
}

function Login() {
    // navigate
    const navigate = useNavigate();

    // state/context
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const { authenticate } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        User.email = emailText;
        User.password = passwordText;
        window.sessionStorage.setItem("token", "iruypayloadmeupau");

        authenticate(User);

        navigate('/app');
    }

    const handleEmailChange = (event) => {
        const emailTextInput = event.target.value;
        setEmailText(emailTextInput);
    }

    const handlePasswordChange = (event) => {
        const passwordTextInput = event.target.value; 
        setPasswordText(passwordTextInput);
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h3>Login</h3>
                
                <div className="form-group">
                    <label>E-mail</label>
                    <input onChange={handleEmailChange} type="email" placeholder="Enter email" />
                </div>
                
                <div className="form-group">
                    <label>Senha</label>
                    <input onChange={handlePasswordChange} type="password" placeholder="Password" />
                </div>

                <div className="form-group-question"><small>Ainda não tem uma conta ?</small></div>
                {/* {
                    isLoading ?
                    <img 
                        src={spinner}
                        style={{width: '50px'}}
                    /> : 
                    <button className="btn" type="submit">Entrar</button>
                } */}
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;