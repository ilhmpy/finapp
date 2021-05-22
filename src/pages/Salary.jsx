import React, { useEffect, useLayoutEffect, useState } from "react";
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
        coworker: "Иванов Иван Иван", position: "Админ", hours: 0, rate: 145, procent: "15", surchange: "0", salary: "41600",
        prepaid: "0", bn: "0", med: "0", other: "0", war: "0", form: "0", fine: "0", ud: "0",
        all: "40652", accruals: [], daysOnDuty: [
          {day: "01", hours: 10}, {day: "02", hours: 0},  {day: "03", hours: 0},
          {day: "04", hours: 0},  {day: "05", hours: 0},  {day: "06", hours: 0},
          {day: "07", hours: 0},  {day: "08", hours: 0},  {day: "09", hours: 0},
          {day: "10", hours: 0},  {day: "11", hours: 0},  {day: "12", hours: 0},
          {day: "13", hours: 0},  {day: "14", hours: 0},  {day: "15", hours: 0},
          {day: "16", hours: 0},  {day: "17", hours: 0},  {day: "18", hours: 0},
          {day: "19", hours: 0},  {day: "20", hours: 0},  {day: "21", hours: 0},
          {day: "22", hours: 0},  {day: "23", hours: 0},  {day: "24", hours: 0},
          {day: "25", hours: 0},  {day: "26", hours: 0},  {day: "27", hours: 0},
          {day: "28", hours: 0},  {day: "29", hours: 0},  {day: "30", hours: 0},
          {day: "31", hours: 0},
        ], commentary: "", total: 0, paidType: "Почасовая ставка"
      },
      {
        coworker: "Иванов Иван М", position: "Админ", hours: 0, rate: "0", procent: "0", surchange: "0", salary: "41600",
        prepaid: "11000", bn: "0", med: "0", other: "0", war: "0", form: "0", fine: "0", ud: "0",
        all: "40652", accruals: [], daysOnDuty: [
          {day: "01", hours: 0},  {day: "02", hours: 0},  {day: "03", hours: 0},
          {day: "04", hours: 0},  {day: "05", hours: 0},  {day: "06", hours: 0},
          {day: "07", hours: 0},  {day: "08", hours: 0},  {day: "09", hours: 0},
          {day: "10", hours: 0},  {day: "11", hours: 0},  {day: "12", hours: 0},
          {day: "13", hours: 0},  {day: "14", hours: 0},  {day: "15", hours: 0},
          {day: "16", hours: 0},  {day: "17", hours: 0},  {day: "18", hours: 0},
          {day: "19", hours: 0},  {day: "20", hours: 0},  {day: "21", hours: 0},
          {day: "22", hours: 0},  {day: "23", hours: 0},  {day: "24", hours: 0},
          {day: "25", hours: 0},  {day: "26", hours: 0},  {day: "27", hours: 0},
          {day: "28", hours: 0},  {day: "29", hours: 0},  {day: "30", hours: 0},
          {day: "31", hours: 0},
        ], commentary: "", total: 0, paidType: "Оклад"
      },
      {
        coworker: "Иванов Иван Рав", position: "Админ", hours: "0", rate: "0", procent: "0",
        surchange: "0", salary: "41600", prepaid: "11000", bn: "0", med: "0", other: "0", war: "0",
        form: "0", fine: "20", ud: "0", all: "40652", accruals: [], daysOnDuty: [
          {day: "01", hours: 0},  {day: "02", hours: 0},  {day: "03", hours: 0},
          {day: "04", hours: 0},  {day: "05", hours: 0},  {day: "06", hours: 0},
          {day: "07", hours: 0},  {day: "08", hours: 0},  {day: "09", hours: 0},
          {day: "10", hours: 0},  {day: "11", hours: 0},  {day: "12", hours: 0},
          {day: "13", hours: 0},  {day: "14", hours: 0},  {day: "15", hours: 0},
          {day: "16", hours: 0},  {day: "17", hours: 0},  {day: "18", hours: 0},
          {day: "19", hours: 0},  {day: "20", hours: 0},  {day: "21", hours: 0},
          {day: "22", hours: 0},  {day: "23", hours: 0},  {day: "24", hours: 0},
          {day: "25", hours: 0},  {day: "26", hours: 0},  {day: "27", hours: 0},
          {day: "28", hours: 0},  {day: "29", hours: 0},  {day: "30", hours: 0},
          {day: "31", hours: 0},
        ], commentary: "", total: 0, paidType: "Посуточная ставка"
      },
      {
        coworker: "Иванов Иван Красный", position: "Админ", hours: "0", rate: "0", procent: "15",
        surchange: "0", salary: "41600", accruals: [], commentary: "", daysOnDuty: [
          {day: "01", hours: 0},  {day: "02", hours: 0},  {day: "03", hours: 0},
          {day: "04", hours: 0},  {day: "05", hours: 0},  {day: "06", hours: 0},
          {day: "07", hours: 0},  {day: "08", hours: 0},  {day: "09", hours: 0},
          {day: "10", hours: 0},  {day: "11", hours: 0},  {day: "12", hours: 0},
          {day: "13", hours: 0},  {day: "14", hours: 0},  {day: "15", hours: 0},
          {day: "16", hours: 0},  {day: "17", hours: 0},  {day: "18", hours: 0},
          {day: "19", hours: 0},  {day: "20", hours: 0},  {day: "21", hours: 0},
          {day: "22", hours: 0},  {day: "23", hours: 0},  {day: "24", hours: 0},
          {day: "25", hours: 0},  {day: "26", hours: 0},  {day: "27", hours: 0},
          {day: "28", hours: 0},  {day: "29", hours: 0},  {day: "30", hours: 0},
          {day: "31", hours: 0},
        ], prepaid: "4200", bn: "0", med: "0", other: "0", war: "0", form: "0", fine: "0",
        ud: "0",
        all: "0", accruals: [], commentary: "", total: 0, paidType: "Посуточная ставка"
      },
      {
        coworker: "Иванов Иван Лан", position: "Админ", hours: "0", rate: "0", procent: "15", surchange: "0", salary: "41600",
        prepaid: "0", bn: "0", med: "0", other: "0", war: "0", form: "0", fine: "0", ud: "0",
        all: "0", accruals: [], commentary: "", daysOnDuty: [
          {day: "01", hours: 0},  {day: "02", hours: 0},  {day: "03", hours: 0},
          {day: "04", hours: 0},  {day: "05", hours: 0},  {day: "06", hours: 0},
          {day: "07", hours: 0},  {day: "08", hours: 0},  {day: "09", hours: 0},
          {day: "10", hours: 0},  {day: "11", hours: 0},  {day: "12", hours: 0},
          {day: "13", hours: 0},  {day: "14", hours: 0},  {day: "15", hours: 0},
          {day: "16", hours: 0},  {day: "17", hours: 0},  {day: "18", hours: 0},
          {day: "19", hours: 0},  {day: "20", hours: 0},  {day: "21", hours: 0},
          {day: "22", hours: 0},  {day: "23", hours: 0},  {day: "24", hours: 0},
          {day: "25", hours: 0},  {day: "26", hours: 0},  {day: "27", hours: 0},
          {day: "28", hours: 0},  {day: "29", hours: 0},  {day: "30", hours: 0},
          {day: "31", hours: 0},
        ], total: 0, paidType: "Посуточная ставка"
      },
    ]
  );

  const [ range, setRange ] = useState([]);
  const [ openCalendar, setOpenCalendar ] = useState(false);
  const [ openWorksSalary, setOpenWorksSalary ] = useState(false);
  const [ openAllWorksSalary, setOpenAllWorksSalary ] = useState(false);
  const [ edditWorker, setEdditWorker ] = useState(false);
  const [ addCoworker, setAddCoworker ] = useState(false);
  const [ allStatistic, setAllStatistic ] = useState (
    [
      {
        HOURS: 0,
        PROCENTS: 0,
        BNS: 0,
        PREPAIDS: 0,
        SALARIES: 0,
        MEDS: 0,
        OTHERS: 0,
        FORMS: 0,
        WARS: 0,
        WARS: 0,
        UDS: 0,
        FINES: 0,
        TOTAL: 0,
        SURCHANGES: 0
      }
    ]
  );

  const [ currentEddit, setCurrentEddit ] = useState([]);
  const [ newAccruals, setNewAccruals ] = useState([]);
  const [ month, setMonth ] = useState([]);
  const [ totalCalendarHours, setTotalCalendarHours ] = useState(0);

  useEffect(() => {
    Funcs.getCurrentMonth(setMonth);
    Funcs.getAllStatistic(setAllStatistic, salary);
  }, []);

  return (
    <div className="salary">
      <div className="black_salary_bg" style={
        {
          display: openWorksSalary || openAllWorksSalary || edditWorker || addCoworker ? "block" : "none"
        }
      }>
        <div className="salary__all_works_calendar" style={{display: openAllWorksSalary ? "block" : "none"}}>
          <div className="all_works_calendar__title_box">
            <h3 className="title_box__title">Кол-во отработанных часов</h3>
            <img src={del} onClick={e => setOpenAllWorksSalary(false)} />
          </div>
          <header className="all_works_calendar__header">
              <div className="all_works_calendar__dates">
                  <div className="dates__coworkers">Сотрудники</div>
              </div>
               <div className="dates__days_numbers">
                    {
                      month.map(day => {
                        return (
                          <div className="days_numbers__number">
                            <span className="numbers__number_item">{day.day}</span>
                            <span className="numbers__number_item">{day.weekDay}</span>
                          </div>
                        )
                      })
                    }
                </div>
              <div className="dates__all_counter">Итого</div>
          </header>
          <main className="all_works_calendar__main">
            {
              salary.map(sal => {
                sal.total = 0;

                sal.daysOnDuty.forEach(day => {
                  sal.total += Number(day.hours);
                });

                sal.hours = sal.total;

                return (
                  <div className="calendar_main__coworker_card" id={salary.indexOf(sal)}>
                    <div className="coworker_card__name">{sal.coworker}</div>
                    <div className="coworker_card__inputs">
                      {
                        sal.daysOnDuty.map(duty => {
                          return (
                            <input
                               style={
                                  {
                                    display: sal.daysOnDuty.indexOf(duty) + 1 > month.length ? "none" : "block"
                                  }
                                }
                                className="coworker_card__input"
                                key={Math.random() * 10}
                                id={sal.daysOnDuty.indexOf(duty)}
                                defaultValue={duty.hours}
                                type="text"
                                maxLength="2"
                                onKeyUp={e => {
                                  if (!isNaN(e.target.value) & Funcs.checkerLength(e.target.value)) {
                                    salary[e.target.parentNode.parentNode.id].daysOnDuty[e.target.id].hours = Number(e.target.value);
                                    setSalary(sl => sl.map(s => s));
                                  };
                                }}
                            />
                          )
                        })
                      }
                    </div>
                    <div className="coworker_card__all">{sal.total}</div>
                  </div>
                )
              })
            }
          </main>
          <button className="coworker__btn" onClick={e => {
            Funcs.getAllStatistic(setAllStatistic, salary);
            setOpenAllWorksSalary(false);
          }}>Сохранить</button>
        </div>
        <div className="salary__eddit_worker"
          style={{display: edditWorker ? "block" : "none"}}
        >
          <div className="eddit_worker__title_box">
            <h3 className="eddit_worker__title">Иванов Иван Иванович</h3>
            <h3 className="retired delete" id="title_box__del"
              onClick={e => {
                //setSalary(sal => sal.filter(s => sal.indexOf(s) != e.target.parentNode.parentNode.id));
                salary.splice(e.target.parentNode.parentNode.id, 1);
                setSalary(sl => sl.map(s => s));
                Funcs.getAllStatistic(setAllStatistic, salary);
                setAllStatistic(all => all.map(al => al));
                setEdditWorker(false);;
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
                          setNewAccruals(s => s.filter(t => s.indexOf(t) != s.indexOf(accrual)));
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
                      commentary:  document.querySelector(".rec__commentary").value,
                      total: slItem.total,
                      daysOnDuty: slItem.daysOnDuty
                    };
                  };
                });
                Funcs.getAllStatistic(setAllStatistic, salary);
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
          <header className="add_coworker__header">
              <div className="add_coworker__title_box">
                <h3 className="ad_coworker__title">Добавление сотрудников</h3>
                <img src={del} onClick={e => setAddCoworker(false)} />
              </div>
              <div className="add_coworker__search">
                <h3 className="add_coworker__search_title">Сотрудник</h3>
                <i class="fas fa-search"></i>
                <input className="add_coworker__search_input" type="text" placeholder="Введите фамилию сотрудника" onChange={e => {
                  if (e.keyCode === 8) {

                  } else {

                  }
                }} />
              </div>
          </header>
          <div className="add_coworker__accs">
            <div className="add_coworker__accs_wrap">
              <div className="add_coworker__acc_card">
                <h3 className="add_coworker__acc_name">Иванов Иван Иванович</h3>
                <h3 className="add_coworker__acc_add">Добавить</h3>
              </div>
            </div>
          </div>
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
            <i className="far fa-calendar-alt" id="calendar" onClick={e => setOpenAllWorksSalary(true)}></i>
            <img src={add} alt="add" onClick={e => {
              setAddCoworker(true);
            }} />
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
                <h3 className="salary__all_item" id="item_zp">{allStatistic[0].HOURS}</h3>
            </div>
            <div className="salary__all_items">
                <h3 className="salary__all_item">{allStatistic[0].PROCENTS}</h3>
                <h3 className="salary__all_item">{allStatistic[0].SURCHANGES}</h3>
                <h3 className="salary__all_item">{allStatistic[0].SALARIES}</h3>
                <h3 className="salary__all_item">{allStatistic[0].PREPAIDS}</h3>
                <h3 className="salary__all_item">{allStatistic[0].BNS}</h3>
                <h3 className="salary__all_item">{allStatistic[0].MEDS}</h3>
                <h3 className="salary__all_item">{allStatistic[0].OTHERS}</h3>
                <h3 className="salary__all_item">{allStatistic[0].WARS}</h3>
                <h3 className="salary__all_item">{allStatistic[0].FORMS}</h3>
                <h3 className="salary__all_item">{allStatistic[0].UDS}</h3>
                <h3 className="salary__all_item">{allStatistic[0].FINES}</h3>
                <h3 className="salary__all_item" id="items__all">{allStatistic[0].TOTAL}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
