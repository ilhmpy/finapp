import user from "../img/imports/user.svg";
import eddit from "../img/imports/edit_icon.svg";
import file from "./pagesStyles/img/file.svg";
import pol from "./pagesStyles/img/arrow_down.svg";
import React, { useState, useEffect } from "react";
import Functions from "./Functions.js";
import "./pagesStyles/main.css";
import "./pagesStyles/Imports.css";

let Funcs = new Functions();

function createData(name, type, comment, id) {
  return { name, type, comment, id };
}

export default function Imports() {
  const [token, setToken] = React.useState("");
  const [rows, setRows] = React.useState([
      {companyName: "ООО Джи Эф Си", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "ИП Новикова Юлия Викторовна", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Чайники", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Магазин мочалок", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "СобакиКрутые", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Магазин Ролтонов", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Холодильники", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "ТуалетныеУнитазы228", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Карельские памятники", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Спецслужба детдом", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Аренда навоза", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "АктивируемУголь", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "ВывозимГовно inc", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Sherk's pizza", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "SOBAKI.free", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Falling", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Downing", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Loosers", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Amungus inc", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "AmongUsStupidPeoples", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "AmongUsVanki", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "THE Best inc", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "free.Dogs228", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "mmm07.05.2021-SHIT", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Dadadadad", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Nike Company", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "Sasung Company", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "aBBle company", productionType: "Хозтовары",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации.",
      inn: "", bic: "", bank: "", res: "", cores: ""
      },
      {companyName: "karaka", productionType: "Продукты",
      commentary: "Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации."},

  ]);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [newGuests, setNewGuests] = useState(0);
  const [currentImportsEddit, setCurrentImportsEddit] = useState([]);

  const handleClickOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  React.useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      setToken(token);
      let req = await fetch(
        "http://localhost:8000/api/app/importers/?format=json",
        {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (req.status === 200) {
        let data = await req.json();
        let newRows = [];
        for (let d of data) {
          console.log(d);
          newRows.push(
            createData(d.company_name, d.production_type, d.comment, d.id)
          );
        }
        setRows(newRows);
      } else {
        console.log(req);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="imports">
      <div className="black-imports-bg">
        <div className="imports__add-window" id="add-imports">
          <div className="imports__window-title-box">
            <h3 className="imports__window-title">Добавление поставщика</h3>
          </div>
          <div className="imports__content-window">
            <div className="imports__inputs">
              <div className="imports__inputs-box">
                <label className="imports__label">Наименование компании</label>
                <input className="imports__input add_imports_inputs" type="text" id="add-imports-name" />
              </div>
              <div className="imports__inputs-box">
                <label className="imports__label label-inn">ИНН</label>
                <input className="imports__input add_imports_inputs" type="text" id="add-imports-inn" />
              </div>
            </div>
            <div className="imports__inputs">
              <div className="imports__inputs-box">
                <label className="imports__label label-bank">Наименование банка</label>
                <input className="imports__input add_imports_inputs" type="text" id="add-imports-bank" />
              </div>
              <div className="imports__inputs-box">
                <label className="imports__label label-inn">БИК</label>
                <input className="imports__input add_imports_inputs" type="text" id="add-imports-bic" />
              </div>
            </div>
            <div className="imports__inputs">
              <div className="imports__inputs-box">
                <label className="imports__label">Корреспондентский счет</label>
                <input className="imports__input add_imports_inputs" type="text" id="add-imports-сores" />
              </div>
              <div className="imports__inputs-box">
                <label className="imports__label label-ress">Расчетный счёт</label>
                <input className="imports__input add_imports_inputs" type="text" id="add-imports-res" />
              </div>
            </div>
            <div className="imports__inputs" id="sel">
            <div className="imports__select-box">
              <label className="imports__label select-label">Тип продукции</label>
              <div className="imports__select"
                onMouseOver={e => Funcs.changeStateDomElement(document.querySelector(".imports__select-list"), "")}
              >
                <span className="imports__select-inner" id="add-inner">Продукты</span><img src={pol} alt="pol" />
                <div className="imports__select-list" id="imports__select-list-add"
                  onMouseLeave={e => Funcs.changeStateDomElement("", document.querySelector(".imports__select-list"))}
                  onClick={e => {
                    if (e.target.className == "imports__select-item") {
                      Funcs.innerText("#add-inner", e.target.innerText);
                      if (e.target.dataset.type == "Other") Funcs.changeStateDomElement(document.querySelector("#input__type"), "");
                      else Funcs.changeStateDomElement("", document.querySelector("#input__type"));
                    };
                  }}
                >
                  <div className="imports__select-item" data-type="Продукты">Продукты</div>
                  <div className="imports__select-item" data-type="Хозтовары">Хозтовары</div>
                  <div className="imports__select-item" data-type="Other">Другое</div>
                </div>
              </div>
            </div>
            <div className="imports__input-box" id="input__type">
              <label className="imports__label prod-c">Введите свою продукцию</label>
              <input className="imports__input add_imports_inputs" id="inp-type" />
            </div>
            </div>
            <label className="imports__label" id="imports__commentary">Комментарий</label>
            <textarea className="imports__textarea add_imports_inputs" id="imports-textarea"></textarea>
            <div className="imports__btns">
              <button className="imports__btn" onClick={e => {
                Funcs.changeStateDomElement("", document.querySelector(".black-imports-bg"));
                Funcs.changeStateDomElement("", document.querySelector("#add-imports"));
              }}>Закрыть</button>
              <button className="imports__btn" onClick={e => {
                Funcs.clearAdd(".add_imports_inputs");
                if (
                  Funcs.checkerLength(document.querySelector("#add-imports-name").value) &
                  Funcs.checkerLength(document.querySelector("#imports-textarea").value) &
                  Funcs.checkerLength(document.querySelector("#add-imports-сores").value) &
                  Funcs.checkerLength(document.querySelector("#add-imports-res").value) &
                  Funcs.checkerLength(document.querySelector("#add-imports-inn").value) &
                  Funcs.checkerLength(document.querySelector("#add-imports-bic").value) &
                  Funcs.checkerLength(document.querySelector("#add-imports-bank").value)
                ) {
                  let newImports = {
                    companyName: document.querySelector("#add-imports-name").value,
                    productionType: document.querySelector("#add-inner").innerText == "Другое" ? document.querySelector("#inp-type").value : document.querySelector("#add-inner").innerText,
                    commentary: document.querySelector("#imports-textarea").value,
                    cores: document.querySelector("#add-imports-сores").value,
                    res: document.querySelector("#add-imports-res").value,
                    inn: document.querySelector("#add-imports-inn").value,
                    bic: document.querySelector("#add-imports-bic").value,
                    bank: document.querySelector("#add-imports-bank").value
                  };

                  setRows(row => [...row, newImports]);
                  setRows(row => row.map(r => r));
                  Funcs.changeStateDomElement("", document.querySelector(".black-imports-bg"));
                  Funcs.changeStateDomElement("", document.querySelector("#add-imports"));
                }
              }}
             >Добавить</button>
            </div>
          </div>
        </div>
        <div className="imports__add-window" id="eddit-imports">
          <div className="imports__window-title-box">
            <h3 className="imports__window-title" id="eddit-name-company">ООО Джи Эф Си</h3>
            <span className="retired delete" id="imports-delete" onClick={e => {
              setRows(row => rows.filter(row => row.companyName != currentImportsEddit.companyName));
              setRows(row => row.map(rw => rw));
              Funcs.changeStateDomElement("", document.querySelector("#eddit-imports"));
              Funcs.changeStateDomElement("", document.querySelector(".black-imports-bg"));
            }}>Удалить</span>
          </div>
          <div className="imports__content-window">
            <div className="imports__inputs">
              <div className="imports__inputs-box">
                <label className="imports__label">Наименование компании</label>
                <input className="imports__input eddit-imports_inputs" type="text" id="eddit-imports-name" />
              </div>
              <div className="imports__inputs-box">
                <label className="imports__label label-inn">ИНН</label>
                <input className="imports__input eddit-imports_inputs" type="text" id="eddit-imports-inn" />
              </div>
            </div>
            <div className="imports__inputs">
              <div className="imports__inputs-box">
                <label className="imports__label label-bank">Наименование банка</label>
                <input className="imports__input eddit-imports_inputs" type="text" id="eddit-imports-bank" />
              </div>
              <div className="imports__inputs-box">
                <label className="imports__label label-inn">БИК</label>
                <input className="imports__input eddit-imports_inputs" type="text" id="eddit-imports-bic" />
              </div>
            </div>
            <div className="imports__inputs">
              <div className="imports__inputs-box">
                <label className="imports__label">Корреспондентский счет</label>
                <input className="imports__input eddit-imports_inputs" type="text" id="eddit-imports-сores" />
              </div>
              <div className="imports__inputs-box">
                <label className="imports__label label-ress">Расчетный счёт</label>
                <input className="imports__input eddit-imports_inputs" type="text" id="eddit-imports-res" />
              </div>
            </div>
            <div className="imports__inputs" id="sel">
            <div className="imports__select-box">
              <label className="imports__label select-label">Тип продукции</label>
              <div className="imports__select"
                onMouseOver={e => Funcs.changeStateDomElement(document.querySelector("#imports__select-list-eddit"), "")}
              >
                <span className="imports__select-inner" id="eddit-inner">Продукты</span><img src={pol} alt="pol" />
                <div className="imports__select-list" id="imports__select-list-eddit"
                  onMouseLeave={e => Funcs.changeStateDomElement("", document.querySelector("#imports__select-list-eddit"))}
                  onClick={e => {
                    if (e.target.className == "imports__select-item") {
                      Funcs.innerText("#eddit-inner", e.target.innerText);
                      if (e.target.dataset.type == "Other") Funcs.changeStateDomElement(document.querySelector("#eddit-input-type"), "");
                      else Funcs.changeStateDomElement("", document.querySelector("#eddit-input-type"));
                    };
                  }}
                >
                  <div className="imports__select-item" data-type="Продукты">Продукты</div>
                  <div className="imports__select-item" data-type="Хозтовары">Хозтовары</div>
                  <div className="imports__select-item" data-type="Other">Другое</div>
                </div>
              </div>
            </div>
            <div className="imports__input-box" id="eddit-input-type">
              <label className="imports__label prod-c">Введите свою продукцию</label>
              <input className="imports__input eddit-imports_inputs" id="eddit-inp-type" />
            </div>
            </div>
            <label className="imports__label" id="imports__commentary">Комментарий</label>
            <textarea className="imports__textarea eddit-imports_inputs" id="eddit-textarea"></textarea>
            <div className="imports__btns">
              <button className="imports__btn" onClick={e => {
                Funcs.changeStateDomElement("", document.querySelector(".black-imports-bg"));
                Funcs.changeStateDomElement("", document.querySelector("#eddit-imports"));
              }}>Закрыть</button>
              <button className="imports__btn" onClick={e => {
                Funcs.clearAdd(".eddit-imports_inputs");
                if (
                  Funcs.checkerLength(document.querySelector("#eddit-imports-name").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-imports-сores").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-imports-res").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-imports-inn").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-imports-bic").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-imports-bank").value) &
                  document.querySelector("#eddit-textarea").value.length < 32
                ) {
                  rows.forEach(row => {
                    if (row.companyName == currentImportsEddit.companyName) {
                      rows[rows.indexOf(row)] = {
                        companyName: document.querySelector("#eddit-imports-name").value,
                        productionType: document.querySelector("#eddit-inner").innerText == "Другое" ? document.querySelector("#eddit-inp-type").value : document.querySelector("#eddit-inner").innerText,
                        commentary: document.querySelector("#eddit-textarea").value,
                        cores: document.querySelector("#eddit-imports-сores").value,
                        res: document.querySelector("#eddit-imports-res").value,
                        inn: document.querySelector("#eddit-imports-inn").value,
                        bic: document.querySelector("#eddit-imports-bic").value,
                        bank: document.querySelector("#eddit-imports-bank").value
                      };
                    };
                  });
                  setRows(row => row.map(r => r));
                  Funcs.changeStateDomElement("", document.querySelector(".black-imports-bg"));
                  Funcs.changeStateDomElement("", document.querySelector("#add-imports"));
                }
              }}
             >Сохранить</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container imports__container">
        <div className="imports__nav">
          <div className="imports__title">
            <h3 className="imports__title-text">Поставщики</h3>
            <img src={user} alt="user" onClick={e => {
              Funcs.changeStateDomElement(document.querySelector("#add-imports"), "");
              Funcs.changeStateDomElement(document.querySelector(".black-imports-bg"), "");
            }} />
          </div>
          <div className="imports__categories">
            <div className="imports__category">Имя <img src={file} /></div>
            <div className="imports__category">Тип продукции <img src={file} /></div>
            <div className="imports__category">Комментарий <img src={file} /></div>
          </div>
        </div>
        <div className="imports__cards">
          {
            rows.map(row => {
              return (
                <div className="imports__card">
                  <div className="imports__card-item company-name">{row.companyName}</div>
                  <div className="imports__card-item">{row.productionType}</div>
                  <div className="imports__card-item">{row.commentary}</div>
                  <img src={eddit} onClick={e => {
                    rows.forEach(row => {
                      if (row.companyName == e.target.parentNode.querySelector(".company-name").innerText) {
                        Funcs.changeStateDomElement(document.querySelector("#eddit-imports"));
                        Funcs.changeStateDomElement(document.querySelector(".black-imports-bg"));
                        Funcs.innerText("#eddit-name-company", row.companyName);
                        Funcs.innerText("#eddit-imports-name", row.companyName, "v");
                        Funcs.innerText("#eddit-imports-inn", row.inn, "v");
                        Funcs.innerText("#eddit-imports-bank", row.bank, "v");
                        Funcs.innerText("#eddit-imports-bic", row.bic, "v");
                        Funcs.innerText("#eddit-imports-сores", row.cores, "v");
                        Funcs.innerText("#eddit-imports-res", row.res, "v");
                        Funcs.innerText("#eddit-textarea", row.commentary, "v");
                        Funcs.scrollTo();
                        setCurrentImportsEddit(row);
                      };
                    });
                  }} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
