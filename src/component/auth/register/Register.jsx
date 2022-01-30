import { User } from '../../model/user/User';
import { useState } from 'react';
import './Register.css';

function Register(){
    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = new User(nameText, emailText, passwordText);
        console.log(user);
    }

    const handleNameChange = (event) => {
        const nameTextInput = event.target.value;
        setNameText(nameTextInput);
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
            <form className="register-form" onSubmit={handleSubmit}>
                <h3>Cadastro</h3>

                <div className="form-group">
                    <label htmlFor="exampleInputNome">Nome</label>
                    <input onChange={handleNameChange} type="text" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input onChange={handleEmailChange} type="email" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input onChange={handlePasswordChange} type="password" placeholder="Password" />
                </div>

                <div className="form-group-question"><small>Já tem uma conta ?</small></div>
                {/* {
                    isLoading ?
                    <img
                        src={spinner}
                        style={{width: '50px'}}
                    /> : 
                    <button className="btn" type="submit">Criar conta</button>
                } */}
                <button type="submit">Criar conta</button>
            </form>
        </div>
    );
}

export default Register;