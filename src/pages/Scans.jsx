import addScanIcon from '../img/imports/add_scan_icon.svg';
import date from "./pagesStyles/img/date.svg";
import file from "./pagesStyles/img/file.svg";
import pol from "./pagesStyles/img/pl.svg";
import save from "./pagesStyles/img/save.svg";
import add from "./pagesStyles/img/add-icon.svg";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./pagesStyles/main.css";
import "./pagesStyles/Scans.css";
import Functions from "./Functions.js";
import CalendarModal from "../components/Calendar.jsx";

function createData(date, files) {
  return { date, files };
}

const Funcs = new Functions();

export default function Scans() {
  const [data, setData] = useState([
    createData('13.05.2021', [
      { type: 'Сканы', name: 'Джиэфси27.12.2019.jpg', id: 0, checked: false, document: [] },
    ]),
  ]);

  const [ prevData, setPrevData ] = React.useState([
    createData('13.05.2021', [
      { type: 'Сканы', name: 'Джиэфси27.12.2019.jpg', id: 0, checked: false, document: [] },
    ]),
  ]);

  let [ clicks, setClicks ] = React.useState(0);
  const [ checkeds, setCheckeds ] = React.useState([]);
  const [ scan, setScan ] = React.useState([]);
  const [ currentScanEddit, setCurrentScanEddit ] = React.useState([]);
  const [ datesRange, setDatesRange ] = React.useState([]);
  const [ calModal, setCalModal ] = useState(false);

  let index = 0;

  const [allSave, setAllSave] = useState(false);

  const filtration = (filterSetting) => {
    setData(prev => {
      return prev.map(e => {
            return ({
               ...e,
               files: e.files.filter(fl => fl.type === filterSetting)
            });
         });
      });
    };

  const changeChecked = target => {
    data.forEach(dt => dt.files.forEach(fl => {
      if (fl.name == target) {
        fl.checked = !fl.checked;
      };
    }));

    setData(state => {
      return state.map(st => {
        return ({
          ...st,
          files: st.files.filter(fl => fl.checked == true || fl.checked == false)
        });
      });
    });
  };

  const addDocument = value => {
    setData(state => {
      return [
        ...state,
        value
      ];
    });

    setPrevData(prev => {
      return [
        ...prev,
        value
      ];
    });
  };

  const removeAndAdd = (e) => {
    document.querySelectorAll(".filtration__btn").forEach(btn => btn.classList.remove("activeBtn"))
    if (e.target.className == "filtration__btn") e.target.classList.add("activeBtn");
  };

  const getDate = () => {
    const date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  useEffect(() => {
    async function getScans() {
      let request = await fetch("http://127.0.0.1:8000/api/app/scan/", {
        method: "GET",
        headers: {
          "content-type": "application/json"
        },
      });

      let answer = await request.json();
      if (request.status == 200) {
          answer.forEach(answ => {
            data.forEach(dt => {
              
            });
          });
      } else console.log(answer);
    };
    getScans();
  }, []);

  function addScan(massive) {
    const fetchScan = async () => {
      let request = await fetch("http://127.0.0.1:8000/api/app/scan/", {
        method: "POST",
        body: JSON.stringify({
          type_scan: "4",
          name: massive.name,
          file: massive.document,
          facility: 0
        }),
        headers: {
          "content-type": "application/json"
        }
      });
      let answer = await request.json();
      if (request.status == 200) {

      };
      console.error(`${request.status} - ${JSON.stringify(answer)}`);
    };
    fetchScan();
  };

  return (
    <div className="Scans">
      <div className="black-scans-bg">
      <div className="add-window" id="add-scan-window">
        <div className="add__title">Добавить устав. документа</div>
        <label className="add__input-title">Имя</label>
        <input className="add__input add_scan_input" id="name-document" />
        <input id="scan-add" type="file" style={{display: "none"}} onChange={e => {
          if (e.target.files[0] != undefined) {
            if (/\.jpg$/g.test(e.target.files[0].name)) {
              setScan(e.target.files[0]);
            };
          };
        }} />
        <label htmlFor="scan-add">
          <h3 className="add__scan"><img src={add} /> Прикрепить скан</h3>
        </label>
        <div className="add__btns">
          <button className="add__btn" onClick={e => {
            document.querySelector(".black-scans-bg").style.display = "none";
            document.querySelector("#add-scan-window").style.display = "none";
          }}>Закрыть</button>
          <button className="add__btn" onClick={e => {
              Funcs.clearAdd(".add_scan_input");
              if (scan.name != undefined) {
                let newScan = {date: getDate(), files: [{ type: 'Уставные документы', name: scan.name, id: data.length, checked: false, document: scan }]}
                addDocument(newScan);
                addScan(newScan);
                document.querySelector(".black-scans-bg").style.display = "none";
                document.querySelector("#add-scan-window").style.display = "none";
              }
          }}>Добавить</button>
        </div>
      </div>
      <div className="add-window" id="eddit-scan-window">
        <div className="add__title" id="eddit-scan-name">Добавить устав. документа</div>
        <label className="add__input-title">Имя</label>
        <input className="add__input eddit-name" id="name-document" />
        <input id="scan-add" type="file" style={{display: "none"}} onChange={e => {
          if (e.target.files[0] != undefined) {
            if (/\.jpg$/g.test(e.target.files[0].name)) {
              setScan(e.target.files[0]);
            };
          };
        }} />
        <label htmlFor="scan-add">
          <h3 className="add__scan"><img src={add} /> Прикрепить скан</h3>
        </label>
        <div className="add__btns">
          <button className="add__btn" onClick={e => {
            Funcs.changeStateDomElement("", document.querySelector(".black-scans-bg"));
            Funcs.changeStateDomElement("", document.querySelector("#eddit-scan-window"));
          }}>Закрыть</button>
          <button className="add__btn" onClick={e => {
              Funcs.clearAdd(".eddit-name");
              data.forEach(date => date.files.forEach(file => {
                if (currentScanEddit.name == file.name) {
                  data[data.indexOf(date)].files.[data[data.indexOf(date)].files.indexOf(file)].document = scan;
                  data[data.indexOf(date)].files.[data[data.indexOf(date)].files.indexOf(file)].name = scan.name;
                  setData(data => data.map(dt => dt));
                  Funcs.changeStateDomElement("", document.querySelector(".black-scans-bg"));
                  Funcs.changeStateDomElement("", document.querySelector("#eddit-scan-window"));
                };
              }));
          }}>Сохранить</button>
        </div>
      </div>
      </div>
      <div className=" container Scans__container">
        <div className="Scans__filtration">
          <div className="filtration">
            <h3 className="filtration__title">Сканы</h3>
            <div className="filtration__btns"
              onClick={e => {
                if (e.target.className == "filtration__btn" || e.target.className == "filtration__btn activeBtn") {
                   setData(prevData);
                   Funcs.filterByDates(setData, e.target.innerText);
                };
              }}

              onMouseOver={e => setCalModal(true)}
          >
              <button className="filtration__btn activeBtn" onClick={e => removeAndAdd(e)}>{datesRange.length == 0 ? Funcs.getDate() : datesRange[0]}</button>
              <button className="filtration__btn" onClick={e => removeAndAdd(e)}>{datesRange.length == 0 ? Funcs.getDate() : datesRange[datesRange.length - 1]}</button>
              <CalendarModal
                state={data}
                display={calModal}
                leave={e => setCalModal(!calModal)}
                setRange={setDatesRange}
                def={prevData}
                setState={setData}

               />
            </div>
            <div className="folder-plus">
              <i className="fas fa-folder-plus" id="folder-plus" onClick={e => {
                document.querySelector(".black-scans-bg").style.display = "block";
                document.querySelector("#add-scan-window").style.display = "block";
              }}></i>
            </div>
          </div>
          <div className="Scans__nav">
            <a className="Scans__nav-link">Дата <img src={date} alt="date" /></a>
            <a className="Scans__nav-link"
              onMouseEnter={e => document.querySelector(".type-document-menu").style.display = "block"}
              onMouseLeave={e => document.querySelector(".type-document-menu").style.display = "none"}
            >
              Тип документа <img src={pol} alt="file" />
              <div className="type-document-menu" onClick={e => {
                if (e.target.className == "type-document__link") {
                    setData(prevData);
                    filtration(e.target.dataset.filter);
                    setCheckeds([]);
                 }
              }}>
                <a className="type-document__link" data-filter="Накладная">Накладные</a>
                <a className="type-document__link" data-filter="Расходы">Расходы</a>
                <a className="type-document__link" data-filter="Сканы">Сканы</a>
                <a className="type-document__link" data-filter="Уставные документы">Уставные документы</a>
              </div>
            </a>
            <a className="Scans__nav-link">Файл <img src={file} alt="file" /></a>
            <a className="Scans__nav-link">
              <span className="checkbox" style={{backgroundColor: allSave ? "#fff" : "rgba(63, 64, 240, 0.25)" }} onClick={e => {
                setAllSave(true);
                setCheckeds([]);
                setClicks(clicks + 1);
                data.forEach(dt => dt.files.forEach(fl => fl.checked = true));
                data.forEach(dt => dt.files.forEach(fl => setCheckeds(check => [...check, fl])));
                if (clicks >= 1) {
                  setCheckeds([]);
                  setClicks(0);
                  setAllSave(false);
                  data.forEach(dt => dt.files.forEach(fl => fl.checked = false));
                };
              }}>
                <i className={allSave ? "fas fa-check-square" : ""}></i>
              </span>
              • <span id="checkeds">{checkeds.length}</span> <img src={save} alt="save" />
            </a>
          </div>
        </div>
        <div className="Scans__cards">
          {
            data.length > 0 ? data.map(dt => {
            if (dt.files.length > 0) {
              return (
                <div className="Scans__card" id={index++} key={index}>
                  <div className="card__date">{dt.date}</div>
                  <div className="card__items">
                    {
                    dt.files.map(fl => {
                      return (
                        <div className="card__item"
                          id={fl.id}
                          key={fl.id++}
                          style={{background: fl.checked ? "#E5E5E5" : "#fff"}}
                          onClick={e => {
                            if (e.target.className == "card__item") {
                              data.forEach(scan => scan.files.forEach(file => {
                                if (file.name == e.target.querySelector(".card__img").innerText) {
                                  setCurrentScanEddit(file);
                                  Funcs.innerText("#eddit-scan-name", file.name);
                                  Funcs.changeStateDomElement(document.querySelector("#eddit-scan-window"), "");
                                  Funcs.changeStateDomElement(document.querySelector(".black-scans-bg"), "");
                                };
                              }));
                            };
                          }}
                        >
                          <span className="card__type card__inner_box">{fl.type}</span>
                          <a className="card__img card__inner_box">{fl.name}</a>
                          <span className="checkbox card__checkbox" onClick={e => {
                            if (e.target.className == "checkbox card__checkbox") {
                                changeChecked(e.target.parentNode.querySelector(".card__img").innerText);
                                  if (checkeds.length == 0) {
                                    setCheckeds(state => [...state, e.target.parentNode.querySelector(".card__img").innerText])
                                  } else {
                                    if (checkeds.indexOf(e.target.parentNode.querySelector(".card__img").innerText) == -1) {
                                      setCheckeds(state => [...state, e.target.parentNode.querySelector(".card__img").innerText])
                                    };
                                  };
                                } else if (e.target.className == "fas fa-check-square") {
                                  changeChecked(e.target.parentNode.parentNode.querySelector(".card__img").innerText);
                                  checkeds.splice(checkeds[checkeds.indexOf(e.target.parentNode.parentNode.querySelector(".card__img").innerText)], 1);
                                }
                            }}>
                            <i className={fl.checked ? "fas fa-check-square" : ""}></i>
                          </span>
                        </div>
                      );
                    }
                   )
                  }
                  </div>
                </div>
              );
            };
          }
        ) : ""
      }
    </div>
  </div>
</div>
);
}
