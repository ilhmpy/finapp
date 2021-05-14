import React, { useEffect, useState } from "react";
import { Calendar } from "@progress/kendo-react-dateinputs";
import "./FinappCalendarTheme/finapp-theme.css";
import { DateRangePicker } from "@progress/kendo-react-dateinputs";
import Functions from "../pages/Functions.js";

const Funcs = new Functions();

export default function CalendarModal(props) {
  const { state, display, leave, setRange, def, setState, range } = props;

  let rangeDates = [];

  return (
    <div className="calendar"
      onMouseLeave={e => leave(e)}
      style={
        {
          position: "absolute",
          zIndex: "99",
          marginTop: "31px",
          width: "616px",
          height: "62px",
          borderRadius: "5px",
          background: "#fff",
          paddingLeft: "13px",
          paddingTop: "11px",
          marginLeft: "-15px",
          display: display ? "block" : "none",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.15)"
        }
      }
    >

      <DateRangePicker
        onChange={e => {
          setState(def);

          const start = new Date(e.value.start);
          const end = new Date(e.value.end);

          let sDate = start.getDate();
          let eDate = end.getDate();

          const formatDateStart = `${start.getDate() < 10 ? "0" + start.getDate() : start.getDate()}.${start.getMonth() < 10 ? "0" + start.getMonth() : start.getMonth()}.${start.getFullYear()}`;
          const formatDateEnd = `${end.getDate() < 10 ? "0" + end.getDate() : end.getDate()}.${end.getMonth() < 10 ? "0" + end.getMonth() : end.getMonth()}.${end.getFullYear()}`;

          if (
            (formatDateStart != "01.00.1970" & formatDateEnd != "01.00.1970") ||
            (formatDateStart != "01.00.1970" || formatDateEnd != "01.00.1970")
          ) {

            if (formatDateStart != "01.00.1970" & formatDateEnd != "01.00.1970") {
              rangeDates = [];

              for (let i = sDate; (i >= sDate & i <= eDate) || (i <= eDate); i++) {
                rangeDates = [...rangeDates, `${i < 10 ? "0" + i : i}.${start.getMonth() < 10 ? "0" + (1 + start.getMonth()) : 1 + start.getMonth()}.${start.getFullYear()}`];
              };

              setRange(rangeDates);
              Funcs.filterByDates(setState, rangeDates);
            };
          };
      }} />
    </div>
  )
}
