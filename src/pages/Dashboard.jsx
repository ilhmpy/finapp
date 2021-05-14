import "./pagesStyles/Dashboard.css";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

function Dashboard() {
  return (
    <>
    <main className="home">
      <div className="black-bg">
        <div className="accept-window">
          <div className="accept__title">Подтвердить остаток в кассе</div>
          <label className="remainder">Остаток в кассе</label>
          <div className="accept__remainder">1000.00 ₽</div>
          <label className="remainder accept__addit-remainder">Действительный остаток в кассе</label>
          <input className="accept__remainder accept__addit-input" />
          <label className="remainder accept__addit-remainder textarea-remainder">Комментарий</label>
          <textarea className="accept__addit-textarea" />
          <div className="accept__buttons">
            <button className="accept__button inner-btns" onClick={e => {
              document.querySelector(".accept-window").classList.add("accept__addit");
            }}>Ошибка</button>
            <button className="accept__button  inner-btns" id="blue--btn" onClick={e => {
              document.querySelector(".black-bg").style.display = "none";
              document.querySelector(".accept-window").style.display = "none";
            }}>Подтвердить</button>
            <button className="accept__button accept__addit-buttons" onClick={e => {
              document.querySelector(".accept-window").classList.remove("accept__addit");
            }}>Назад</button>
            <button className="accept__button  accept__addit-buttons" onClick={e => {
              {/* отправка данных с инпута действительного остатка в бд */}
              document.querySelector(".accept-window").classList.remove("accept__addit");
              document.querySelector(".black-bg").style.display = "none";
              document.querySelector(".accept-window").style.display = "none";
            }}>Отправить</button>
          </div>
        </div>
      </div>
      <main className="container home__container">
        <div className="home__signals">
          <div className="signals__box">Сигналы <span>3</span></div>
          <div className="home__warning-cards">
            <div className="home__warning-card">
              <div className="warning__card-title">Внимание! <a href="#">Подробнее</a></div>
              <div className="warning__card-content">
                В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.
              </div>
            </div>
            <div className="home__warning-card">
              <div className="warning__card-title">Внимание! <a href="#">Подробнее</a></div>
              <div className="warning__card-content">
                В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.
              </div>
            </div>
            <div className="home__warning-card">
              <div className="warning__card-title">Внимание! <a href="#">Подробнее</a></div>
              <div className="warning__card-content">
                В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.
              </div>
            </div>
            <div className="home__warning-card">
              <div className="warning__card-title">Внимание! <a href="#">Подробнее</a></div>
              <div className="warning__card-content">
                В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.
              </div>
            </div>
          </div>
        </div>
        <div className="home__infographic">
          <div className="info">
            <Bar
              data={{
                labels: [
                  "30.11 - 6.12",
                  "7.12 - 13.12",
                  "14.12 - 20.12",
                  "14.12 - 20.12",
                  "14.12 - 20.12",
                  "14.12 - 20.12",
                  "14.12 - 20.12",
                  "14.12 - 20.12",
                  "14.12 - 20.12",
                  "14.12 - 20.12"
                ],
                datasets: [
                  {
                    label: "Недельняя выручка",
                    data: [
                      "0000",
                      "20000",
                      "40000",
                      "60000",
                      "60000",
                      "100000"
                    ],
                    backgroundColor: "#3F40F0",
                    borderColor: "#3F40F0"
                  }
                ]
              }}
              width="100%"
              height="100%"
              options={{

              }}
             />
          </div>
          <div className="info__cards">
            <div className="info__card">
              <div className="info__card-title">Выручка за последние 5 дней</div>
              <h3 className="info__title">110 000,00 ₽</h3>
            </div>
            <div className="info__card">
              <div className="info__card-title">Выручка за день</div>
              <h3 className="info__title">110 000,00 ₽</h3>
            </div>
          </div>
        </div>
      </main>
    </main>
    </>
  );
}

export default Dashboard;
