import React, {useContext, useEffect, useState} from 'react'
import './auth.css'
import { Loader } from '../components/Loader'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {

    const auth = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        login: '', password: ''
    })

    useEffect(() => {
        clearError()
    }, [error, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const pressHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.adminId)
        } catch (e) { }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="auth_container">

                <h4>АВТОРИЗАЦИЯ</h4>

                <label htmlFor="login"><b>Логин</b></label>
                <input type="text" placeholder="Введите логин" name="login" onChange={changeHandler} />

                <label htmlFor="password"><b>Пароль</b></label>
                <input type="text" placeholder="Введите пароль" name="password" onChange={changeHandler} />

                <button type="submit" className="btn" onClick={pressHandler}>Войти</button>

        </div>
    )

}