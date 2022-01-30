import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        window.sessionStorage.setItem("token", "iruypayloadmeupau");
        navigate('/app');
    }

    return(
        <div className="container">
            <form className="form">
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">E-mail</label>
                    <input
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password" 
                        name="password"
                    />
                </div>
                <div className="form-group-question">
                    <small>Ainda não tem uma conta ?</small>
                </div>
                {/* {
                    isLoading ?
                    <img 
                        src={spinner}
                        style={{width: '50px'}}
                    /> : 
                    <button className="btn" type="submit">Entrar</button>
                } */}
                <button onClick={handleSubmit}>Entrar</button>
            </form>
        </div>
    );
}

export default Login;