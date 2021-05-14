import user from "../img/imports/user.svg";
import edit from "../img/imports/edit_icon.svg";
import React, { useState, useEffect } from "react";
import addScanIcon from "../img/imports/add_scan_icon.svg";
import addIcon from "../img/imports/add_icon.svg";
import redIcon from "./pagesStyles/img/redICON.svg";
import Functions from "./Functions.js";
import arrow_down from "./pagesStyles/img/arrow_down.svg";
import pl from "./pagesStyles/img/file.svg";
import "./pagesStyles/main.css";
import "./pagesStyles/budget.css";
import CalendarModal from "../components/Calendar.jsx";

const Funcs = new Functions();

let parentId;
let checkedId;
let newIncome;
let dateIndex;
let edditIncome;
let newExpense;
let edditExpense;

function createData(name, type, comment, id) {
  return { name, type, comment, id };
}

export default function Budget() {
  const [ token, setToken ] = React.useState("");
  const [ rows, setRows ] = React.useState([]);
  const [ user, setUser ] = useState([]);

  const [ currentIncomeEddit, setCurrentIncomeEddit ] = useState([]);
  const [ currentExpenseEddit, setCurrentExpenseEddit ] = useState([]);

  const [ incomeChecker, setIncomeChecker ] = useState(false);
  const [ expenseChecker, setExpenseChecker ] = useState(false);
  const [ comsumptionChecker, setConsumptionChecker ] = useState(false);

  const [ accept, setAccept ] = useState(false);

  const [ datesRange, setDatesRange ] = useState([]);

  const [ display, setDisplay ] = useState(false);

  const [ budget, setBudget ] = useState([
    {date: "10.05.2021", income: [
      {contragent: "В-отчет", sum: "301.00", description: "Z-отчёт по смене", contributed: "Иванов И.И", checked: false},
      {contragent: "В-отчет", sum: "204.00", description: "Z-отчёт по смене", contributed: "Иванов И.А", checked: false},
      {contragent: "В-отчет", sum: "104.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
      {contragent: "Z-отчет", sum: "303.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
    ], expense: [
      {contragent: "Z-отчет", sum: "102.00", description: "Z-отчёт по смене", contributed: "Иванов И.И", checked: false},
      {contragent: "Z-отчет", sum: "201.00", description: "Z-отчёт по смене", contributed: "Иванов И.А", checked: false},
      {contragent: "Z-отчет", sum: "503.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
      {contragent: "Z-отчет", sum: "603.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
    ]},

    {date: "11.03.2021", income: [
      {contragent: "В-отчет", sum: "804.00", description: "Z-отчёт по смене", contributed: "Иванов И.И", checked: false},
      {contragent: "В-отчет", sum: "904.00", description: "Z-отчёт по смене", contributed: "Иванов И.А", checked: false},
      {contragent: "В-отчет", sum: "110.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
      {contragent: "Z-отчет", sum: "433.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
    ], expense: [
      {contragent: "Z-отчет", sum: "453.00", description: "Z-отчёт по смене", contributed: "Иванов И.И", checked: false},
      {contragent: "Z-отчет", sum: "481.00", description: "Z-отчёт по смене", contributed: "Иванов И.А", checked: false},
      {contragent: "Z-отчет", sum: "520.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
      {contragent: "Z-отчет", sum: "621.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
    ]}
  ]);

  const [ defaultBudget, setDefaultBudget ] = useState([
    {date: "10.05.2021", income: [
      {contragent: "В-отчет", sum: "301.00", description: "Z-отчёт по смене", contributed: "Иванов И.И", checked: false},
      {contragent: "В-отчет", sum: "204.00", description: "Z-отчёт по смене", contributed: "Иванов И.А", checked: false},
      {contragent: "В-отчет", sum: "104.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
      {contragent: "Z-отчет", sum: "303.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
    ], expense: [
      {contragent: "Z-отчет", sum: "102.00", description: "Z-отчёт по смене", contributed: "Иванов И.И", checked: false},
      {contragent: "Z-отчет", sum: "201.00", description: "Z-отчёт по смене", contributed: "Иванов И.А", checked: false},
      {contragent: "Z-отчет", sum: "503.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
      {contragent: "Z-отчет", sum: "603.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
    ]},

    {date: "11.03.2021", income: [
      {contragent: "В-отчет", sum: "804.00", description: "Z-отчёт по смене", contributed: "Иванов И.И", checked: false},
      {contragent: "В-отчет", sum: "904.00", description: "Z-отчёт по смене", contributed: "Иванов И.А", checked: false},
      {contragent: "В-отчет", sum: "110.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
      {contragent: "Z-отчет", sum: "433.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
    ], expense: [
      {contragent: "Z-отчет", sum: "453.00", description: "Z-отчёт по смене", contributed: "Иванов И.И", checked: false},
      {contragent: "Z-отчет", sum: "481.00", description: "Z-отчёт по смене", contributed: "Иванов И.А", checked: false},
      {contragent: "Z-отчет", sum: "520.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
      {contragent: "Z-отчет", sum: "621.00", description: "Z-отчёт по смене", contributed: "Иванов И.В", checked: false},
    ]}
  ]);

  useEffect(() => {
    async function getUser() {
      let token = localStorage.getItem("token");
      const request = await fetch("http://127.0.0.1:8000/api/accounts/auth/get-user", {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`
        }
      });

      let res = await request.json();
      if (request.status == 200) {
        setUser(res);
        console.log(res);
      } else {
        console.error(res);
      }
    };
    getUser();
  }, []);

  return (
    <div className="budget">
      <div className="black-bd-bg">
        <div className="add_income" id="add-income">
          <div className="add_income__title_box">
            <h3 className="">Добавить доход</h3>
          </div>
          <div className="add_income__inputs">
            <div className="add_income__inputs_box">
              <label className="add_income__label">Дата</label>
              <input className="add_income__input income_inputs" type="text" id="add-income-date" />
            </div>
            <div className="add_income__inputs_box">
              <label className="add_income__label">Сумма</label>
              <input className="add_income__input income_inputs" type="text" id="add-income-sum" />
            </div>
          </div>
          <label className="add_income__label">Категория</label>
          <div className="add_income__select"
            onMouseOver={e => Funcs.changeStateDomElement(document.querySelector(".add_income__select_items"))}
          >
            <h3 className="add_income__select_inner" id="add-income-inner">Аванс за мероприятие</h3><img src={arrow_down} />
            <div className="add_income__select_items" id="add_income__items"
              onMouseLeave={e =>  Funcs.changeStateDomElement("", document.querySelector(".add_income__select_items"))}
              onClick={e => {
                if (e.target.className == "add_income__select_item") {
                  Funcs.innerText("#add-income-inner", e.target.innerText);
                };
              }}
            >
              <div className="add_income__select_item">Аванс за мероприятие</div>
              <div className="add_income__select_item">Довнесение</div>
              <div className="add_income__select_item">Другое</div>
            </div>
          </div>
          <label className="add_income__label" id="add_income-description-lab">Описание</label>
          <input className="add_income__input_description income_inputs" type="text" id="add-income-description"  />
          <label className="window__checker add_income__checker">
            <span className="check" onClick={e => {
              if (e.target.className == "check") e.target.classList.add("active");
              else if (e.target.className == "check active") e.target.classList.remove("active");
              setAccept(!accept);
            }}></span>
            <h3 className="title">Сразу подтвердить</h3>
          </label>
          <div className="add_income__btns">
            <button className="add_income__btn" onClick={e => {
              Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
              Funcs.changeStateDomElement("", document.querySelector("#add-income"));
            }}>Закрыть</button>
            <button className="add_income__btn" onClick={e => {
              Funcs.clearAdd(".income_inputs");
              if (
                Funcs.checkerLength(document.querySelector("#add-income-sum").value) &
                Funcs.checkerLength(document.querySelector("#add-income-description").value) &
                Funcs.checkerLength(document.querySelector("#add-income-date").value)
              ) {

                newIncome = {
                  contragent: document.querySelector("#add-income-inner").innerText,
                  sum: document.querySelector("#add-income-sum").value,
                  description: document.querySelector("#add-income-description").value,
                  contributed: user.full_name,
                  checked: accept
                }

                if (budget.find(bd => {
                  if (bd.date == document.querySelector("#add-income-date").value) {
                    dateIndex = budget.indexOf(bd);
                    return true;
                  }
                })) budget[dateIndex].income = [...budget[dateIndex].income, newIncome];

                else setBudget(bd => [...budget, {date: document.querySelector("#add-income-date").value, income: [newIncome], expense: []}]);

                setBudget(bd => bd.map(s => s));
                Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
                Funcs.changeStateDomElement("", document.querySelector("#add-income"));
              }
            }}>Добавить</button>
          </div>
        </div>
        <div className="add_income" id="eddit-income">
          <div className="add_income__title_box">
            <h3 className="">Доход</h3>
            <h3 className="retired delete" onClick={e => {
              budget.forEach(bd => bd.income.forEach(d => {
                if (bd.income.indexOf(d) == bd.income.indexOf(currentIncomeEddit)) bd.income.splice(bd.income.indexOf(currentIncomeEddit), 1);
              }));
              setBudget(bd => bd.map(s => s));
              Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
              Funcs.changeStateDomElement("", document.querySelector("#eddit-income"));
            }}>Удалить</h3>
          </div>
          <div className="add_income__inputs">
            <div className="add_income__inputs_box">
              <label className="add_income__label">Дата</label>
              <input className="add_income__input eddit_income_inputs" type="text" id="eddit-income-date" />
            </div>
            <div className="add_income__inputs_box">
              <label className="add_income__label">Сумма</label>
              <input className="add_income__input eddit_income_inputs" type="text" id="eddit-income-sum" />
            </div>
          </div>
          <label className="add_income__label">Категория</label>
          <div className="add_income__select"
            onMouseOver={e => Funcs.changeStateDomElement(document.querySelector(".eddit__select-items"))}
          >
            <h3 className="add_income__select_inner" id="eddit-income-inner">Аванс за мероприятие</h3><img src={arrow_down} />
            <div className="add_income__select_items eddit__select-items" id="add_income__items"
              onMouseLeave={e =>  Funcs.changeStateDomElement("", document.querySelector(".eddit__select-items"))}
              onClick={e => {
                if (e.target.className == "add_income__select_item") {
                  Funcs.innerText("#eddit-income-inner", e.target.innerText);
                };
              }}
            >
                <div className="add_income__select_item">Аванс за мероприятие</div>
                <div className="add_income__select_item">Довнесение</div>
                <div className="add_income__select_item">Другое</div>
            </div>
          </div>
          <label className="add_income__label" id="add_income-description-lab">Описание</label>
          <input className="add_income__input_description eddit_income_inputs" type="text" id="eddit-income-description"  />
          <label className="window__checker add_income__checker">
            <span className="check" onClick={e => {
              if (e.target.className == "check") e.target.classList.add("active");
              else if (e.target.className == "check active") e.target.classList.remove("active");
              setAccept(!accept);
            }}></span>
            <h3 className="title">Сразу подтвердить</h3>
          </label>
          <div className="add_income__btns">
            <button className="add_income__btn" onClick={e => {
              Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
              Funcs.changeStateDomElement("", document.querySelector("#eddit-income"));
            }}>Закрыть</button>
            <button className="add_income__btn" onClick={e => {
              Funcs.clearAdd(".eddit_income_inputs");
              if (
                Funcs.checkerLength(document.querySelector("#eddit-income-sum").value) &
                Funcs.checkerLength(document.querySelector("#eddit-income-description").value)
              ) {
                edditIncome = {
                  contragent: document.querySelector("#eddit-income-inner").innerText,
                  sum: document.querySelector("#eddit-income-sum").value,
                  description: document.querySelector("#eddit-income-description").value,
                  contributed: user.full_name,
                  checked: accept
                }

                budget.forEach(bd => bd.income.forEach(d => {
                  if (bd.income.indexOf(d) == bd.income.indexOf(currentIncomeEddit)) {
                    budget[budget.indexOf(bd)].income[bd.income.indexOf(d)] = edditIncome;
                  }
                }));

                setBudget(bd => bd.map(s => s));
                Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
                Funcs.changeStateDomElement("", document.querySelector("#eddit-income"));
              }
            }}>Сохранить</button>
          </div>
        </div>
        <div className="add_income" id="add_expense">
          <div className="add_income__title_box">
            <h3 className="">Добавить расход</h3>
          </div>
          <div className="add_income__inputs">
            <div className="add_income__inputs_box">
              <label className="add_income__label">Дата</label>
              <input className="add_income__input expense_inputs" type="text" id="add-expense-date" />
            </div>
            <div className="add_income__inputs_box">
              <label className="add_income__label">Сумма</label>
              <input className="add_income__input expense_inputs" type="text" id="add-expense-sum" />
            </div>
          </div>
          <label className="add_income__label">Категория</label>
          <div className="add_income__select"
            onMouseOver={e => Funcs.changeStateDomElement(document.querySelector("#add_expense__items"))}
          >
            <h3 className="add_income__select_inner" id="add-expense-inner">Хозтовары</h3><img src={arrow_down} />
            <div className="add_income__select_items expense__items" id="add_expense__items"
              onMouseLeave={e =>  Funcs.changeStateDomElement("", document.querySelector("#add_expense__items"))}
              onClick={e => {
                if (e.target.className == "add_income__select_item") {
                  Funcs.innerText("#add-expense-inner", e.target.innerText);
                };
              }}
            >
              <div className="add_income__select_item">Продукты</div>
              <div className="add_income__select_item">Хозтовары</div>
              <div className="add_income__select_item">Аванс</div>
              <div className="add_income__select_item">З/П</div>
              <div className="add_income__select_item">Посуда</div>
              <div className="add_income__select_item">Инкассация</div>
              <div className="add_income__select_item">Под отчет</div>
              <div className="add_income__select_item">Реклама</div>
              <div className="add_income__select_item">Рекламные работы</div>
              <div className="add_income__select_item">Другое</div>
            </div>
          </div>
          <label className="add_income__label" id="add_income-description-lab">Описание</label>
          <input className="add_income__input_description expense_inputs" type="text" id="add-expense-description"  />
          <label className="window__checker add_income__checker">
            <span className="check" onClick={e => {
              if (e.target.className == "check") e.target.classList.add("active");
              else if (e.target.className == "check active") e.target.classList.remove("active");
              setExpenseChecker(!expenseChecker);
            }}></span>
            <h3 className="title">Сразу подтвердить</h3>
          </label>
          <div className="add_income__btns">
            <button className="add_income__btn" onClick={e => {
              Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
              Funcs.changeStateDomElement("", document.querySelector("#add_expense"));
            }}>Закрыть</button>
            <button className="add_income__btn" onClick={e => {
              Funcs.clearAdd(".expense_inputs");
              if (
                Funcs.checkerLength(document.querySelector("#add-expense-sum").value) &
                Funcs.checkerLength(document.querySelector("#add-expense-description").value) &
                Funcs.checkerLength(document.querySelector("#add-expense-date").value)
              ) {

                newExpense = {
                  contragent: document.querySelector("#add-expense-inner").innerText,
                  sum: document.querySelector("#add-expense-sum").value,
                  description: document.querySelector("#add-expense-description").value,
                  contributed: user.full_name,
                  checked: expenseChecker
                }

                if (budget.find(bd => {
                  if (bd.date == document.querySelector("#add-expense-date").value) {
                    dateIndex = budget.indexOf(bd);
                    return true;
                  }
                })) budget[dateIndex].expense = [...budget[dateIndex].expense, newExpense];

                else setBudget(bd => [...budget, {date: document.querySelector("#add-expense-date").value, income: [], expense: [newExpense]}]);

                setBudget(bd => bd.map(s => s));
                Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
                Funcs.changeStateDomElement("", document.querySelector("#add_expense"));
              }
            }}>Добавить</button>
          </div>
        </div>
        <div className="add_income" id="eddit-expense">
          <div className="add_income__title_box">
            <h3 className="">Расход</h3>
            <h3 className="retired delete" onClick={e => {
              budget.forEach(bd => bd.expense.forEach(d => {
                if (bd.expense.indexOf(d) == bd.expense.indexOf(currentExpenseEddit)) bd.expense.splice(bd.expense.indexOf(currentExpenseEddit), 1);
              }));
              setBudget(bd => bd.map(s => s));
              Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
              Funcs.changeStateDomElement("", document.querySelector("#eddit-expense"));
            }}>Удалить</h3>
          </div>
          <div className="add_income__inputs">
            <div className="add_income__inputs_box">
              <label className="add_income__label">Дата</label>
              <input className="add_income__input eddit_expense_inputs" type="text" id="eddit-expense-date" />
            </div>
            <div className="add_income__inputs_box">
              <label className="add_income__label">Сумма</label>
              <input className="add_income__input eddit_expense_inputs" type="text" id="eddit-expense-sum" />
            </div>
          </div>
          <label className="add_income__label">Категория</label>
          <div className="add_income__select"
            onMouseOver={e => Funcs.changeStateDomElement(document.querySelector("#eddit_expense__items"))}
          >
            <h3 className="add_income__select_inner" id="eddit-expense-inner">Хозтовары</h3><img src={arrow_down} />
            <div className="add_income__select_items eddit__select-items" id="eddit_expense__items"
              onMouseLeave={e =>  Funcs.changeStateDomElement("", document.querySelector("#eddit_expense__items"))}
              onClick={e => {
                if (e.target.className == "add_income__select_item") {
                  Funcs.innerText("#eddit-expense-inner", e.target.innerText);
                };
              }}
            >
                <div className="add_income__select_item">Продукты</div>
                <div className="add_income__select_item">Хозтовары</div>
                <div className="add_income__select_item">Аванс</div>
                <div className="add_income__select_item">З/П</div>
                <div className="add_income__select_item">Посуда</div>
                <div className="add_income__select_item">Инкассация</div>
                <div className="add_income__select_item">Под отчет</div>
                <div className="add_income__select_item">Реклама</div>
                <div className="add_income__select_item">Рекламные работы</div>
                <div className="add_income__select_item">Другое</div>
            </div>
          </div>
          <label className="add_income__label" id="add_income-description-lab">Описание</label>
          <input className="add_income__input_description eddit_expense_inputs" type="text" id="eddit-expense-description"  />
          <label className="window__checker add_income__checker">
            <span className="check" onClick={e => {
              if (e.target.className == "check") e.target.classList.add("active");
              else if (e.target.className == "check active") e.target.classList.remove("active");
              setExpenseChecker(!expenseChecker);
            }}></span>
            <h3 className="title">Сразу подтвердить</h3>
          </label>
          <div className="add_income__btns">
            <button className="add_income__btn" onClick={e => {
              Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
              Funcs.changeStateDomElement("", document.querySelector("#eddit-expense"));
            }}>Закрыть</button>
            <button className="add_income__btn" onClick={e => {
              Funcs.clearAdd(".eddit_expense_inputs");
              if (
                Funcs.checkerLength(document.querySelector("#eddit-expense-sum").value) &
                Funcs.checkerLength(document.querySelector("#eddit-expense-description").value)
              ) {
                edditExpense = {
                  contragent: document.querySelector("#eddit-expense-inner").innerText,
                  sum: document.querySelector("#eddit-expense-sum").value,
                  description: document.querySelector("#eddit-expense-description").value,
                  contributed: user.full_name,
                  checked: expenseChecker
                }

                budget.forEach(bd => bd.expense.forEach(d => {
                  if (bd.expense.indexOf(d) == bd.expense.indexOf(currentExpenseEddit)) {
                    budget[budget.indexOf(bd)].expense[bd.expense.indexOf(d)] = edditExpense;
                  }
                }));

                setBudget(bd => bd.map(s => s));
                Funcs.changeStateDomElement("", document.querySelector(".black-bd-bg"));
                Funcs.changeStateDomElement("", document.querySelector("#eddit-expense"));
              }
            }}>Сохранить</button>
          </div>
        </div>
      </div>
      <div className="container budget__container">
        <header className="budget__header">
          <h3 className="budget__title">Бюджет</h3>
          <div className="budget__btns"
            onClick={e => {
              if (e.target.className == "budget__btn") {
                document.querySelectorAll(".budget__btn").forEach(btn => btn.classList.remove("activeBtn"));
                e.target.classList.add("activeBtn");
                setBudget(defaultBudget);
                Funcs.filterByDates(setBudget, e.target.innerText);
              };
            }}
            onMouseOver={e => {
              if (e.target.className == "budget__btn activeBtn" || e.target.className == "budget__btn") setDisplay(!display);
            }}
            >
            <button className="budget__btn activeBtn">{datesRange.length == 0 ? Funcs.getDate() : datesRange[0]}</button>
            <button className="budget__btn">{datesRange.length == 0 ? Funcs.getDate() : datesRange[datesRange.length - 1]}</button>
          </div>
          <CalendarModal
              setRange={setDatesRange}
              display={display}
              leave={e => setDisplay(!display)}
              def={defaultBudget}
              setState={setBudget}
              state={budget}
              range={datesRange}
          />
          <h3 className="budget__sum">103 569.00 ₽</h3>
        </header>
        <div className="budget__data">
          <div className="budget__data_object">
            <header className="budget__data_header">
              <div className="budget__header_title">
                <h3 className="budget__title_text">Доход <img src={addIcon} onClick={e => {
                  Funcs.changeStateDomElement(document.querySelector(".black-bd-bg"), "");
                  Funcs.changeStateDomElement(document.querySelector("#add-income"), "");
                  Funcs.scrollTo();
                }} /></h3>
                <h3 className="budget__title_sum">352 747.00 ₽</h3>
              </div>
              <div className="budget__header_categories">
                <h3 className="budget__header_category">Дата <img src={pl} /></h3>
                <h3 className="budget__header_category">Контрагент <img src={pl} /></h3>
                <h3 className="budget__header_category">Сумма <img src={pl} /></h3>
                <h3 className="budget__header_category">Описание <img src={pl} /></h3>
                <h3 className="budget__header_category">Внес <img src={pl} /></h3>
                <h3 className="budget__header_category" id="category_checkbox">
                  <span className="registry__checkbox"
                    style={{background: incomeChecker ? "#fff" : "rgba(63, 64, 240, 0.25)"}}
                    onClick={e => {
                      setIncomeChecker(!incomeChecker)
                      if (e.target.className == "fas fa-check-square") budget.forEach(bd => bd.income.forEach(inc => inc.checked = true));
                      else if (e.target.className == "registry__checkbox") budget.forEach(bd => bd.income.forEach(inc => inc.checked = false));

                      budget.forEach(bd => bd.income.forEach(inc => inc.checked = !inc.checked));
                      setBudget(bd => bd.map(s => s));
                    }}
                  >
                    <i className={incomeChecker ? "fas fa-check-square" : ""}></i>
                   </span>
                   Статус
                </h3>
              </div>
            </header>
          </div>
          <div className="budget__data_object">
            <header className="budget__data_header">
              <div className="budget__header_title">
                <h3 className="budget__title_text ras">Расход <img src={redIcon} onClick={e => {
                  Funcs.changeStateDomElement(document.querySelector("#add_expense"));
                  Funcs.changeStateDomElement(document.querySelector(".black-bd-bg"));
                  Funcs.scrollTo();
                }} /></h3>
                <h3 className="budget__title_sum ras">352 747.00 ₽</h3>
              </div>
              <div className="budget__header_categories">
              <h3 className="budget__item">Контрагент <img src={pl} /></h3>
              <h3 className="budget__item">Сумма <img src={pl} /></h3>
              <h3 className="budget__item">Описание <img src={pl} /></h3>
              <h3 className="budget__item">Внес <img src={pl} /></h3>
              <h3 className="budget__item">
                <span className="budget__item_checkbox"
                  style={{background: comsumptionChecker ? "#fff" : "rgba(63, 64, 240, 0.25)"}}
                  onClick={e => {
                    setConsumptionChecker(!comsumptionChecker)
                    if (e.target.className == "budget__item_checkbox") budget.forEach(bd => bd.expense.forEach(exp => exp.checked = false));
                    else if (e.target.className == "fas fa-check-square") budget.forEach(bd => bd.expense.forEach(exp => exp.checked = true));

                    budget.forEach(bd => bd.expense.forEach(exp => exp.checked = !exp.checked));
                    setBudget(bd => bd.map(s => s));
                  }}
                >
                  <i className={comsumptionChecker ? "fas fa-check-square" : ""} id="comspum-checkbox" style={{fontSize: "1.10em"}}></i>
                 </span>
                 Статус
               </h3>
              </div>
            </header>
          </div>
        </div>
        <div className="budget__cards">
          {
            budget.map(bd => {
              if (bd.income.length > 0 || bd.expense.length > 0) {
                return (
                  <div className="budget__card" id={budget.indexOf(bd)}>
                    <div className="budget__income card--item">
                      <div className="budget__date">{bd.date}</div>
                      <div className="budget__files">
                        {
                          bd.income.map(inc => {
                            return (
                              <div className="budget__file nonebr" id={bd.income.indexOf(inc)}>
                                <div className="budget__file_item">{inc.contragent}</div>
                                <div className="budget__file_item">{inc.sum}</div>
                                <div className="budget__file_item">{inc.description}</div>
                                <div className="budget__file_item">{inc.contributed}</div>
                                <div className="budget__file_item ch">
                                  <span className="budget__item_checkbox"
                                    style={{background: inc.checked ? "#fff" : "rgba(63, 64, 240, 0.25)"}}
                                    onClick={e => {
                                      if (e.target.className == "budget__item_checkbox" || e.target.className == "fas fa-check-square") {
                                        if (e.target.className == "fas fa-check-square") {
                                          checkedId = e.target.parentNode.parentNode.parentNode.id;
                                          parentId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                                        } else {
                                          checkedId = e.target.parentNode.parentNode.id;
                                          parentId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                                        }
                                        budget[parentId].income[checkedId].checked = !budget[parentId].income[checkedId].checked;
                                        setBudget(bd => bd.map(s => s));
                                      };
                                    }}
                                   >
                                      <i className={inc.checked ? "fas fa-check-square" : ""} id="comspum-checkbox"></i>
                                   </span>
                                   <img src={edit}
                                      onClick={e => {
                                        parentId = e.target.parentNode.parentNode.id;
                                        dateIndex = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                                        let current = budget[dateIndex].income[parentId];
                                        setCurrentIncomeEddit(current);
                                        Funcs.innerText("#eddit-income-date", budget[dateIndex].date, "v");
                                        Funcs.innerText("#eddit-income-sum", current.sum, "v");
                                        Funcs.innerText("#eddit-income-description", current.description, "v");
                                        Funcs.changeStateDomElement(document.querySelector("#eddit-income"));
                                        Funcs.changeStateDomElement(document.querySelector(".black-bd-bg"));
                                        Funcs.scrollTo();
                                      }}
                                   />
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div className="budget__expense card--item">
                      <div className="budget__files two_files">
                        {
                          bd.expense.map(exp => {
                            return (
                              <div className="budget__file nonebr" id={bd.expense.indexOf(exp)}>
                                  <div className="budget__file_item two__files_item file_dop">{exp.contragent}</div>
                                  <div className="budget__file_item two__files_item file_dop">{exp.sum}</div>
                                  <div className="budget__file_item two__files_item">{exp.description}</div>
                                  <div className="budget__file_item two__files_item">{exp.contributed}</div>
                                  <div className="budget__file_item ch">
                                      <span className="budget__item_checkbox"
                                        style={{background: exp.checked ? "#fff" : "rgba(63, 64, 240, 0.25)"}}
                                        onClick={e => {
                                          if (e.target.className == "budget__item_checkbox" || e.target.className == "fas fa-check-square") {
                                            if (e.target.className == "fas fa-check-square") {
                                              checkedId = e.target.parentNode.parentNode.parentNode.id;
                                              parentId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                                            } else {
                                              checkedId = e.target.parentNode.parentNode.id;
                                              parentId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                                            }
                                            budget[parentId].expense[checkedId].checked = !budget[parentId].expense[checkedId].checked;
                                            setBudget(bd => bd.map(s => s));
                                          };
                                        }}
                                       >
                                          <i className={exp.checked ? "fas fa-check-square" : ""} id="comspum-checkbox"></i>
                                      </span>
                                      <img src={edit} id="img" onClick={e => {
                                        parentId = e.target.parentNode.parentNode.id;
                                        dateIndex = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                                        let current = budget[dateIndex].expense[parentId];
                                        setCurrentExpenseEddit(current);
                                        Funcs.innerText("#eddit-expense-date", budget[dateIndex].date, "v");
                                        Funcs.innerText("#eddit-expense-sum", current.sum, "v");
                                        Funcs.innerText("#eddit-expense-description", current.description, "v");
                                        Funcs.changeStateDomElement(document.querySelector("#eddit-expense"));
                                        Funcs.changeStateDomElement(document.querySelector(".black-bd-bg"));
                                        Funcs.scrollTo();
                                      }} />
                                 </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}
