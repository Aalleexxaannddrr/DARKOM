import React from 'react'
import './auth.css'

export const AuthPage = () => {


    return (
        <div className="auth_container">
            <form className="container">

                <h4>АВТОРИЗАЦИЯ</h4>

                <label htmlFor="login"><b>Логин</b></label>
                <input type="text" placeholder="Введите логин" name="login"  />

                <label htmlFor="password"><b>Пароль</b></label>
                <input type="text" placeholder="Введите пароль" name="password"  />

                <button type="submit" className="btn">Войти</button>

            </form>
        </div>
    )

}