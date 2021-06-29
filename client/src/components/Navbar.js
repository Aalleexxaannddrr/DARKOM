import React, {useCallback, useState, useEffect, useContext} from 'react'
import { useHttp } from '../hooks/http.hook'
import './navbar.css'
import { Loader } from '../components/Loader'
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
  
  const {request, loading} = useHttp()
  const [categories, setCategories] = useState([])
  const auth = useContext(AuthContext)

  const getInfo = useCallback(async () => {
    try {
      // await request('/api/competition/add', 'POST', { name: "1", description: "2", imgUrl: "3" })
      const fetched = await request('/api/category', 'GET', null)
        setCategories(fetched)
    } catch (e) { }
  }, [request])

  useEffect(() => {
      getInfo()
  }, [getInfo])
  
  if (loading) {
    return <Loader />
  }

  return (
    <nav>
      <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        {auth.isAuthenticated && <a>АДМИНИСТРАТОР</a>}
        <div className="header-right">
          <a href="#home">Главная</a>
          <div className="dropdown">
            <button className="dropbtn" href="#contact">О продукции
              <i className="fa fa-caret-down"></i> 
            </button>
            <div className="dropdown-content">
              <div className="header">
                <h2>Продукция</h2>
              </div>
              <div className="row">
                <div className="column">
                    <a href="#default">Мультипликаторы крутящего момента ручные </a>
                    <a href="#default">Мультипликаторы крутящего момента ручные </a>
                    <a href="#default">Мультипликаторы крутящего момента ручные </a>
                  </div>
                  <div className="column">
                    <a href="#default">Мультипликаторы крутящего момента ручные </a>
                    <a href="#default">Мультипликаторы крутящего момента ручные </a>
                    <a href="#default">Мультипликаторы крутящего момента ручные </a>
                  </div>
                  <div className="column">
                    <a href="#default">Мультипликаторы крутящего момента ручные </a>
                    <a href="#default">Мультипликаторы крутящего момента ручные </a>
                    <a href="#default">Мультипликаторы крутящего момента ручные </a>
                </div>
              </div>
            </div>
          </div>
          <a href="#about">О компании</a>
          <a href="#about">Контакты</a>
        </div>
      </div>
    </nav>
  )
}
/*
{categories.map((i, category) => {
                    var pricol = category.name
                    return (
                      <a href="#default" key={i}>{ pricol }</a>
                    )
                  })}
 */