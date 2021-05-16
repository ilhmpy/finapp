import React, { useEffect, useState } from "react";
import Functions from "./Functions.js";
import CalendarModal from "../components/Calendar.jsx";
import "./pagesStyles/main.css";
import "./pagesStyles/salary.css";
import add from "../img/imports/user.svg";
import file from "./pagesStyles/img/file.svg";
import eddit from "./pagesStyles/img/file-icon.svg";
import del from "./pagesStyles/img/delete.svg";
import pl from "./pagesStyles/img/arrow_down.svg";
import twriter from "./pagesStyles/img/typewriter.svg";

const Funcs = new Functions();

export default function Salary() {
  const [ salary, setSalary ] = useState(
    [
      {
        coworker: "Иванов Иван Иван", position: "Админ", hours: "0", rate: "145", procent: "15", surchange: "0", salary: "41600",
        prepaid: "0", bn: "0", med: "0", other: "0", war: "0", form: "0", fine: "0", ud: "0",
        all: "40652", accruals: [], commentary: ""
      },
      {
        coworker: "Иванов Иван М", position: "Админ", hours: "0", rate: "0", procent: "0", surchange: "0", salary: "41600",
        prepaid: "11000", bn: "0", med: "0", other: "0", war: "0", form: "0", fine: "0", ud: "0",
        all: "40652", accruals: [], commentary: ""
      },
      {
        coworker: "Иванов Иван Рав", position: "Админ", hours: "0", rate: "0", procent: "0",
        surchange: "0", salary: "41600", prepaid: "11000", bn: "0", med: "0", other: "0", war: "0",
        form: "0", fine: "20", ud: "0", all: "40652", accruals: [], commentary: ""
      },
      {
        coworker: "Иванов Иван Красный", position: "Админ", hours: "0", rate: "0", procent: "15",
        surchange: "0", salary: "41600", accruals: [], commentary: "", prepaid: "4200", bn: "0", med: "0", other: "0", war: "0", form: "0", fine: "0",
        ud: "0",
        all: "0", accruals: [], commentary: ""
      },
      {
        coworker: "Иванов Иван Лан", position: "Админ", hours: "0", rate: "0", procent: "15", surchange: "0", salary: "41600",
        prepaid: "0", bn: "0", med: "0", other: "0", war: "0", form: "0", fine: "0", ud: "0",
        all: "0", accruals: [], commentary: ""
      },
    ]
  );

  const [ range, setRange ] = useState([]);
  const [ openCalendar, setOpenCalendar ] = useState(false);
  const [ openWorksSalary, setOpenWorksSalary ] = useState(false);
  const [ openAllWorksSalary, setOpenAllWorksSalary ] = useState(false);
  const [ edditWorker, setEdditWorker ] = useState(false);
  const [ addCoworker, setAddCoworker ] = useState(true);
  const [ allStatistics, setAllStatistics ] = useState (
    [
      {
         HOURS: null,
         PROCENTS: null,
         BNS: null,
         PREPAIDS: null,
         SALARYS: null,
         MEDS: null,
         OTHERS: null,
         WARS: null,
         FORMS: null,
         UDS: null,
         FINES: null,
         ALLS: null
      }
    ]
  );

  const [ currentEddit, setCurrentEddit ] = useState([]);
  const [ newAccruals, setNewAccruals ] = useState([]);

  return (
    <div className="salary">
      <div className="black_salary_bg" style={
        {
          display: openWorksSalary || openAllWorksSalary || edditWorker || addCoworker ? "block" : "none"
        }
      }>
        <div className="salary__works_calendar" id="works_calendar"
          style={
            {
              display: openWorksSalary ? "block" : "none"
            }
          }
        >
          <div className="works_calendar__title_box">
            <h3 className="works_calendar__title">Иванов Иван Иванович</h3>
            <img src={del} alt="delete" onClick={e => setOpenWorksSalary(false)} />
          </div>
          <div className="works_calendar__calendar_box">
            <div className="works_calendar__calendar_card">
              <div className="calendar_card__date">
                <span className="card__date_item">1</span>
                <span className="card__date_item">Пт</span>
              </div>
              <input className="calendar_card__input dates_inputs" type="text" placeholder="-" />
            </div>
            <div className="works_calendar__calendar_all">
              <div className="calendar_all__all_item">Итого</div>
              <div className="calendar_all__all_item">80</div>
            </div>
          </div>
          <button className="works_calendar__btn">Сохранить</button>
        </div>
        <div className="salary__all_works_calendar" style={{display: openAllWorksSalary ? "block" : "none"}}>
          <div className="all_works_calendar__title_box">
            <h3 className="title_box__title">Кол-во отработанных часов</h3>
            <img src={del} />
          </div>
          <div className="all_works_calendar__wrap">
            <div className="all_works_calendar__dates">
              <div className="dates__coworkers">Сотрудники</div>
            </div>
            <div className="dates__days_numbers">
              <div className="days_numbers__number">
                <span className="numbers__number_item">1</span>
                <span className="numbers__number_item">Пн</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">2</span>
                <span className="numbers__number_item">Вт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">3</span>
                <span className="numbers__number_item">Ср</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">4</span>
                <span className="numbers__number_item">Чт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">5</span>
                <span className="numbers__number_item">Пт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">6</span>
                <span className="numbers__number_item">Сб</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">7</span>
                <span className="numbers__number_item">Вс</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">8</span>
                <span className="numbers__number_item">Пн</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">9</span>
                <span className="numbers__number_item">Вт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">10</span>
                <span className="numbers__number_item">Ср</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">11</span>
                <span className="numbers__number_item">Чт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">12</span>
                <span className="numbers__number_item">Пт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">13</span>
                <span className="numbers__number_item">Сб</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">14</span>
                <span className="numbers__number_item">Пн</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">15</span>
                <span className="numbers__number_item">Вт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">16</span>
                <span className="numbers__number_item">Ср</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">17</span>
                <span className="numbers__number_item">Чт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">18</span>
                <span className="numbers__number_item">Пт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">19</span>
                <span className="numbers__number_item">Сб</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">20</span>
                <span className="numbers__number_item">Пн</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">21</span>
                <span className="numbers__number_item">Вт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">22</span>
                <span className="numbers__number_item">Ср</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">23</span>
                <span className="numbers__number_item">Чт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">24</span>
                <span className="numbers__number_item">Пт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">26</span>
                <span className="numbers__number_item">Сб</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">27</span>
                <span className="numbers__number_item">Пн</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">28</span>
                <span className="numbers__number_item">Вт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">29</span>
                <span className="numbers__number_item">Ср</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">30</span>
                <span className="numbers__number_item">Чт</span>
              </div>
              <div className="days_numbers__number">
                <span className="numbers__number_item">31</span>
                <span className="numbers__number_item">Пт</span>
              </div>
            </div>
            <div className="dates__all_counter">Итого</div>
          </div>
        </div>
        <div className="salary__eddit_worker"
          style={{style: edditWorker ? "block" : "none"}}
        >
          <div className="eddit_worker__title_box">
            <h3 className="eddit_worker__title">Иванов Иван Иванович</h3>
            <h3 className="retired delete" id="title_box__del"
              onClick={e => {
                setSalary(sal => sal.filter(s => sal.indexOf(s) != e.target.parentNode.parentNode.id));
                setSalary(sl => sl.map(s => s));
                setEdditWorker(false);
              }}
            >Удалить</h3>
          </div>
          <div className="eddit_worker__rec">
            <div className="rec__cards">
              {
                newAccruals.map(cr => {
                  return (
                    <div className="rec__card" key={newAccruals.indexOf(cr)} id={newAccruals.indexOf(cr)}>
                      <h3 className="retired delete rec__card_delete"
                        onClick={e => {
                          let accrual = newAccruals[e.target.parentNode.id];
                          if (accrual.violation == "Штраф" & Funcs.checkerLength(accrual.violation)) {
                            salary[salary.indexOf(currentEddit)].fine = Number(salary[salary.indexOf(currentEddit)].fine) - Number(e.target.parentNode.querySelector(".sum").value);
                            if (Number(salary[salary.indexOf(currentEddit)].fine) < 0) {
                              salary[salary.indexOf(currentEddit)].fine = 0;
                            };
                          } else if (accrual.violation == "Доплата") {
                            salary[salary.indexOf(currentEddit)].surchange = Number(salary[salary.indexOf(currentEddit)].surchange) - Number(e.target.parentNode.querySelector(".sum").value)
                            if (Number(salary[salary.indexOf(currentEddit)].surchange) < 0) {
                              salary[salary.indexOf(currentEddit)].surchange = 0;
                            };
                          };
                          setNewAccruals(s => s.filter(t => s.indexOf(t) != newAccruals.indexOf(accrual)));
                          setSalary(sal => sal.map(sl => sl));
                          setNewAccruals(d => d.map(s => s));

                        }}
                      >Удалить</h3>
                      <div className="rec__card_box">
                        <label className="card__label">Дата</label>
                        <input className="card__input" defaultValue={cr.date} type="text" maxLength="10" onKeyUp={e => {
                          newAccruals[e.target.parentNode.parentNode.id].date = e.target.value;
                        }} />
                      </div>
                      <div className="rec__card_box">
                        <label className="card__label label_type">Вид начисления</label>
                        <div className="card__type_select" onMouseOver={e => {
                          document.querySelectorAll(".type_select__types").forEach(d => Funcs.changeStateDomElement("", d));
                          if (e.target.className == "card__type_select") {
                            Funcs.changeStateDomElement(e.target.parentNode.querySelector(".type_select__types"));
                          };
                        }}>
                          <h3 className="type_select__inner">Штраф</h3>
                          <img src={pl} /></div>
                          <div className="type_select__types"
                            onMouseLeave={e => {
                              if (e.target.className == "type_select__types") {
                                e.target.style.display = "none"
                              } else e.target.parentNode.style.display = "none";
                            }}
                            onClick={e => {
                              if (e.target.className == "types_select__type") {
                                e.target.parentNode.parentNode.querySelector(".type_select__inner").innerText = e.target.innerText;
                                newAccruals[e.target.parentNode.parentNode.parentNode.id].violation = e.target.innerText;
                              }
                            }}
                          >
                            <div className="types_select__type">Штраф</div>
                            <div className="types_select__type">Доплата</div>
                          </div>
                      </div>
                      <div className="rec__card_box">
                        <label className="card__label">Сумма</label>
                        <input className="card__input sum" defaultValue={cr.sum} name="sum" type="text" maxLength="30" onKeyUp={e => {
                          newAccruals[e.target.parentNode.parentNode.id].sum = e.target.value;
                        }} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <h3 className="rec__add"
            onClick={e => {
              setNewAccruals(acr => [...acr, { date: Funcs.getDate(), violation: "Штраф", sum: 0}]);
              setNewAccruals(acr => acr.map(c => c));
            }}
          >Добавить начисление</h3>
          <label className="card__label comment__label">Комментарий</label>
          <textarea className="rec__commentary" type="text" maxlength="1000"></textarea>
          <span style={{display: "flex"}}>
            <img src={twriter} id="tw" /><h3 className="rec__add">Распечатать зарплатный лист</h3>
          </span>
          <div className="rec__btns">
            <button className="rec__btn" onClick={e => setEdditWorker(false)}>Закрыть</button>
            <button className="rec__btn"
              onClick={e => {
                let fine = 0;
                let surchange = 0;

                newAccruals.forEach(acr => {
                  if (acr.violation == "Штраф") fine += Number(acr.sum);
                  else surchange += Number(acr.sum);
                });

                salary.forEach(sl => {
                  if (salary.indexOf(sl) == salary.indexOf(currentEddit)) {
                    let slItem = salary[salary.indexOf(sl)];
                    let all = Number(slItem.salary) - fine + surchange + Number(slItem.bn) + Number(slItem.war);
                    salary[salary.indexOf(sl)] = {
                      coworker: slItem.coworker, position: slItem.position,
                      hours: slItem.hours, rate: slItem.rate, procent: slItem.procent,
                      surchange: surchange,
                      salary: slItem.salary, prepaid: slItem.prepaid,
                      bn: slItem.bn, med: slItem.med, other: slItem.other,
                      war: slItem.war, form: slItem.form,
                      fine: fine,
                      ud: slItem.ud,
                      all: all < 0 ? 0 : all,
                      accruals: newAccruals,
                      commentary:  document.querySelector(".rec__commentary").value
                    };
                  };
                });

                setSalary(sl => sl.map(s => s));
                setEdditWorker(false);
              }}
            >Сохранить</button>
          </div>
        </div>
        <div className="salary__add_coworker"
          style={
            {
              display: addCoworker ? "block" : "none"
            }
          }
        >
          <div className="add_coworker__title_box"></div>
        </div>
      </div>
      <div className="container salary__container">
        <div className="salary__header">
          <div className="salary__header_title">
            <h3 className="header_title__text">Зарплаты</h3>
            <div className="header_title__btns"
              onClick={e => {
                if (e.target.className == "header_title__btn") {
                  document.querySelectorAll(".header_title__btn").forEach(btn => btn.classList.remove("activeBtn"));
                  e.target.classList.add("activeBtn");
                };
              }}
            >
              <button className="header_title__btn activeBtn">13.05.2021</button>
              <button className="header_title__btn">14.05.2021</button>
            </div>
            <img src={add} alt="add" />
          </div>
          <div className="salary__header_categories">
            <div className="salary__header_category">Сотрудник <img src={file} /></div>
            <div className="salary__header_category">Должность <img src={file} /></div>
            <div className="salary__header_category">Часы <img src={file} /></div>
            <div className="salary__header_category">Ставка <img src={file} /></div>
            <div className="salary__header_category">% <img src={file} /></div>
            <div className="salary__header_category">Доплата <img src={file} /></div>
            <div className="salary__header_category">ЗП <img src={file} /></div>
            <div className="salary__header_category">Аванс <img src={file} /></div>
            <div className="salary__header_category">ЗП безнал <img src={file} /></div>
            <div className="salary__header_category">Мед кн <img src={file} /></div>
            <div className="salary__header_category">Иное <img src={file} /></div>
            <div className="salary__header_category">Бой <img src={file} /></div>
            <div className="salary__header_category">Форма <img src={file} /></div>
            <div className="salary__header_category">Удерж. по сверкам <img src={file} /></div>
            <div className="salary__header_category">Штраф <img src={file} /></div>
            <div className="salary__header_category">Итого <img src={file} /></div>
          </div>
        </div>
        <div className="salary__cards">
          {
            salary.map(sl => {
              return (
                <div className="salary__cards_card" key={salary.indexOf(sl)} id={salary.indexOf(sl)}>
                  <div className="cards_card__item card__item_name">{sl.coworker}</div>
                  <div className="cards_card__item">{sl.position}</div>
                  <div className="cards_card__item">{sl.hours}</div>
                  <div className="cards_card__item">{sl.rate}</div>
                  <div className="cards_card__item">{sl.procent}</div>
                  <div className="cards_card__item">{sl.surchange}</div>
                  <div className="cards_card__item">{sl.salary}</div>
                  <div className="cards_card__item">{sl.prepaid}</div>
                  <div className="cards_card__item">{sl.bn}</div>
                  <div className="cards_card__item">{sl.med}</div>
                  <div className="cards_card__item">{sl.other}</div>
                  <div className="cards_card__item">{sl.war}</div>
                  <div className="cards_card__item">{sl.form}</div>
                  <div className="cards_card__item">{sl.ud}</div>
                  <div className="cards_card__item">{sl.fine}</div>
                  <div className="cards_card__item">
                      {sl.all} <img src={eddit} onClick={e => {
                        salary.forEach(ls => {
                          if (ls.coworker == e.target.parentNode.parentNode.querySelector(".card__item_name").innerText) {
                            setCurrentEddit(ls);
                            setNewAccruals(ls.accruals);
                            Funcs.innerText(".eddit_worker__title", ls.coworker);
                            Funcs.innerText(".rec__commentary", ls.commentary, "v");
                            document.querySelector(".salary__eddit_worker").id = salary.indexOf(ls);
                            setEdditWorker(true);
                          };
                        });
                        Funcs.scrollTo();
                      }} />
                  </div>
                </div>
              )
            })
          }
          <div className="salary__all">
            <div className="salary__all_title_box">
                <h3 className="salary__all_title">Итого:</h3>
                <h3 className="salary__all_item" id="item_zp">2000</h3>
            </div>
            <div className="salary__all_items">
                <h3 className="salary__all_item">15</h3>
                <h3 className="salary__all_item">1000</h3>
                <h3 className="salary__all_item">41610</h3>
                <h3 className="salary__all_item">11000</h3>
                <h3 className="salary__all_item">4368</h3>
                <h3 className="salary__all_item">958</h3>
                <h3 className="salary__all_item">123</h3>
                <h3 className="salary__all_item">12</h3>
                <h3 className="salary__all_item">554</h3>
                <h3 className="salary__all_item">91</h3>
                <h3 className="salary__all_item">12</h3>
                <h3 className="salary__all_item" id="items__all">320</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
