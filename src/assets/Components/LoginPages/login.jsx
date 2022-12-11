import React from 'react'
import './login.css'	

const LoginPage = () => {
  return (
    <div id="login">
        <section className="login_section">
        <div className="wrapper">
            <h1 className="title">Iniciar sessão</h1>
            <form action="form">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="actions">
                    <button type="submit" className='login-btn'>Entrar</button>
                </div>
            </form>
        </div>
        <div className="wrapper">
            <div class="links">
                <a href="#" class="login-link">Não consegue fazer login?</a>
                <a href="#" class="login-link">Criar conta</a>
            </div>
        </div>
        </section>
        <section class="wallpaper"></section>
    </div>
  )
}

export default LoginPage