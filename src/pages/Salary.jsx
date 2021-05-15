import React, { useEffect, useState } from "react";
import Functions from "./Functions.js";
import CalendarModal from "../components/Calendar.jsx";
import "./pagesStyles/main.css";
import "./pagesStyles/salary.css";
import add from "../img/imports/user.svg";
import file from "./pagesStyles/img/file.svg";
import eddit from "./pagesStyles/img/file-icon.svg";
import del from "./pagesStyles/img/delete.svg";

const Funcs = new Functions();

export default function Salary() {
  const [ salary, setSalary ] = useState(
    [
      {
        coworker: "Иванов Иван Плынк", position: "Админ", hours: "178", rate: "145", procent: "15", surchange: "1000", salary: "41 600",
        prepaid: "11 000", bn: "4 368", med: "200", other: "120", war: "13", form: "228", fine: "20", ud: "958", all: "40 652"
      },
      {
        coworker: "Иванов Иван Лалыга", position: "Админ", hours: "178", rate: "145", procent: "15", surchange: "1000", salary: "41 600",
        prepaid: "11 000", bn: "4 368", med: "200", other: "120", war: "13", form: "228", fine: "20", ud: "958", all: "40 652"
      },
      {
        coworker: "Иванов Иван Равлык", position: "Админ", hours: "178", rate: "145", procent: "15", surchange: "1000", salary: "41 600",
        prepaid: "11 000", bn: "4 368", med: "200", other: "120", war: "13", form: "228", fine: "20", ud: "958", all: "40 652"
      },
      {
        coworker: "Иванов Иван Красный", position: "Админ", hours: "178", rate: "145", procent: "15", surchange: "1000", salary: "41 600",
        prepaid: "11 000", bn: "4 368", med: "200", other: "120", war: "13", form: "228", fine: "20", ud: "958", all: "40 652"
      },
      {
        coworker: "Иванов Иван Бляха", position: "Админ", hours: "178", rate: "145", procent: "15", surchange: "1000", salary: "41 600",
        prepaid: "11 000", bn: "4 368", med: "200", other: "120", war: "13", form: "228", fine: "20", ud: "958", all: "40 652"
      },
    ]
  );
  const [ defaultSalary, setDefaultSalary ] = useState([]);
  const [ range, setRange ] = useState([]);
  const [ openCalendar, setOpenCalendar ] = useState(false);
  const [ openWorksSalary, setOpenWorksSalary ] = useState([]);
  const [ openAllWorksSalary, setOpenAllWorksSalary ] = useState([]);

  const [ allStatistics, setAllStatistics ] = useState(
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


  return (
    <div className="salary">
      <div className="black_salary_bg">
        <div className="salary__works_calendar" id="works_calendar">
          <div className="works_calendar__title_box">
            <h3 className="works_calendar__title">Иванов Иван Иванович</h3>
            <img src={del} alt="delete" onClick={e => {
                Funcs.changeStateDomElement("", document.querySelector(".black_salary_bg"));
                Funcs.changeStateDomElement("", document.querySelector("#works_calendar"));
            }} />
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
                <div className="salary__cards_card" key={salary.length} id={salary.indexOf(sl)}>
                  <div className="cards_card__item">{sl.coworker}</div>
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
                  <div className="cards_card__item">{sl.fine}</div>
                  <div className="cards_card__item">{sl.ud}</div>
                  <div className="cards_card__item">
                      {sl.all} <img src={eddit} onClick={e => {
                        Funcs.changeStateDomElement(document.querySelector("#works_calendar"));
                        Funcs.changeStateDomElement(document.querySelector(".black_salary_bg"));
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
