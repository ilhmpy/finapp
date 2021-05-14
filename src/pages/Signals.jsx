import React, {useState, useEffect} from "react";
import "./pagesStyles/main.css";
import "./pagesStyles/signals.css";
import Functions from "./Functions.js";
import del from "./pagesStyles/img/delete.svg";

const Funcs = new Functions();

let index = 0;

function Signals() {
  const [negativeBalance, setNegativeBalance] = useState([
    {text: "В ведомости за декабрь 2020 сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб."},
  ]);

  const [checkedDocuments, setCheckedDocuments] = useState([
    {text: "В анкету сотрудника Иванова И.И. добавлены не все сканы паспорта"},
    {text: "В анкету сотрудника Иванова И.И. добавлены не все сканы что та"},
    {text: "В анкету сотрудника Иванова И.И. добавлены не все сканы ии"},
  ]);

  const [cashMismatch, setCashMismatch] = useState([
    {
      text: `17.01.2021 в 15:32 Иванов И.И. обнаружил несоответствие остатка денежных средств. Согласно учету: 1 532 руб. Согласно сообщению Иванова И.И.: 1 312 руб. Комментарий Иванова И.И.: не смог найти`
    },
    {
      text: `17.01.2021 в 15:32 Иванов И.И. обнаружил несоответствие остатка денежных средств. Согласно учету: 1 522 руб. Согласно сообщению Иванова И.И.: 1 112 руб. Комментарий Иванова И.И.: не смог найти`
    },
  ]);

  const getLength = () => negativeBalance.length + checkedDocuments.length + cashMismatch.length;

  return (
    <div className="signals">
      <div className="container signals__container">
        <header className="signals__header">
          <h3 className="signals__title">Сигналы</h3>
          <h3 className="signals__forgot" onClick={e => {
            setNegativeBalance(st => []);
            setCashMismatch(st => []);
            setCheckedDocuments(st => []);
          }}>Забыть все | <span className="forgot-sum">{getLength()}</span></h3>
        </header>
        <div className="signals__type-cards">
          <div className="signals__type-card">
            <div className="signals__type-card_title-box">
              <h3 className="signals__type-card_title">Отрицательный остаток</h3>
              <span className="signals__type-card_length">{negativeBalance.length}</span>
            </div>
            <div className="signals__inner-cards">
            {
              negativeBalance.map(bl => {
                return (
                  <div className="signals__card" key={index++}>
                    <div className="signals__card_header">
                      <h3 className="signals__warning">Внимание!</h3>
                      <img src={del} onClick={e => {
                        let parentContent = e.target.parentNode.parentNode.querySelector(".signals__card_content").innerText;
                        setNegativeBalance(st => st.filter(s => s.text != parentContent));
                      }} />
                    </div>
                      <div className="signals__card_content">{bl.text}</div>
                    </div>
                  )
                }
               )
              }
            </div>
          </div>
          <div className="signals__type-card">
            <div className="signals__type-card_title-box">
              <h3 className="signals__type-card_title">Проверить документы</h3>
              <span className="signals__type-card_length">{checkedDocuments.length}</span>
            </div>
            {
              checkedDocuments.map(docs => {
                return (
                  <div className="signals__card" key={index++}>
                    <div className="signals__card_header">
                      <h3 className="signals__warning">Внимание!</h3>
                      <img src={del} onClick={e => {
                        let parentContent = e.target.parentNode.parentNode.querySelector(".signals__card_content").innerText;
                        setCheckedDocuments(st => st.filter(s => s.text != parentContent));
                      }} />
                    </div>
                    <div className="signals__card_content">{docs.text}</div>
                  </div>
                )
              }
             )
            }
          </div>
          <div className="signals__type-card">
            <div className="signals__type-card_title-box">
              <h3 className="signals__type-card_title">Несоответствие наличных денег</h3>
              <span className="signals__type-card_length">{cashMismatch.length}</span>
            </div>
            {
              cashMismatch.map(cash => {
                return (
                  <div className="signals__card" key={index++}>
                    <div className="signals__card_header">
                      <h3 className="signals__warning">Внимание!</h3>
                      <img src={del} onClick={e => {
                        let parentContent = e.target.parentNode.parentNode.querySelector(".signals__card_content").innerText;
                        setCashMismatch(st => st.filter(s => s.text != parentContent));
                      }} />
                    </div>
                    <div className="signals__card_content">{cash.text}</div>
                  </div>
                )
              }
             )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signals;
