import user from "../img/imports/user.svg";
import edit from "../img/imports/edit_icon.svg";
import React, { useState, useEffect } from "react";
import addScanIcon from "../img/imports/add_scan_icon.svg";
import addIcon from "../img/imports/add_icon.svg";
import close from "./pagesStyles/img/close.svg";
import file from "./pagesStyles/img/arrow_down.svg";
import "./pagesStyles/main.css";
import "./pagesStyles/settings.css";
import Functions from "./Functions.js";

function createData(name, type, comment, id) {
  return { name, type, comment, id};
}

const Funcs = new Functions();

let newAccount;
let edditAccount;
let newCompany;
let edditCompany;

export default function Settings() {
  const [ token, setToken ] = React.useState("");
  const [ rows, setRows ] = React.useState([]);
  const [ accounts, setAccounts ]  = React.useState([
    { name: "Иванов Сергей Иванович", number: "+7 (123) 047-55-66", email: "usermail@mail.ru", active: true, companies: []},
    { name: "Иванов Иван Иванович", number: "+7 (942) 047-55-66", email: "usermail@mail.ru", active: true, companies: []},
    { name: "Иванов Александр Иванович", number: "+7 (918) 047-55-66", email: "usermail@mail.ru", active: false, companies: []},
    { name: "Иванов Николай Иванович", number: "+7 (973) 047-55-66", email: "usermail@mail.ru", active: true, companies: []},
    { name: "Иванов Сергей Иванович", number: "+7 (971) 047-55-66", email: "usermail@mail.ru", active: true, companies: []},
  ]);

  const [ defaultAccounts, setDefaultAccounts ] = React.useState([
    { name: "Иванов Сергей Иванович", number: "+7 (123) 047-55-66", email: "usermail@mail.ru", active: true, companies: []},
    { name: "Иванов Иван Иванович", number: "+7 (942) 047-55-66", email: "usermail@mail.ru", active: true, companies: []},
    { name: "Иванов Александр Иванович", number: "+7 (918) 047-55-66", email: "usermail@mail.ru", active: false, companies: []},
    { name: "Иванов Николай Иванович", number: "+7 (973) 047-55-66", email: "usermail@mail.ru", active: true, companies: []},
    { name: "Иванов Сергей Иванович", number: "+7 (971) 047-55-66", email: "usermail@mail.ru", active: true, companies: []},
  ]);

  const [ companies, setCompanies ] = React.useState([
    { company: "258: Покровка 10 (p10 Мск)", work: false, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
    { company: "ООО Джи Эф Си", work: true, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: "" },
    { company: "ИП Новикова Юлия Викторовна", work: true, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
    { company: "ООО Уборка на дом", work: false, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
    { company: "ООО Магазин холодильников", work: true, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
    { company: "ООО Карельские камни", work: false, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
  ]);

  const [ defaultCompanies, setDefaultCompanies ] = React.useState([
    { company: "258: Покровка 10 (p10 Мск)", work: false, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
    { company: "ООО Джи Эф Си", work: true, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: "" },
    { company: "ИП Новикова Юлия Викторовна", work: true, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
    { company: "ООО Уборка на дом", work: false, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
    { company: "ООО Магазин холодильников", work: true, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
    { company: "ООО Карельские камни", work: false, inn: "", bank: "", bic: "", commentary: "", ress: "", corres: ""},
  ]);

  const [ openAddAccountModal, setOpenAddAccountModal ] = useState(false);
  const [ newCompanies, setNewCompanies ] = useState([]);
  const [ currentAccEddit, setCurrentAccEddit ] = useState([]);
  const [ currentCompanyEddit, setCurrentCompanyEddit ] = useState([]);

  const handleClickOpenAddAccountModal = () => {
    setOpenAddAccountModal(true);
  };

  const handleCloseAddAccountModal = () => {
    setOpenAddAccountModal(false);
  };

  React.useEffect(() => {
    async function getUsers() {
      let request = await fetch("http://127.0.0.1:8000/api/accounts/users/", {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      });
      let requestMassive = [];
      let answer = await request.json();
      if (request.status == 200) {
        answer.forEach(answ => requestMassive = [...requestMassive, answ]);
        console.log(requestMassive);
      } else console.error(answer);
    };
    getUsers();
  }, []);

  return (
    <div className="settings">
      <div className="black-set-bg">
      <div className="add-acc-window" id="add">
        <div className="add-acc__title">Добавление аккаунта</div>
        <div className="add-acc__content">
          <div className="add-acc__inputs">
            <div>
                <label className="add-acc__label">ФИО</label>
                <input className="add-acc__input" id="add-acc__name" />
            </div>
            <div>
                <label className="add-acc__label l">Номер телефона</label>
                <input className="add-acc__input" id="add-acc__number" />
            </div>
            <div>
                <label className="add-acc__label b">Почта / логин</label>
                <input className="add-acc__input" id="add-acc__email" />
            </div>
            <div className="window__btns add-acc__btns">
              <button className="window__btn" onClick={e => {
                document.querySelector("#add").style.display = "none";
                document.querySelector(".black-set-bg").style.display = "none";
                setNewCompanies([]);
              }}>Закрыть</button>
              <button className="window__btn" onClick={e => {
                if (
                  Funcs.checkerLength(document.querySelector("#add-acc__name").value) &
                  Funcs.checkerLength(document.querySelector("#add-acc__number").value) &
                  Funcs.checkerLength(document.querySelector("#add-acc__email").value) &
                  Funcs.checkerLength(newCompanies)
                ) {
                  newAccount = {
                    name: document.querySelector("#add-acc__name").value,
                    number: document.querySelector("#add-acc__number").value,
                    email: document.querySelector("#add-acc__email").value,
                    companies: newCompanies,
                    active: true
                  }
                  Funcs.addDocument(newAccount, setAccounts);
                  document.querySelector("#add").style.display = "none";
                  document.querySelector(".black-set-bg").style.display = "none";
                  setNewCompanies([]);
                };
              }}>Добавить</button>
            </div>
          </div>
          <div className="add-acc__organizations">
              {
                newCompanies.map(company => {
                    return (
                      <div className="add-acc__organizations-item" id={newCompanies.length + 1}>
                        <h3 className="retired delete" onClick={e => {
                          newCompanies.forEach(t => {
                            if (t.company == e.target.parentNode.querySelector(".add-acc__inner").innerText) {
                              setNewCompanies(st => st.filter(s => s.company != e.target.parentNode.querySelector(".add-acc__inner").innerText));
                            };
                          });
                        }}>Удалить</h3>
                        <div className="add-acc__select-box">
                          <label className="add-acc__label b companies__label">Организация</label>
                          <div className="add-acc__select">
                            <span className="add-acc__inner">{company.company}</span>
                          </div>
                        </div>
                        <div className="add-acc__select-box position">
                            <label className="add-acc__label b companies__label">Должность</label>
                            <input className="add-acc__input" onKeyDown={e => {
                              if (e.keyCode === 13 & e.target.value != "") {
                                Funcs.findInCompaniesAndChange (
                                  newCompanies, setNewCompanies, e.target.parentNode.parentNode.querySelector(".add-acc__inner").innerText,
                                  e.target.value
                                );
                              };
                            }} />
                        </div>
                      </div>
                    )
                })
              }
              <h3 className="add-acc__add-title" onClick={e => {
                  Funcs.changeStateDomElement(document.querySelector("#search-add-company"), document.querySelector("#add"));
              }}>Добавить организацию</h3>
            </div>
          </div>
        </div>
        <div className="add-acc-window" id="eddit">
          <div className="add-acc__title">
            <span id="add-acc-name"></span>
            <h3 className="blocked" onClick={e => {
              accounts.forEach(acc => {
                if (acc.name == e.target.parentNode.querySelector("#add-acc-name").innerText) {
                  acc.active = !acc.active;
                  setAccounts(ac => ac.map(c => c));
                  Funcs.changeStateDomElement("", document.querySelector("#eddit"));
                  Funcs.changeStateDomElement("", document.querySelector(".black-set-bg"));
                };
              });
            }}>Заблокировать</h3>
          </div>
          <div className="add-acc__content">
            <div className="add-acc__inputs">
              <div>
                  <label className="add-acc__label">ФИО</label>
                  <input className="add-acc__input" id="eddit-set-fio" />
              </div>
              <div>
                  <label className="add-acc__label l">Номер телефона</label>
                  <input className="add-acc__input" id="eddit-set-number" />
              </div>
              <div>
                  <label className="add-acc__label b">Почта / логин</label>
                  <input className="add-acc__input"  id="eddit-set-email" />
              </div>
              <div className="window__btns add-acc__btns">
                <button className="window__btn" onClick={e => {
                  document.querySelector("#eddit").style.display = "none";
                  document.querySelector(".black-set-bg").style.display = "none";
                }}>Закрыть</button>
                <button className="window__btn" onClick={e => {
                  if (
                    Funcs.checkerLength(document.querySelector("#eddit-set-fio").value) &
                    Funcs.checkerLength(document.querySelector("#eddit-set-number").value) &
                    Funcs.checkerLength(document.querySelector("#eddit-set-email").value)
                  ) {
                    accounts.forEach(acc => {
                      if (currentAccEddit[0].name == acc.name) {
                        accounts[accounts.indexOf(acc)] = {
                          name: document.querySelector("#eddit-set-fio").value,
                          number: document.querySelector("#eddit-set-number").value,
                          email: document.querySelector("#eddit-set-email").value,
                          companies: currentAccEddit[0].companies,
                          active: acc.active
                        };

                        setAccounts(ac => ac.map(c => c));
                        document.querySelector("#eddit").style.display = "none";
                        document.querySelector(".black-set-bg").style.display = "none";
                      }
                    });
                  }
                }}>Добавить</button>
              </div>
            </div>
            <div className="add-acc__organizations">
              {
                currentAccEddit.map(mp => {
                  return mp.companies.map(company => {
                    return (
                      <div className="add-acc__organizations-item" key={company.length}>
                        <h3 className="retired delete" onClick={e => {
                          currentAccEddit[0].companies = currentAccEddit[0].companies.filter(comp => comp.company != e.target.parentNode.querySelector(".add-acc__inner").innerText);
                          setCurrentAccEddit(st => st.map(s => s));
                        }}>Удалить</h3>
                        <div className="add-acc__select-box">
                          <label className="add-acc__label b">Организация</label>
                          <div className="add-acc__select">
                            <span className="add-acc__inner">{company.company}</span>
                          </div>
                        </div>
                        <div className="add-acc__select-box position">
                          <label className="add-acc__label b">Должность</label>
                          <input className="add-acc__input"  onKeyDown={e => {
                            if (e.keyCode === 13 & e.target.value != "") {
                              currentAccEddit[0].companies.forEach(comp => {
                                if (comp.company == e.target.parentNode.parentNode.querySelector(".add-acc__inner").innerText) {
                                  comp.position = e.target.value;
                                };
                              });
                            };
                          }} />
                        </div>
                      </div>
                    )
                  })
                })
              }
              <h3 className="add-acc__add-title" onClick={e => {
                Funcs.changeStateDomElement(document.querySelector("#search-eddit-acc"), document.querySelector("#eddit"));
              }}>Добавить организацию</h3>
            </div>
          </div>
        </div>
        <div className="add__company-window" id="eddit-company">
          <div className="add__company-title">
          <span id="eddit-company-inner">ООО Джи Эф Си</span>
          <h3 className="retired delete ed" id="blocked-comp" onClick={e => {
            companies.forEach(company => {
              if (company.company == currentCompanyEddit.company) {
                company.work = !company.work;
                console.log(company)
                Funcs.changeStateDomElement("", document.querySelector("#eddit-company"));
                Funcs.changeStateDomElement("", document.querySelector(".black-set-bg"));
                setCompanies(compan => compan.map(comp => comp));
              };
            });
          }}>Заблокировать</h3>
        </div>
          <div className="add__company-content">
            <div className="add__company-fields">
              <div className="add__company-inputs">
                <div className="add__company-box">
                  <label className="add-acc__label company__label">Наименование компании</label>
                  <input className="add-acc__input" id="eddit-company-name" />
                </div>
                <div className="add__company-box">
                  <label className="add-acc__label">ИНН</label>
                  <input className="add-acc__input" id="eddit-company-inn"/>
                </div>
              </div>
              <div className="add__company-inputs">
                <div className="add__company-box">
                  <label className="add-acc__label company__label rb">Наименование банка</label>
                  <input className="add-acc__input" id="eddit-company-bank" />
                </div>
                <div className="add__company-box">
                  <label className="add-acc__label">БИК</label>
                  <input className="add-acc__input" id="eddit-company-bic" />
                </div>
              </div>
              <div className="add__company-inputs">
                <div className="add__company-box">
                  <label className="add-acc__label company__label">Корреспондентский счет</label>
                  <input className="add-acc__input" id="eddit-company-corres" />
                </div>
                <div className="add__company-box">
                  <label className="add-acc__label company__label rar">Расчетный счет</label>
                  <input className="add-acc__input" id="eddit-company-res" />
                </div>
              </div>
              <label className="add-acc__label commentary">Комментарий</label>
              <input className="add-company__commentary" id="eddit-company-commentary" />
              <div className="window__btns add-company__btns">
                <button className="window__btn  add-company__btn" onClick={e => {
                    document.querySelector(".black-set-bg").style.display = "none";
                    document.querySelector("#eddit-company").style.display = "none";
                }}>Закрыть</button>
                <button className="window__btn  add-company__btn" onClick={e => {
                    if (
                      Funcs.checkerLength(document.querySelector("#eddit-company-name").value) &
                      Funcs.checkerLength(document.querySelector("#eddit-company-bank").value) &
                      Funcs.checkerLength(document.querySelector("#eddit-company-inn").value) &
                      Funcs.checkerLength(document.querySelector("#eddit-company-corres").value) &
                      Funcs.checkerLength(document.querySelector("#eddit-company-bic").value) &
                      Funcs.checkerLength(document.querySelector("#eddit-company-res").value)
                    ) {
                      companies.forEach(company => {
                        if (company.company == currentCompanyEddit.company) {
                          companies[companies.indexOf(company)] = {
                            company: document.querySelector("#eddit-company-name").value,
                            inn: document.querySelector("#eddit-company-inn").value,
                            bank: document.querySelector("#eddit-company-bank").value,
                            bic: document.querySelector("#eddit-company-bic").value,
                            cores: document.querySelector("#eddit-company-corres").value,
                            res: document.querySelector("#eddit-company-res").value,
                            commentary: document.querySelector("#eddit-company-commentary").value,
                            work: company.work
                          }
                          setCompanies(comp => comp.map(s => s));
                          document.querySelector(".black-set-bg").style.display = "none";
                          document.querySelector("#eddit-company").style.display = "none";
                        };
                      });
                    };
                }}>Добавить</button>
              </div>
            </div>
            <div className="add__company__list-companies"></div>
          </div>
        </div>
        <div className="add__company-window" id="add-company">
          <div className="add__company-title">Создание нового предприятия</div>
          <div className="add__company-content">
            <div className="add__company-fields">
              <div className="add__company-inputs">
                <div className="add__company-box">
                  <label className="add-acc__label company__label">Наименование компании</label>
                  <input className="add-acc__input" id="add-name-company" />
                </div>
                <div className="add__company-box">
                  <label className="add-acc__label">ИНН</label>
                  <input className="add-acc__input" id="add-inn-company" />
                </div>
              </div>
              <div className="add__company-inputs">
                <div className="add__company-box">
                  <label className="add-acc__label company__label rb">Наименование банка</label>
                  <input className="add-acc__input" id="add-bank-company" />
                </div>
                <div className="add__company-box">
                  <label className="add-acc__label">БИК</label>
                  <input className="add-acc__input" id="add-bic-company" />
                </div>
              </div>
              <div className="add__company-inputs">
                <div className="add__company-box">
                  <label className="add-acc__label company__label">Корреспондентский счет</label>
                  <input className="add-acc__input" id="add-corres-company" />
                </div>
                <div className="add__company-box">
                  <label className="add-acc__label company__label rar">Расчетный счет</label>
                  <input className="add-acc__input" id="add-ress-company"  />
                </div>
              </div>
              <label className="add-acc__label commentary">Комментарий</label>
              <input className="add-company__commentary" id="add-commentary-company" />
              <div className="window__btns add-company__btns">
                <button className="window__btn  add-company__btn" onClick={e => {
                    document.querySelector(".black-set-bg").style.display = "none";
                    document.querySelector("#add-company").style.display = "none";
                }}>Закрыть</button>
                <button className="window__btn  add-company__btn" onClick={e => {
                    if (
                      Funcs.checkerLength(document.querySelector("#add-name-company").value) &
                      Funcs.checkerLength(document.querySelector("#add-inn-company").value) &
                      Funcs.checkerLength(document.querySelector("#add-bank-company").value) &
                      Funcs.checkerLength(document.querySelector("#add-bic-company").value) &
                      Funcs.checkerLength(document.querySelector("#add-ress-company").value) &
                      Funcs.checkerLength(document.querySelector("#add-corres-company").value)
                    ) {
                      let newCompany = {
                        company: document.querySelector("#add-name-company").value,
                        work: true,
                        inn: document.querySelector("#add-inn-company").value,
                        bank: document.querySelector("#add-bank-company").value,
                        bic: document.querySelector("#add-bic-company").value,
                        commentary: document.querySelector("#add-commentary-company").value,
                        corres: document.querySelector("#add-corres-company").value,
                        ress: document.querySelector("#add-ress-company").value
                      };

                      setCompanies(companies => [...companies, newCompany]);
                      setDefaultCompanies(companies => [...companies, newCompany]);
                      setCompanies(companies => companies.map(comp => comp));
                      setDefaultCompanies(companies => companies.map(comp => comp));

                      document.querySelector(".black-set-bg").style.display = "none";
                      document.querySelector("#add-company").style.display = "none";
                    }
                }}>Добавить</button>
              </div>
            </div>
            <div className="add__company__list-companies"></div>
          </div>
        </div>
        <div className="search__acc" id="search-add-company">
          <div className="search__header">
            <div className="search__header-title">
              <h3 className="search__title">Добавление предприятия</h3>
              <img src={close} onClick={e => {
                Funcs.changeStateDomElement(document.querySelector("#add"), document.querySelector("#search-add-company"));
                setCompanies(defaultCompanies);
              }} />
            </div>
            <div className="search__search-field">
              <h4 className="search__search-title">Предприятие</h4>
              <i class="fas fa-search"></i>
              <input className="search__search-input" type="text" placeholder="Введите название предприятия" onKeyDown={e => {
                setCompanies(defaultCompanies);
                if (e.keyCode === 8) setCompanies(defaultCompanies);
                if (e.keyCode === 13 & e.target.value != "") Funcs.search(e.target.value, setCompanies);
              }}/>
            </div>
          </div>
          <div className="search__accounts">
            {
              companies.map(company => {
                return (
                  <div className="search__account">
                    <h3 className="search__account-name">{company.company}</h3>
                    <span className="search__account-add" onClick={e => {
                      companies.forEach(company => {
                        if (company.company == e.target.parentNode.querySelector(".search__account-name").innerText) {
                          if (!newCompanies.find(comp => comp.company == company.company)) {
                            setNewCompanies(st => [...st, {company: company.company, work: company.work, position: ""}]);
                          };
                        };
                      });
                    }}>Добавить</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="search__acc" id="search-eddit-acc">
          <div className="search__header">
            <div className="search__header-title">
              <h3 className="search__title">Добавление предприятия</h3>
              <img src={close} onClick={e => {
                Funcs.changeStateDomElement(document.querySelector("#eddit"), document.querySelector("#search-eddit-acc"));
                setCompanies(defaultCompanies);
              }}/>
            </div>
            <div className="search__search-field eddit-i">
              <h4 className="search__search-title">Предприятие</h4>
              <i class="fas fa-search"></i>
              <input className="search__search-input" type="text" placeholder="Введите название предприятия" onKeyDown={e => {
                setCompanies(defaultCompanies);
                if (e.keyCode === 8) setCompanies(defaultCompanies);
                if (e.keyCode === 13 & e.target.value.length > 0) Funcs.search(e.target.value, setCompanies);
              }}/>
            </div>
          </div>
          <div className="search__accounts">
            {
              companies.map(comp => {
                return (
                  <div className="search__account">
                    <h3 className="search__account-name">{comp.company}</h3>
                    <span className="search__account-add" onClick={e => {
                      companies.forEach(company => {
                        if (company.company == e.target.parentNode.querySelector(".search__account-name").innerText) {
                          if (!currentAccEddit[0].companies.find(comp => comp.company == company.company)) {
                            currentAccEddit[0].companies = [...currentAccEddit[0].companies, {company: company.company, work: company.work, position: ""}];
                            setCurrentAccEddit(st => {
                              return st.map(s => {
                                  return ({...s});
                              });
                            });
                          } else {
                            currentAccEddit[0].companies.find(comp => {
                              if (comp.company == company.company) {
                                currentAccEddit[0].companies[currentAccEddit[0].companies.indexOf(comp)] = {company: company.company, work: company.work, position: ""};
                              };
                            });
                          };
                        };
                      });
                    }}>Добавить</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="container settings__container">
        <div className="settings__nav">Настройки</div>
        <div className="settings__lists">
          <div className="settings__list">
            <div className="settings__list-nav">
              <div className="settings__list-title">
                <h3 className="settings__title-text" onClick={e => {
                  document.querySelector(".black-set-bg").style.display = "block";
                  document.querySelector('#add').style.display = "block";
                  Funcs.scrollTo();
                }}>Аккаунты <i class="fas fa-plus"></i></h3>
                <span className="settings__counter">{accounts.length}</span>
              </div>
              <div className="settings__list-caterories">
                <div className="settings__list-category">ФИО</div>
                <div className="settings__list-category">Номер телефона</div>
                <div className="settings__list-category">Почта</div>
                <div className="settings__list-category">Статус</div>
              </div>
            </div>
            <div className="settings__files">
            {
                accounts.map(acc => {
                  return (
                      <div className="settings__file" onClick={e => {
                        accounts.forEach(acc => {
                          if (acc.number == e.target.parentNode.querySelector(".acc-number").innerText) {
                            setCurrentAccEddit(s => [acc]);
                            Funcs.innerText("#add-acc-name", acc.name);
                            Funcs.innerText(".blocked", acc.active ? "Заблокировать" : "Восстановить");
                            Funcs.innerText("#eddit-set-fio", acc.name, "v");
                            Funcs.innerText("#eddit-set-number", acc.number, "v");
                            Funcs.innerText("#eddit-set-email", acc.email, "v");
                            Funcs.scrollTo();
                          };
                        });
                        document.querySelector(".black-set-bg").style.display = "block";
                        document.querySelector("#eddit").style.display = "block";
                      }}>
                        <div className="settings__file-item">{acc.name}</div>
                          <div className="settings__file-item acc-number">{acc.number}</div>
                          <div className="settings__file-item">{acc.email}</div>
                        <div className="settings__file-item">{acc.active ? "Активен" : "Не активен"}</div>
                      </div>
                    )
                  }
                )
              }
            </div>
          </div>
          <div className="settings__list">
          <div className="settings__list-nav">
              <div className="settings__list-title">
                <h3 className="settings__title-text" onClick={e => {
                  document.querySelector(".black-set-bg").style.display = "block";
                  document.querySelector("#add-company").style.display = "block";
                  Funcs.scrollTo();
                }}>Предприятия <i class="fas fa-plus"></i></h3>
                <span className="settings__counter">{companies.length}</span>
              </div>
              <div className="settings__list-caterories">
                <div className="settings__list-category company__category">Название</div>
                <div className="settings__list-category company__category company-active">Статус</div>
              </div>
              </div>
            <div className="settings__files">
              { companies.map(company => {
                return (
                    <div className="settings__file" onClick={e => {
                      if (e.target.className == "settings__file") {
                        companies.forEach(company => {
                          if (company.company == e.target.querySelector(".company__file-item").innerText) {
                            setCurrentCompanyEddit(company);
                            Funcs.innerText("#eddit-company-inner", company.company);
                            Funcs.innerText("#blocked-comp", company.work ? "Заблокировать" : "Восстановить");
                            Funcs.innerText("#eddit-company-name", company.company, "v");
                            Funcs.innerText("#eddit-company-inn", company.inn, "v");
                            Funcs.innerText("#eddit-company-bank", company.bank, "v");
                            Funcs.innerText("#eddit-company-bic", company.bic, "v");
                            Funcs.innerText("#eddit-company-corres", company.corres, "v");
                            Funcs.innerText("#eddit-company-res", company.ress, "v");
                            Funcs.innerText("#eddit-company-commentary", company.commentary, "v");
                            document.querySelector("#eddit-company").style.display = "block";
                            document.querySelector(".black-set-bg").style.display = "block";
                            Funcs.scrollTo();
                          };
                        });
                      };
                    }}>
                      <div className="settings__file-item company__file-item">{company.company}</div>
                      <div className="settings__file-item company__file-item">{company.work ? "Активен" : "Не активен"}</div>
                    </div>
                    )
                  }
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
