import * as React from 'react';
import user from '../img/imports/user.svg';
import viewIcon from '../img/imports/view_icon.svg';
import yura from "./pagesStyles/img/yura.jpg";
import eddit from "./pagesStyles/img/eddit.svg";
import add from "./pagesStyles/img/addIc.svg";
import pl from "./pagesStyles/img/file.svg";
import file from "./pagesStyles/img/file-icon.svg";
import f from "./pagesStyles/img/arrow_down.svg";
import "./pagesStyles/main.css";
import "./pagesStyles/Coworkers.css";
import { useState } from "react";
import Functions from "./Functions.js";

let Funcs = new Functions();

let newWorker;
let img;

function createData(
    name, number, position, status, id, profilePhoto, startWork, division,
    factAddress, born, address, paymentSum, payment, foreigner, comment, documents
) {
  return {
      name, number, position, status, id, profilePhoto, startWork, division,
      factAddress, born, address,  paymentSum, payment, foreigner, comment, documents
  };
}

let clicks = 0;
let index = 0;

let currentEddit;
let edditWorker;

let documents = [];

export default function Coworkers() {
  const [coworkers, setCoworkers ] = useState(
    [
      createData  (
        'Иваненко Иван Иванович', '+ 7 (123) 047-55-66', 'Менеджер', true, 0, {},
        "10.12.2020", "Администрация", "Пушкина 48", "04.03.1990", "Пушкина 49",
        "1000$", "Оклад", true, "Самый ужасный сотрудник", []
      ),

      createData  (
        'Иваненко Иван Иванович', '+ 7 (122) 047-55-66', 'Менеджер', true, 0, {},
        "10.12.2020", "Администрация", "Пушкина 48", "04.03.1990", "Пушкина 49",
        "1000$", "Оклад", true, "Самый ужасный сотрудник", []
      ),

      createData  (
        'Иваненко Иван Иванович', '+ 7 (124) 047-55-66', 'Менеджер', false, 0, {},
        "10.12.2020", "Администрация", "Пушкина 48", "04.03.1990", "Пушкина 49",
        "1000$", "Оклад", true, "Самый ужасный сотрудник", []
      ),

      createData  (
        'Иваненко Иван Иванович', '+ 7 (125) 047-55-66', 'Менеджер', false, 0, {},
        "10.12.2020", "Администрация", "Пушкина 48", "04.03.1990", "Пушкина 49",
        "1000$", "Оклад", true, "Самый ужасный сотрудник", []
      ),

      createData  (
        'Иваненко Иван Иванович', '+ 7 (128) 047-55-66', 'Менеджер', true, 0, {},
        "10.12.2020", "Администрация", "Пушкина 48", "04.03.1990", "Пушкина 49",
        "1000$", "Оклад", true, "Самый ужасный сотрудник", []
      ),

      createData  (
        'Иваненко Иван Иванович', '+ 7 (129) 047-55-66', 'Менеджер', true, 0, {},
        "10.12.2020", "Администрация", "Пушкина 48", "04.03.1990", "Пушкина 49",
        "1000$", "Оклад", true, "Самый ужасный сотрудник", []
      ),

      createData  (
        'Иваненко Иван Иванович', '+ 7 (110) 047-55-66', 'Менеджер', false, 0, {},
        "10.12.2020", "Администрация", "Пушкина 48", "04.03.1990", "Пушкина 49",
        "1000$", "Оклад", true, "Самый ужасный сотрудник", []
      ),

      createData  (
        'Иваненко Иван Иванович', '+ 7 (130) 047-55-66', 'Менеджер', true, 0, {},
        "10.12.2020", "Администрация", "Пушкина 48", "04.03.1990", "Пушкина 49",
        "1000$", "Оклад", true, "Самый ужасный сотрудник", []
      ),
  ]
);

const [ checked, setChecked ] = useState(false);
let photo;

  return (
    <div className="coworkers">
      <div className="black-co-bg">
      <div className="worker-window">
        <div className="worker__title">Добавление сотрудника</div>
        <div className="worker__content">
          <aside className="worker__aside">
            <div className="worker__photo">
              <input type="file" id="worker__photo-input" onChange={e => {
                if (e.target.files[0] != undefined) {
                  if (Funcs.checkFileType(e.target.files[0])) {
                    document.querySelector(".cam").style.display = "none";
                    document.querySelector(".img").style.display = "block";
                    photo = e.target.files[0];
                    Funcs.fileLoader(e.target.files[0]);
                  }
                }
              }} />
              <div className="img">
                <img id="img__ava" />
              </div>
              <label htmlFor="worker__photo-input">
                <i class="fas fa-camera cam"></i>
              </label>
            </div>
            <label className="worker__label">Номер телефона</label>
            <input className="worker__input add-coworkers_inputs" id="number" />
            <label className="worker__label">Дата приема</label>
            <input className="worker__input add-coworkers_inputs" id="startWork" type="text" />
            <label className="worker__label select" id="division">Подразделение</label>
            <div className="worker__select" onMouseOver={e => document.querySelector("#division-items").style.display = "block"}>
              <span className="worker__item-type" id="division-description">Администрация</span> <img src={f} />
              <div className="worker__select-items" id="division-items"
                onMouseLeave={e => document.querySelector("#division-items").style.display = "none"}
                onClick={e => {
                  if (e.target.className == "worker__select-item") {
                    document.querySelector("#division-description").innerText = e.target.innerText;
                  }
                }}
              >
                <div className="worker__select-item">Администрация</div>
                <div className="worker__select-item">Бар</div>
                <div className="worker__select-item">Официанты</div>
                <div className="worker__select-item">Кухня</div>
                <div className="worker__select-item">Технический персонал</div>
              </div>
            </div>
            <label className="worker__label" style={{width: 110 + "px"}}>Должность</label>
            <input className="worker__input add-coworkers_inputs" id="position" />
            <label className="worker__label select">Тип оплаты</label>
            <div className="worker__select" onMouseOver={e => document.querySelector("#payment").style.display = "block"}>
              <span className="worker__item-type" id="payment-description">Ставка</span> <img src={f} />
              <div className="worker__select-items" id="payment"
                onMouseLeave={e => document.querySelector("#payment").style.display = "none"}
                onClick={e => {
                  if (e.target.className == "worker__select-item") {
                    document.querySelector("#payment-description").innerText = e.target.innerText;
                  }
                }}
              >
                <div className="worker__select-item">Оклад</div>
                <div className="worker__select-item">Почасовая ставка</div>
                <div className="worker__select-item">Посуточная ставка</div>
              </div>
            </div>
            <label className="worker__label">Ставка/оклад</label>
            <input className="worker__input" id="paymentSum" />
          </aside>
          <div className="worker__fields">
            <div className="worker__field-inputs">
              <div className="worker__field-input-box">
                <label className="worker__label fio">ФИО</label>
                <input className="worker__field-input add-coworkers_inputs" id="fio" />
              </div>
              <div className="worker__field-input-box date-born">
                <label className="worker__label date">Дата рождения</label>
                <input className="worker__field-input add-coworkers_inputs" id="born-date" />
              </div>
            </div>
            <label className="worker__label">Адрес прописки</label>
            <input className="worker__field-input just-input add-coworkers_inputs" id="address" />
            <label className="worker__label fac">Фактический адрес</label>
            <input className="worker__field-input just-input add-coworkers_inputs" id="fact-address" />
            <label className="worker__label">Комментарий</label>
            <input className="worker__commentary add-coworkers_inputs" id="commentary" />
            <label className="worker__label add-doc">Прикрепить документ</label>
            <div className="worker__add-document">
              <input type="file" className="add-doc" id="passport"
              data-document="passport"
              onChange={e => {
                documents = Funcs.uploadFile(e.target.files[0], documents, {document: e.target.dataset.document, blob: e.target.files[0]});
                document.querySelector(`.${e.target.dataset.document}`).classList.add("activeDoc");
              }} />
              <input type="file" className="add-doc" id="snls" data-document="snsls" onChange={e => {
                documents = Funcs.uploadFile(e.target.files[0], documents, {document: e.target.dataset.document, blob: e.target.files[0]});
                document.querySelector(`.${e.target.dataset.document}`).classList.add("activeDoc");
              }} />
              <input type="file" className="add-doc" id="army" data-document="army" onChange={e => {
                documents = Funcs.uploadFile(e.target.files[0], documents, {document: e.target.dataset.document, blob: e.target.files[0]});
                document.querySelector(`.${e.target.dataset.document}`).classList.add("activeDoc");
              }} />
              <input type="file" className="add-doc" id="work" data-document="work" onChange={e => {
                documents = Funcs.uploadFile(e.target.files[0], documents, {document: e.target.dataset.document, blob: e.target.files[0]});
                document.querySelector(`.${e.target.dataset.document}`).classList.add("activeDoc");
              }} />
              <input type="file" className="add-doc" id="card" data-document="card" onChange={e => {
                documents = Funcs.uploadFile(e.target.files[0], documents, {document: e.target.dataset.document, blob: e.target.files[0]});
                document.querySelector(`.${e.target.dataset.document}`).classList.add("activeDoc");
              }} />
              <input type="file" className="add-doc" id="patent" data-document="patent" onChange={e => {
                 documents = Funcs.uploadFile(e.target.files[0], documents, {document: e.target.dataset.document, blob: e.target.files[0]});
                 document.querySelector(`.${e.target.dataset.document}`).classList.add("activeDoc");
              }} />
              <input type="file" className="add-doc" id="registration" data-document="registration" onChange={e => {
                 documents = Funcs.uploadFile(e.target.files[0], documents, {document: e.target.dataset.document, blob: e.target.files[0]});
                 document.querySelector(`.${e.target.dataset.document}`).classList.add("activeDoc");
              }} />
              <div className="add-document-items">
                <label htmlFor="passport">
                  <a className="add-document-item not-active passport"><i class="fas fa-file-word"></i> Паспорт</a>
                </label>
                <label htmlFor="snls">
                  <a className="add-document-item not-active snls"><i class="fas fa-file-word"></i> СНИЛС</a>
                </label>
                <label htmlFor="army">
                  <a className="add-document-item not-active army"><i class="fas fa-file-word"></i> Военный билет</a>
                </label>
                <label htmlFor="work">
                  <a className="add-document-item not-active work"><i class="fas fa-file-word"></i> Трудовой договор</a>
                </label>
              </div>
              <div className="add-document-items">
                <label htmlFor="card">
                  <a className="add-document-item not-active card"><i class="fas fa-file-word"></i> Миграц. карта</a>
                </label>
                <label htmlFor="patent">
                  <a className="add-document-item not-active patent"><i class="fas fa-file-word"></i> Патент</a>
                </label>
                <label htmlFor="registration">
                  <a className="add-document-item not-active registration"><i class="fas fa-file-word"></i> Регистрация</a>
                </label>
              </div>
            </div>
            <div className="worker__checker">
              <div className="worker__check" onClick={e => {
                e.target.classList.add('active');
                setChecked(true);
                clicks++;
                if (clicks > 2) {
                  setChecked(false);
                  clicks = 0;
                  e.target.classList.remove('active');
                }
              }}></div>
              <span className="ino">Иностранец</span>
            </div>
            <div className="window__btns worker-btns">
              <button className="worker-btn window__btn" onClick={e => {
                document.querySelector(".black-co-bg").style.display = "none";
                document.querySelector(".worker-window").style.display = "none";
              }}>Закрыть</button>
              <button className="window__btn worker-btn" onClick={e => {
                setChecked(false);
                Funcs.clearAdd(".add-coworkers_inputs");
                if (
                  Funcs.checkerLength(document.querySelector("#fio").value) &
                  Funcs.checkerLength(document.querySelector("#born-date").value) &
                  Funcs.checkerLength(document.querySelector("#address").value) &
                  Funcs.checkerLength(document.querySelector("#fact-address").value) &
                  Funcs.checkerLength(document.querySelector("#number").value) &
                  Funcs.checkerLength(document.querySelector("#startWork").value) &
                  Funcs.checkerLength(document.querySelector("#position").value) &
                  Funcs.checkerLength(document.querySelector("#paymentSum").value) &
                  photo != undefined
                ) {
                  newWorker = {
                        profilePhoto: photo,
                        name: document.querySelector("#fio").value,
                        born: document.querySelector("#born-date").value,
                        address: document.querySelector("#address").value,
                        factAddress: document.querySelector("#fact-address").value,
                        commentary: document.querySelector("#commentary").value,
                        number: document.querySelector("#number").value,
                        startWork: document.querySelector("#startWork").value,
                        division: document.querySelector("#division-description").innerText,
                        position: document.querySelector("#position").value,
                        paymentSum: document.querySelector("#paymentSum").value,
                        payment: document.querySelector("#payment-description").innerText,
                        status: true,
                        foreigner: checked,
                        documents: documents
                  };
                  Funcs.addDocument(newWorker, setCoworkers);
                  document.querySelector(".black-co-bg").style.display = "none";
                  document.querySelector(".worker-window").style.display = "none";
                }
              }}>Добавить</button>
            </div>
          </div>
        </div>
      </div>
      <div className="eddit-worker-window">
        <div className="worker__title">
          <span id="eddit-w-name"></span><span id="status" className="retired" onClick={e => {
            coworkers.forEach(cw => {
              if (cw.number == currentEddit.number) {
                cw.status = !cw.status;
                Funcs.reloadCoworkers(setCoworkers);
                document.querySelector(".eddit-worker-window").style.display = "none";
                document.querySelector(".black-co-bg").style.display = "none";
              };
            });
          }}>Удалить</span>
        </div>
        <div className="worker__content">
          <aside className="worker__aside">
            <div className="worker__photo"
                onMouseEnter={e => document.querySelector(".worker__photo_eddit-photo").style.opacity = "100%"}
                onMouseLeave={e => document.querySelector(".worker__photo_eddit-photo").style.opacity = "0%"}
            >
              <img className="img" id="eddit-img" alt="ava" />
              <input type="file" id="worker__photo-input" id="eddit-p" onChange={e => {
                  if (Funcs.checkFileType(e.target.files[0])) {
                    Funcs.fileLoader(e.target.files[0], document.querySelector("#eddit-img"));
                    coworkers.forEach(cw => {
                      if (cw.number == currentEddit.number) {
                        cw.profilePhoto = e.target.files[0];
                      };
                    });
                  };
              }} />
              <label htmlFor="eddit-p">
                <div className="worker__photo_eddit-photo">
                  <i className="fas fa-camera cam"></i>
                </div>
              </label>
            </div>
            <label className="worker__label">Номер телефона</label>
            <input className="worker__input eddit_coworkers_inputs" id="eddit-w-number" />
            <label className="worker__label">Дата приема</label>
            <input className="worker__input eddit_coworkers_inputs" id="eddit-w-startwork" />
            <label className="worker__label select">Подразделение</label>
            <div className="worker__select">
              <span className="worker__item-type" id="eddit-division-description"
                  onMouseOver={e => {
                     document.querySelector("#eddit-division-items").style.display = "block"
                  }}
              >Администрация</span> <img src={f} />
              <div className="worker__select-items" id="eddit-division-items"
                onMouseLeave={e => document.querySelector("#eddit-division-items").style.display = "none"}
                onClick={e => {
                  if (e.target.className == "worker__select-item") {
                    document.querySelector("#eddit-division-description").innerText = e.target.innerText;
                  }
                }}
              >
                <div className="worker__select-item">Администрация</div>
                <div className="worker__select-item">Бар</div>
                <div className="worker__select-item">Официанты</div>
                <div className="worker__select-item">Кухня</div>
                <div className="worker__select-item">Технический персонал</div>
              </div>
            </div>
            <label className="worker__label select">Должность</label>
            <input className="worker__input eddit_coworkers_inputs" id="eddit-w-position" />
            <label className="worker__label select">Тип оплаты</label>
            <div className="worker__select"
              onMouseOver={e => document.querySelector("#eddit-payment").style.display = "block"}
            >
                <span className="worker__item-type" id="eddit-payment-description">Ставка</span> <img src={f} />
                <div className="worker__select-items" id="eddit-payment"
                  onMouseLeave={e => document.querySelector("#eddit-payment").style.display = "none"}
                  onClick={e => {
                    if (e.target.className == "worker__select-item") {
                      document.querySelector("#eddit-payment-description").innerText = e.target.innerText;
                    }
                  }}
                >
                  <div className="worker__select-item">Оклад</div>
                  <div className="worker__select-item">Почасовая ставка</div>
                  <div className="worker__select-item">Посуточная ставка</div>
              </div>
            </div>
            <label className="worker__label">Ставка/оклад</label>
            <input className="worker__input" id="eddit-w-payment" />
          </aside>
          <div className="worker__fields">
            <div className="worker__field-inputs">
              <div className="worker__field-input-box">
                <label className="worker__label fio">ФИО</label>
                <input className="worker__field-input eddit_coworkers_inputs" id="eddit-w-fio" />
              </div>
              <div className="worker__field-input-box date-born">
                <label className="worker__label date">Дата рождения</label>
                <input className="worker__field-input eddit_coworkers_inputs" id="eddit-w-born" />
              </div>
            </div>
            <label className="worker__label">Адрес прописки</label>
            <input className="worker__field-input just-input eddit_coworkers_inputs" id="eddit-w-address" />
            <label className="worker__label fac">Фактический адрес</label>
            <input className="worker__field-input just-input eddit_coworkers_inputs" id="eddit-w-fact" />
            <label className="worker__label">Комментарий</label>
            <input className="worker__commentary eddit_coworkers_inputs" id="eddit-w-commentary" />
            <label className="worker__label add-doc-d">Прикрепить документ</label>
            <div className="worker__add-document">
              <input type="file" id="eddit-passport" data-document="passport" className="add-doc"
                onChange={e => Funcs.edditUploadFile(e.target.files[0], currentEddit, {
                  document: e.target.dataset.document,
                  blob: e.target.files[0]
                }, setCoworkers, coworkers)
              }
              />
              <input type="file" id="eddit-snls" data-document="snls" className="add-doc" />
              <input type="file" id="eddit-army" data-document="army" className="add-doc" />
              <input type="file" id="eddit-work" data-document="work" className="add-doc" />
              <input type="file" id="eddit-card" data-document="card" className="add-doc" />
              <input type="file" id="eddit-patent" data-document="patent" className="add-doc" />
              <input type="file" id="eddit-registration" data-document="registration" className="add-doc" />
              <div className="add-document-items">
                <label htmlFor="eddit-passport">
                  <a className="add-document-item"><i class="fas fa-file-word"></i> Паспорт <span className="red">Ред.</span></a>
                </label>
                <label htmlFor="eddit-snls">
                  <a className="add-document-item"><i class="fas fa-file-word"></i> СНИЛС <span className="red">Ред.</span></a>
                </label>
                <label htmlFor="eddit-army">
                  <a className="add-document-item"><i class="fas fa-file-word"></i> Военный билет <span className="red">Ред.</span></a>
                </label>
                <label htmlFor="eddit-work">
                  <a className="add-document-item"><i class="fas fa-file-word"></i> Трудовой договор <span className="red">Ред.</span></a>
                </label>
              </div>
              <div className="add-document-items">
                <label htmlFor="eddit-card">
                  <a className="add-document-item"><i class="fas fa-file-word"></i> Миграц. карта <span className="red">Ред.</span></a>
                </label>
                <label htmlFor="eddit-patent">
                  <a className="add-document-item"><i class="fas fa-file-word"></i> Патент <span className="red">Ред.</span></a>
                </label>
                <label htmlFor="eddit-registration">
                  <a className="add-document-item"><i class="fas fa-file-word"></i> Регистрация <span className="red">Ред.</span></a>
                </label>
              </div>
            </div>
            <div className="worker__checker">
              <div className="worker__check" onClick={e => {
                e.target.classList.add('active');
                clicks++;
                if (clicks > 2) {
                  clicks = 0;
                  e.target.classList.remove('active');
                }
              }}></div>
              <span className="ino">Иностранец</span>
            </div>
            <div className="window__btns worker-btns">
              <button className="worker-btn window__btn" onClick={e => {
                document.querySelector(".black-co-bg").style.display = "none";
                document.querySelector(".eddit-worker-window").style.display = "none";
              }}>Закрыть</button>
              <button className="window__btn worker-btn" onClick={e => {
                Funcs.clearAdd(".eddit_coworkers_inputs")
                if (
                  Funcs.checkerLength(document.querySelector("#eddit-w-fio").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-w-born").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-w-fact").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-w-address").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-w-commentary").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-w-number").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-w-startwork").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-w-position").value) &
                  Funcs.checkerLength(document.querySelector("#eddit-w-payment").value)
                ) {
                  coworkers.forEach(cw => {
                    if (cw.number == currentEddit.number) {
                      coworkers[coworkers.indexOf(cw)] = {
                        profilePhoto: cw.profilePhoto,
                        name: document.querySelector("#eddit-w-fio").value,
                        born: document.querySelector("#eddit-w-born").value,
                        factAddress: document.querySelector("#eddit-w-fact").value,
                        address: document.querySelector("#eddit-w-address").value,
                        commentary: document.querySelector("#eddit-w-commentary").value,
                        number: document.querySelector("#eddit-w-number").value,
                        startWork: document.querySelector("#eddit-w-startwork").value,
                        division: document.querySelector("#eddit-division-description").innerText,
                        position: document.querySelector("#eddit-w-position").value,
                        payment: document.querySelector("#eddit-payment-description").innerText,
                        paymentSum: document.querySelector("#eddit-w-payment").value,
                        status: cw.status,
                        foreigner: checked
                      };
                      Funcs.reloadCoworkers(setCoworkers);
                    };
                  });
                }

                document.querySelector(".eddit-worker-window").style.display = "none";
                document.querySelector(".black-co-bg").style.display = "none";
              }}>Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="container coworkers__container">
        <div className="coworkers__nav">
          <div className="coworkers__nav-title">
            <h3 className="coworkers__title">Сотрудники</h3>
            <img src={add} onClick={e => {
              document.querySelector(".black-co-bg").style.display = "block";
              document.querySelector(".worker-window").style.display = "block";
            }} />
          </div>
          <div className="coworkers__nav-categories">
            <div className="coworkers__nav-category">ФИО <img src={pl} /></div>
            <div className="coworkers__nav-category">Номер телефона <img src={pl} /></div>
            <div className="coworkers__nav-category">Должность <img src={pl} /></div>
            <div className="coworkers__nav-category">Статус <img src={pl} /></div>
          </div>
        </div>
        <div className="coworkes__files">
          {
            coworkers.map(worker => {
              return (
                <div className="coworkers__file" id={worker.id} key={index++}>
                    <div className="coworkers__file-item worker-name">{worker.name}</div>
                    <div className="coworkers__file-item worker-number">{worker.number}</div>
                    <div className="coworkers__file-item worker-position">{worker.position}</div>
                    <div className="coworkers__file-item">
                      <span className={worker.status ? "worker" : "retired"}>{worker.status ? "Действующий" : "Уволен"}</span>
                      <img src={file} className="ancet" onClick={e => {
                        coworkers.forEach(cw => {
                          if (e.target.parentNode.parentNode.querySelector(".worker-number").innerText == cw.number) {
                            currentEddit = cw;
                            Funcs.innerText("#eddit-w-name", currentEddit.name);
                            Funcs.innerText("#status", currentEddit.status ? "Удалить" : "Возобновить");
                            Funcs.innerText("#eddit-w-fio", currentEddit.name, "v");
                            Funcs.innerText("#eddit-w-born", currentEddit.born, "v");
                            Funcs.innerText("#eddit-w-address", currentEddit.address, "v");
                            Funcs.innerText("#eddit-w-fact", currentEddit.factAddress, "v");
                            Funcs.innerText("#eddit-w-commentary", currentEddit.comment, "v");
                            document.querySelector("#status").className = currentEddit.status ? "retired" : "worker";
                            Funcs.innerText("#eddit-w-number", currentEddit.number, "v");
                            Funcs.innerText("#eddit-w-startwork", currentEddit.startWork, "v");
                            Funcs.innerText("#eddit-w-position", currentEddit.position, "v");
                            Funcs.innerText("#eddit-w-payment", currentEddit.paymentSum, "v");
                            Funcs.fileLoader(currentEddit.profilePhoto, document.querySelector("#eddit-img"));
                          };
                        });
                        document.querySelector(".eddit-worker-window").style.display = "block";
                        document.querySelector(".black-co-bg").style.display = "block";
                      }} />
                    </div>
                  </div>
                );
              }
            )
          }
        </div>
    </div>
  </div>
  );
}
