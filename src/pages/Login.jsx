import React, { useRef, useState } from "react";
import "./pagesStyles/login.css";
import "./pagesStyles/main.css";
import Functions from "./Functions.js";

const Funcs = new Functions();

export default function Login() {
  const [loginError, setLoginError] = React.useState(false);

  const [eye, setEye] = React.useState(true);

  let login;
  let password;
  let email;

  let moreMinut;

  let seconds = 59;
  let clicks = 0;

  const [openSendCode, setOpenSendCode] = React.useState(false);
  const [resetEmail, setResetEmail] = React.useState("");
  const [resetCode, setResetCode] = React.useState("");
  const [currentScreen, setCurrentScreen] = React.useState(0);
  const [resetPassword, setResetPassword] = React.useState("");
  const [resetPassword2, setResetPassword2] = React.useState("");
  const [ badRequest, setBadRequest ] = useState(false);

  const handleClickOpenSendCode = () => {
    setCurrentScreen(0);
    setOpenSendCode(true);
  };

  const handleCloseOpenSendCode = () => {
    setOpenSendCode(false);
  };

  const handleChangeResetEmail = (e) => {
    setResetEmail(e.target.value);
  };

  const handleLogin = async (e) => {
    let req = await fetch("http://localhost:8000/api/accounts/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: login,
        password: password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    let res = await req.json();
    console.log(res);
    if (req.status === 200) {
      localStorage.setItem("token", res.token);
      console.log(localStorage.getItem("token"));
      window.location.href = "/home";
      setBadRequest(false);
    } else {
      setBadRequest(true);
      setLoginError(true);
    }
  };

  async function postResetPassword() {
    let request = await fetch("/api/accounts/auth/password-reset/", {
      method: "POST",
      body: JSON.stringify({
        email: email
      }),
      headers: {
        "content-type": "application/json"
      }
    });

    let requestAnswer = await request.json();
    console.log(requestAnswer)
    if (requestAnswer.status === 200) {
      console.log(`REQUEST: ${requestAnswer.status}`)
    } else {

    }
  }

  const changeStateDomElement = (changeObj, noneObj) => {
    changeObj.style.display = "block";
    noneObj.style.display = "none";
  }

  const counter = () => {
    moreMinut = setInterval(() => {
      document.querySelector(".count").innerText = `${seconds > 0 ? "1" : "0"}:${seconds > 0 ? seconds-- : seconds = 59}`;
    }, 1000);
  };

  return (
    <div className="login">
      <div className="login__black-bg">
        <div className="login__form">
          <div className="form__enter">
            <h3 className="enter__title">Войти</h3>
            <form onSubmit={e => {
              e.preventDefault();
              Funcs.clearAdd(".log_inputs");
              login = document.querySelector("#login").value;
              password = document.querySelector("#password").value;
              if (login.length != 0 & password.length != 0) handleLogin(e);
            }}>
              <label>
                <span className="enter__input-title">Логин</span>
                <input className="enter__input log_inputs" id="login" />
                <span className="enter__input-title">Пароль</span>
                <input type={eye ? "text" : "password"} className="enter__input log_inputs" id="password" />
                <i className={eye ? "fas fa-eye" : "fas fa-eye-slash"} id="eye" onClick={e => {
                setEye(!eye);
                }}></i>
                </label>
                <input type="submit" className="enter__button" value="Войти" />
              </form>
              <h3 className="badrequest" style={{display: badRequest ? "block" : "none"}}>Неверен логин или пароль.</h3>
            <h4 className="enter__forgot" onClick={e => changeStateDomElement(
              document.querySelector(".recovery__password"),
              document.querySelector(".form__enter")
              )
            }
              >Забыли пароль?</h4>
          </div>
          <div className="recovery__password">
            <div className="times" onClick={e => {
              changeStateDomElement(document.querySelector(".form__enter"), document.querySelector(".recovery__password"));
            }}>
              <span></span>
            </div>
            <h3 className="enter__title recovery__title">Восстановление пароля</h3>
            <span className="recovery__about">Адрес электронной почты аккаунта CRM</span>
            <form onSubmit={e => {
              e.preventDefault();
              Funcs.clearAdd(".rec_inputs")
              if (document.querySelector("#email").value.length > 0) {
                  email = document.querySelector("#email").value;
                  console.log(email)
                  postResetPassword();
                  changeStateDomElement(document.querySelector(".recovery__code"), document.querySelector(".recovery__password"));
                  counter();
              };
            }}>
                <span className="enter__input-title">E-mail</span>
                <input className="enter__input rec_inputs" id="email" />
                <input type="submit" className="enter__button recovery__button" value="Отправить код" />
            </form>
          </div>
          <div className="recovery__code">
              <div className="times" onClick={e => {
                  changeStateDomElement(document.querySelector(".form__enter"), document.querySelector(".recovery__code"));
              }}>
                <span></span>
              </div>
              <h3 className="enter__title recovery__title">Восстановление пароля</h3>
              <span className="recovery__about code__about">Введите код, который мы вам отправили на адрес {email}</span>
              <form onSubmit={e => {
                e.preventDefault();
                changeStateDomElement(document.querySelector(".reset__password"), document.querySelector(".recovery__code"));
              }}>
                <div className="code__inputs">
                  <input className="code__input" defaultValue="0" />
                  <input className="code__input" defaultValue="0" />
                  <input className="code__input" defaultValue="0" />
                  <input className="code__input" defaultValue="0" />
                  <input className="code__input" defaultValue="0" />
                  <input className="code__input" defaultValue="0" />
                </div>
                <input type="submit" className="enter__button code__button" value="Подтвердить код" />
              </form>
              <span className="code__counter">Отправить код повторно через <span className="count"></span></span>
          </div>
          <div className="reset__password">
            <div className="times" onClick={e => {
              changeStateDomElement(document.querySelector(".form__enter"), document.querySelector(".reset__password"));
            }}>
              <span></span>
            </div>
              <h3 className="enter__title">Обновите пароль</h3>
              <form onSubmit={e => {
                e.preventDefault();
                Funcs.clearAdd(".res_inputs");
                changeStateDomElement(document.querySelector(".form__enter"), document.querySelector(".reset__password"));
              }}>
                  <span className="enter__input-title">Пароль</span>
                  <input type={eye ? "text" : "password"} className="enter__input res_inputs" id="login" />
                  <i className={eye ? "fas fa-eye" : "fas fa-eye-slash"} id="eye" onClick={e => {
                    setEye(!eye);
                  }}></i>
                  <span className="enter__input-title">Пароль ещё раз</span>
                  <input type={eye ? "text" : "password"} className="enter__input res_inputs" id="password" />
                  <i className={eye ? "fas fa-eye" : "fas fa-eye-slash"} id="eye" onClick={e => {
                    setEye(!eye);
                  }}></i>
                  <input type="submit" className="enter__button reset__button" value="Обновить пароль" />
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}
