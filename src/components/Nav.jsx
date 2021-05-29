import * as React from 'react';
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "./componentsStyles/Nav.css";
import "../pages/pagesStyles/main.css";
import arrow_down from "./componentsStyles/img/arrow_down.svg";
import ava from "./componentsStyles/img/ava.svg";

export default function Nav() {
  const [ user, setUser ] = useState([]);

  useEffect(() => {
    async function fetchUser() {
        let token = localStorage.getItem("token");
        let request = await fetch("http://127.0.0.1:8000/api/accounts/auth/get-user", {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`
          }
        });
        let response = await request.json();
        if (request.status == 200) setUser(response);
        else console.error(response);
      };
    fetchUser();
  }, [])

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__cover">
          <span>258: Покровка 10(p10 Мск) <img src={arrow_down} alt="arrow" /></span>
        </div>
        <div className="header__nav" onClick={e => {
          if (e.target.className == "header__nav-link") {
            document.querySelectorAll(".header__nav-link").forEach(link => link.classList.remove("activeLink"));
            e.target.classList.add("activeLink");
          };
        }}>
          <a href="/home" className="header__nav-link">Главная</a>
          <a href="/budget" className="header__nav-link">Бюджет</a>
          <a href="/revenue" className="header__nav-link">Выручка</a>
          <a href="/scans" className="header__nav-link">Сканы</a>
          <a href="/registry" className="header__nav-link">Реестр накладных</a>
          <a href="/imports" className="header__nav-link">Поставщики</a>
          <a href="/coworkers" className="header__nav-link">Сотрудники</a>
          <a href="/salary" className="header__nav-link">Зарплата</a>
          <a href="/signals" className="header__nav-link">Сигналы</a>
          <a href="/settings" className="header__nav-link">Настройки</a>
        </div>
        <div className="header__account">
          <div className="account__img">
            <img src={user.ava != undefined ? user.ava : ava} alt="ava" />
          </div>
          <span>
            <h4 className="account__name">{user.full_name != undefined ? user.full_name : ""}</h4>
            <h6 className="account__position">{user.position != undefined ? user.position : "Менеджер"}</h6>
          </span>
        </div>
      </div>
    </header>
  );
}
