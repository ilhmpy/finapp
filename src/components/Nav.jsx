import * as React from 'react';
import { NavLink } from 'react-router-dom';
import "./componentsStyles/Nav.css";
import "../pages/pagesStyles/main.css";
import arrow_down from "./componentsStyles/img/arrow_down.svg";
import ava from "./componentsStyles/img/ava.svg";

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <img src={ava} alt="ava" />
          </div>
          <span>
            <h4 className="account__name">Иван Иванов</h4>
            <h6 className="account__position">Менеджер</h6>
          </span>
        </div>
      </div>
    </header>
  );
}
