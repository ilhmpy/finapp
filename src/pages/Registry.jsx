import "./pagesStyles/main.css";
import "./pagesStyles/Registry.css";
import add from "./pagesStyles/img/add-icon.svg";
import pl from "./pagesStyles/img/file.svg";
import save from "./pagesStyles/img/save.svg";
import arrow_down from "./pagesStyles/img/arrow_down.svg";
import eddit from "./pagesStyles/img/eddit.svg";
import React, { useState, useEffect } from "react";
import Functions from "./Functions.js";
import CalendarModal  from "../components/Calendar.jsx";

let index = 0;

let newWaybill;
let edditWaybill;
let currentEddit;

let Funcs = new Functions();

function Registry() {
  const [ registry, setRegistry ] = useState([
    { date: "10.01.2020", allChecked: false, files: [
      { id: 1, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "29635/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгеddнерировать несколько ...",
        acceptChecked: false
      },
      { id: 2, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "29625/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгеddнерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ИП Новикова Юлия Викторовна", innerChecked: false, firstChecked: false, number: "29235/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгеddнерировать несколько ...",
        acceptChecked: false
      },
      { id: 4, company: "ИП Новикова Юлия Викторовна", innerChecked: false, firstChecked: false, number: "29615/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгеddнерировать несколько ...",
        acceptChecked: false
      }
    ]
    },
    { date: "10.03.2020",  allChecked: false, files: [
      { id: 1, company: "ООО Джи Эф Си", innerChecked: false, number: "21335/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмаaaстеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 2, company: "ООО Джи Эф Си", innerChecked: false, number: "21635/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмаaaстеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ООО Джи Эф Си", innerChecked: false, number: "21335/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмаaaстеру сгенерировать несколько ...",
        acceptChecked: false
      }
    ]
    },
    { date: "10.05.2020", allChecked: false, files: [
      { id: 1, company: "ООО Джи Эф Си", innerChecked: false, number: "19631/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебsadasdмастеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 2, company: "ООО Джи Эф Си", innerChecked: false, number: "22131/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебsadasdмастеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ООО Джи Эф Си", innerChecked: false, number: "23654/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебsadasdмастеру сгенерировать несколько ...",
        acceptChecked: false
      }
    ]
    },
    { date: "10.08.2020",  allChecked: false, files: [
      { id: 3, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "296135/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмасddтеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "296335/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "293635/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько ...",
        acceptChecked: false
      }
    ]
    },
  ]);

  const [ defaultRegistry, setDefaultRegistry ] = useState([
    { date: "10.01.2020", allChecked: false, files: [
      { id: 1, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "29635/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгеddнерировать несколько ...",
        acceptChecked: false
      },
      { id: 2, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "29625/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгеddнерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ИП Новикова Юлия Викторовна", innerChecked: false, firstChecked: false, number: "29235/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгеddнерировать несколько ...",
        acceptChecked: false
      },
      { id: 4, company: "ИП Новикова Юлия Викторовна", innerChecked: false, firstChecked: false, number: "29615/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгеddнерировать несколько ...",
        acceptChecked: false
      }
    ]
    },
    { date: "10.03.2020",  allChecked: false, files: [
      { id: 1, company: "ООО Джи Эф Си", innerChecked: false, number: "21335/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмаaaстеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 2, company: "ООО Джи Эф Си", innerChecked: false, number: "21635/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмаaaстеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ООО Джи Эф Си", innerChecked: false, number: "21335/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмаaaстеру сгенерировать несколько ...",
        acceptChecked: false
      }
    ]
    },
    { date: "10.05.2020", allChecked: false, files: [
      { id: 1, company: "ООО Джи Эф Си", innerChecked: false, number: "19631/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебsadasdмастеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 2, company: "ООО Джи Эф Си", innerChecked: false, number: "22131/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебsadasdмастеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ООО Джи Эф Си", innerChecked: false, number: "23654/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебsadasdмастеру сгенерировать несколько ...",
        acceptChecked: false
      }
    ]
    },
    { date: "10.08.2020",  allChecked: false, files: [
      { id: 3, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "296135/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмасddтеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "296335/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько ...",
        acceptChecked: false
      },
      { id: 3, company: "ИП Новикова Юлия Викторовна", innerChecked: false, number: "293635/DD", type: "Б", sum: "11266,81", nds: "1077,6",
        comment: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько ...",
        acceptChecked: false
      }
    ]
    },
  ]);

  const [ allItemsChecked, setAllItemsChecked ] = React.useState(false);
  let [ clicks, setClicks ] = React.useState(0);
  const [ innerNavChecked, setInnerNavChecked ] = React.useState(false);
  const [ acceptNavChecked, setAcceptNavChecked ] = React.useState(false);

  let modalAccept = false;

  const [ modalCalendarOpen, setModalCalendarOpen ] = useState(false);
  const [ range, setRange ] = useState([]);

  return (
    <div className="registry">
      <div className="black-registry-bg">
        <div className="add-window" data-name="add-window">
          <div className="window__title">Добавление накладной/счета</div>
          <div className="window__inputs">
            <div className="window__input-box">
                <label className="window__label">Дата</label>
                <input className="window__input" id="add-date" />
            </div>
            <div className="window__input-box">
                <label className="window__label lb">№ накладной</label>
                <input className="window__input" id="number-waybill" />
            </div>
          </div>
          <div className="window__list">
            <label className="window__list-label">Оплата</label>
            <div className="window__select"  onMouseOver={e => Funcs.changeStateDomElement(document.querySelector(".money"))}>
              <span className="select-description" id="money-menu">Наличный расчет</span> <img src={arrow_down} />
              <div className="window__select-menu money"
                onMouseLeave={e => Funcs.changeStateDomElement("", document.querySelector(".money"))}
                onClick={e => {
                  if (e.target.className == "window__select-link") {
                      Funcs.changeDescription(document.querySelector("#money-menu"), e.target.innerText);
                  }
                }}
              >
                <div className="window__select-link">Наличный расчет</div>
                <div className="window__select-link">Без наличный расчет</div>
              </div>
            </div>
            <label className="window__list-label ld">Поставщик</label>
            <div className="window__select" onMouseOver={e => Funcs.changeStateDomElement(document.querySelector(".company"))}>
                <span className="select-description" id="company-menu">ООО Джи Эф Си</span> <img src={arrow_down} />
                <div className="window__select-menu company"
                  onMouseLeave={e => Funcs.changeStateDomElement("", document.querySelector(".company"))}
                  onClick={e => {
                      if (e.target.className == "window__select-link") {
                        Funcs.changeDescription(document.querySelector("#company-menu"), e.target.innerText);
                      }
                    }}
                  >
                  <div className="window__select-link">ООО Джи Эф Си</div>
                  <div className="window__select-link">ИП Новикова Юлия Викторовна</div>
                </div>
            </div>
            <div className="window__inputs">
              <div className="window__input-box">
                  <label className="window__label">Сумма</label>
                  <input className="window__input" id="add-sum" />
              </div>
              <div className="window__input-box">
                  <label className="window__label lb">Сумма НДС</label>
                  <input className="window__input" id="add-sum-nds" />
              </div>
            </div>
          </div>
          <label className="window__label t-label">Комментарий</label>
          <textarea className="window__textarea" id="add-textarea"></textarea>
          <label className="window__checker">
            <span className="check" onClick={e => {
              if (e.target.className == "check") {
                e.target.classList.add("active");
                modalAccept = true;
              } else if (e.target.className == "check active") {
                modalAccept = false;
                e.target.classList.remove("active")
              };
            }}></span>
            <h3 className="title">Сразу подтвердить</h3>
          </label>
          <div className="window__btns">
            <button className="window__btn" onClick={e => {
              document.querySelector(".add-window").style.display = "none";
              document.querySelector(".black-registry-bg").style.display = "none";
              modalAccept = false;
            }}>Закрыть</button>
            <button className="window__btn" onClick={e => {
              if (
                document.querySelector("#add-sum").value.length > 0 &
                document.querySelector("#add-sum-nds").value.length > 0
              ) {
                newWaybill = Funcs.createObject (
                  document.querySelector("#add-date").value,
                  document.querySelector("#company-menu").innerText,
                  document.querySelector("#number-waybill").value,
                  document.querySelector("#money-menu").innerText,
                  document.querySelector("#add-sum").value,
                  document.querySelector("#add-sum-nds").value,
                  document.querySelector("#add-textarea").value,
                  modalAccept
                );
                Funcs.addDocument(newWaybill, setRegistry, setDefaultRegistry);
                document.querySelector(".add-window").style.display = "none";
                document.querySelector(".black-registry-bg").style.display = "none";
              }
            }}>Добавить</button>
          </div>
        </div>
        <div className="eddit-window" data-name="eddit-window">
        <div className="window__title"><span id="eddit-title"></span><span className="window__delete" onClick={e => {
          Funcs.findAndDelete(currentEddit, registry, defaultRegistry, setRegistry, setDefaultRegistry);
          Funcs.changeStateDomElement("", document.querySelector(".eddit-window"));
          Funcs.changeStateDomElement("", document.querySelector(".black-registry-bg"));
          modalAccept = false;
        }}>Удалить</span></div>
        <div className="window__inputs">
          <div className="window__input-box">
              <label className="window__label">Дата</label>
              <input className="window__input" id="eddit-date-input" />
          </div>
          <div className="window__input-box">
              <label className="window__label lb">№ накладной</label>
              <input className="window__input" id="eddit-number-input" />
          </div>
        </div>
        <div className="window__list">
          <label className="window__list-label">Оплата</label>
          <div className="window__select" onMouseOver={e => Funcs.changeStateDomElement(document.querySelector(".eddit-money"))}>
            <span className="select-description" id="eddit-money-desc">Наличный расчёт</span> <img src={arrow_down} />
            <div className="window__select-menu eddit-money"
              onMouseLeave={e => Funcs.changeStateDomElement("", document.querySelector(".eddit-money"))}
              onClick={e => {
                if (e.target.className == "window__select-link") {
                    Funcs.changeDescription(document.querySelector("#eddit-money-desc"), e.target.innerText);
                }
              }
            }
            >
              <div className="window__select-link">Наличный расчет</div>
              <div className="window__select-link">Без наличный расчет</div>
            </div>
          </div>
          <label className="window__list-label ld">Поставщик</label>
          <div className="window__select" onMouseOver={e => Funcs.changeStateDomElement(document.querySelector(".eddit-company"))}>
              <span className="select-description eddit-company-desc">ООО Джи Эф Си</span> <img src={arrow_down} />
              <div className="window__select-menu eddit-company"
                onMouseLeave={e => Funcs.changeStateDomElement("", document.querySelector(".eddit-company"))}
                onClick={e => {
                    if (e.target.className == "window__select-link") {
                      Funcs.changeDescription(document.querySelector(".eddit-company-desc"), e.target.innerText);
                    }
                  }}
                >
                <div className="window__select-link">ООО Джи Эф Си</div>
                <div className="window__select-link">ИП Новикова Юлия Викторовна</div>
              </div>
          </div>
          <div className="window__inputs">
            <div className="window__input-box">
                <label className="window__label">Сумма</label>
                <input className="window__input" id="eddit-sum-input" />
            </div>
            <div className="window__input-box">
                <label className="window__label lb">Сумма НДС</label>
                <input className="window__input" id="eddit-sum-nds" />
            </div>
          </div>
        </div>
        <label className="window__label t-label">Комментарий</label>
        <textarea className="window__textarea" id="eddit-textarea"></textarea>
          <label className="window__checker">
            <span className="check" onClick={e => {
              if (e.target.className == "check") {
                e.target.classList.add("active");
                modalAccept = true;
              } else if (e.target.className == "check active") {
                e.target.classList.remove("active");
                modalAccept = false;
              };
            }}></span>
            <h3 className="title">Подтверждено</h3>
          </label>
          <div className="window__btns">
            <button className="window__btn" onClick={e => {
              document.querySelector(".eddit-window").style.display = "none";
              document.querySelector(".black-registry-bg").style.display = "none";
              modalAccept = false;
              document.querySelector(".check").classList.remove("active");
            }}>Закрыть</button>
            <button className="window__btn" onClick={e => {
              edditWaybill = Funcs.createObject(
                document.querySelector("#eddit-date-input").value,
                document.querySelector(".eddit-company-desc").innerText,
                document.querySelector("#eddit-number-input").value,
                document.querySelector("#eddit-money-desc").innerText,
                document.querySelector("#eddit-sum-input").value,
                document.querySelector("#eddit-sum-nds").value,
                document.querySelector("#eddit-textarea").value,
                modalAccept
              );
              document.querySelector(".check").classList.remove("active");
              Funcs.edditDocument(currentEddit, registry, defaultRegistry, edditWaybill, setRegistry, setDefaultRegistry);
              modalAccept = false;
              document.querySelector(".eddit-window").style.display = "none";
              document.querySelector(".black-registry-bg").style.display = "none";
            }}>Сохранить</button>
          </div>
        </div>
      </div>
      <div className="container registry__container">
        <div className="registry__nav">
          <div className="registry__nav-title">
            <span style={
              {
                color: "#3F40F0",
                fontWeight: 300,
                fontSize: ".80em",
                marginRight: "43px",
              }
            }>Реестр накладных</span>
            <div className="registry__btns"
              onClick={e => {
                if (e.target.className == "registry__btn") {
                  document.querySelectorAll(".registry__btn").forEach(btn => btn.classList.remove("activeBtn"));
                  e.target.classList.add("activeBtn");
                  setRegistry(defaultRegistry);
                  Funcs.filterByDates(setRegistry, e.target.innerText);
                };
              }}

              onMouseOver={e => setModalCalendarOpen(true)}
            >
              <button className="registry__btn">{range.length == 0 ? Funcs.getDate() : range[0]}</button>
              <button className="registry__btn">{range.length == 0 ? Funcs.getDate() : range[range.length - 1]}</button>
              <CalendarModal
                state={registry}
                display={modalCalendarOpen}
                leave={e => setModalCalendarOpen(!modalCalendarOpen)}
                setRange={setRange}
                setState={setRegistry}
                def={defaultRegistry}
              />
            </div>
            <h3 className="registry__status">Не оплачено:  23 000,00₽ | <span>Итог: 123 00,00₽</span> <img src={add} onClick={e => {
              document.querySelector(".add-window").style.display = "block";
              document.querySelector(".black-registry-bg").style.display = "block";
            }}/></h3>
          </div>
          <div className="registry__nav-links">
            <div className="registry__nav-date">
              <span className="registry__checkbox"
                style={{marginLeft: "22px",  background: allItemsChecked ? "#fff" : "rgba(63, 64, 240, 0.25)"}}
                onClick={e => {
                  setAllItemsChecked(!allItemsChecked);
                  if (e.target.className == "registry__checkbox") registry.forEach(dt => dt.allChecked = false);
                  else if (e.target.className == "fas fa-check-square") registry.forEach(dt => dt.allChecked = true);
                  registry.forEach(dt => dt.allChecked = !dt.allChecked);
              }}>
                  <i className={allItemsChecked ? "fas fa-check-square" : ""}></i>
               </span>
               Дата TH <img src={pl} />
            </div>
            <div className="registry__nav-company" onMouseOver={e => document.querySelector(".nav-company__menu").style.display = "block"}>
              <span className="registry__checkbox registry__nav-checkbox" onClick={e => {
                setInnerNavChecked(!innerNavChecked)
                if (e.target.className == "registry__checkbox registry__nav-checkbox") registry.forEach(dt => dt.files.forEach(fl => fl.innerChecked = false))
                else if (e.target.className == "fas fa-check-square") registry.forEach(dt => dt.files.forEach(fl => fl.innerChecked = true));
                registry.forEach(dt => dt.files.forEach(fl => fl.innerChecked = !fl.innerChecked));
              }}>
                <i className={innerNavChecked ? "fas fa-check-square" : ""}></i>
              </span>
              Название А <img src={arrow_down} />
              <div className="nav-company__menu"
                onMouseLeave={e => document.querySelector(".nav-company__menu").style.display = "none"}
                onClick={e => {
                  if (e.target.className == "nav-company__menu_link") {
                    setRegistry(defaultRegistry);
                    Funcs.filtration(e.target.dataset.filter, setRegistry);
                  }
                }}
                >
                <a className="nav-company__menu_link" data-filter="ООО Джи Эф Си">ООО Джи Эф Си</a>
                <a className="nav-company__menu_link" data-filter="ИП Новикова Юлия Викторовна">ИП Новикова Юлия Викторовна</a>
                <a className="nav-company__menu_link" data-filter="ООО Джи Эф Си">ООО Джи Эф Си</a>
              </div>
            </div>
            <div className="registry__nav-types">
              <a className="registry__nav-types_link">Номер ТН <img src={pl} /></a>
              <a className="registry__nav-types_link">Тип <img src={pl} /></a>
              <a className="registry__nav-types_link">Сумма ТН <img src={pl} /></a>
              <a className="registry__nav-types_link">НДС <img src={pl} /></a>
            </div>
            <div className="registry__nav-commentary">
              Комментарий <img src={pl} />
            </div>
            <div className="registry__nav-status">
                <div className="registry__checkbox status__checkbox" onClick={e => {
                  setAcceptNavChecked(!acceptNavChecked);
                  if (e.target.className == "registry__checkbox status__checkbox") registry.forEach(dt => dt.files.forEach(fl => fl.acceptChecked = false))
                  else if (e.target.className == "fas fa-check-square") registry.forEach(dt => dt.files.forEach(fl => fl.acceptChecked = true));
                  registry.forEach(dt => dt.files.forEach(fl => fl.acceptChecked = !fl.acceptChecked));
                }}>
                  <i className={acceptNavChecked ? "fas fa-check-square" : ""}></i>
                </div>
                <img src={save} />
            </div>
          </div>
        </div>
        <div className="registry__cards">
          {
            registry.map(reg => {
              if (reg.files.length > 0) {
                return (
                  <div className="registry__card" key={index++} id={index}
                    style={{background: reg.allChecked || innerNavChecked ? "rgb(229, 229, 229)" : "#fff"}}
                  >
                    <div className="registry__date">
                        <span
                          className="registry__checkbox"
                          style={{marginLeft: "22px"}}
                          onClick={e => {
                          if (e.target.className == "registry__checkbox") {
                            Funcs.changeChecked(e.target.parentNode.innerText, registry, setRegistry, "date");
                          };
                          if (e.target.className == "fas fa-check-square") {
                              Funcs.changeChecked(e.target.parentNode.parentNode.innerText, registry, setRegistry, "date");
                          }
                        }}>
                            <i className={reg.allChecked ? "fas fa-check-square" : ""}></i>
                        </span>
                        {reg.date}
                     </div>
                     <div className="registry__items">
                        {reg.files.map(fl => {
                          return (
                              <div className="registry__item" id={fl.id} key={index++}
                                style={{background: fl.innerChecked || reg.allChecked ? "rgb(229, 229, 229)" : "#fff"}}
                                >
                                  <span className="registry__checkbox"
                                    style={{background: "#fff"}}
                                    onClick={e => {
                                      if (e.target.className == "registry__checkbox") {
                                        Funcs.changeChecked(e.target.parentNode.querySelector(".number").innerText, registry, setRegistry, "number");
                                      };
                                      if (e.target.className == "fas fa-check-square") {
                                        Funcs.changeChecked(e.target.parentNode.parentNode.querySelector(".number").innerText, registry, setRegistry, "number");
                                      }
                                    }}
                                    >
                                      <i
                                          className={fl.innerChecked ? "fas fa-check-square" : ""}
                                          style={{fontSize: ".70em"}}
                                       ></i>
                                  </span>
                                  <span className="registry__company">{fl.company}</span>
                                  <div className="registry__types">
                                      <div className="registry__type number">{fl.number}</div>
                                      <div className="registry__type bill">{fl.type}</div>
                                      <div className="registry__type sum">{fl.sum}</div>
                                      <div className="registry__type nds">{fl.nds}</div>
                                  </div>
                                  <div className="registry__commentary">{fl.comment}</div>
                                  <div className="registry__save">
                                    <span className="registry__checkbox checkbox--green"
                                      style={{marginLeft: "4px", background: "#fff", border: "1px solid #BDBDBD"}}
                                      onClick={e => {
                                        if (e.target.className == "registry__checkbox checkbox--green") {
                                          Funcs.changeChecked (
                                              e.target.parentNode.parentNode.querySelector(".number").innerText,
                                              registry, setRegistry, "accept"
                                          );
                                        };
                                        if (e.target.className == "fas fa-check-square") {
                                          Funcs.changeChecked(
                                            e.target.parentNode.parentNode.parentNode.querySelector(".number").innerText, registry, setRegistry, "accept"
                                          );
                                        }
                                      }}
                                      >
                                        <i
                                          className={fl.acceptChecked ? "fas fa-check-square" : ""}
                                        ></i>
                                     </span>
                                     <img src={eddit} className="eddit-img" onClick={e => {
                                       edditWaybill = Funcs.createObject(
                                         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.registry__date').innerText,
                                         e.target.parentNode.parentNode.querySelector(".registry__company").innerText,
                                         e.target.parentNode.parentNode.querySelector(".number").innerText,
                                         e.target.parentNode.parentNode.querySelector(".bill").innerText,
                                         e.target.parentNode.parentNode.querySelector(".sum").innerText,
                                         e.target.parentNode.parentNode.querySelector(".nds").innerText,
                                         e.target.parentNode.parentNode.querySelector(".registry__commentary").innerText
                                       );
                                       currentEddit = edditWaybill;
                                       Funcs.showCurrentEddit(
                                         currentEddit,
                                         {
                                           title: document.querySelector("#eddit-title"),
                                           dateInput: document.querySelector("#eddit-date-input"),
                                           numberInput: document.querySelector("#eddit-number-input"),
                                           sumInput: document.querySelector("#eddit-sum-input"),
                                           ndsInput: document.querySelector("#eddit-sum-nds"),
                                           edditTextarea: document.querySelector("#eddit-textarea")
                                         }
                                       );
                                       document.querySelector('.black-registry-bg').style.display = "block";
                                       document.querySelector('.eddit-window').style.display = "block";
                                       Funcs.scrollTo();
                                     }}/>
                                  </div>
                             </div>
                          );
                        }
                      )
                    }
                   </div>
                  </div>
                )
              }
            }
          )
        }
        </div>
      </div>
    </div>
  );
}

export default Registry;
