import React, {useEffect, useState} from 'react'
import './auth.css'
import {useHttp} from "../hooks/http.hook"
import {Loader} from "../components/Loader"

export const RegisterPage = () => {

    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        login: '', password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const pressHandler = async () => {
        try {
            await request('/api/auth/register', 'POST', {...form})
            await request('/api/auth/login', 'POST', {...form})
        } catch (e) { }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="auth_container">

            <h4>РЕГИСТРАЦИЯ</h4>

            <label htmlFor="login"><b>Логин</b></label>
            <input type="text" placeholder="Введите логин" name="login" onChange={changeHandler} required />

            <label htmlFor="password"><b>Пароль</b></label>
            <input type="text" placeholder="Введите пароль" name="password" onChange={changeHandler} required />

            <button onClick={pressHandler}>Зарегистрироваться</button>

        </div>
    )

}