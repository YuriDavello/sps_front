import './Register.css';

function Register(){
    return(
        <div className="container">
            <form className="register-form">
                <h3>Cadastro</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputNome">Nome</label>
                    <input
                        type="text" 
                        className="form-control" 
                        id="exampleInputNome" 
                        aria-describedby="emailHelp" 
                        placeholder="Name" 
                        name="name"
                    />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">E-mail</label>
                <input
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Email" 
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
                    <small>Já tem uma conta ?</small>
                </div>
                {/* {
                    isLoading ?
                    <img
                        src={spinner}
                        style={{width: '50px'}}
                    /> : 
                    <button className="btn" type="submit">Criar conta</button>
                } */}
                <button>Criar conta</button>
            </form>
        </div>
    );
}

export default Register;