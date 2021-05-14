import React, { useState, useEffect } from "react";
import addScanIcon from "../img/imports/add_scan_icon.svg";
import addIcon from "../img/imports/add_icon.svg";


function getSum(num) {
  return Math.round(num * 100) / 100;
}

export default function Revenue() {
  const [token, setToken] = useState("");
  const [rows, setRows] = useState([]);

  //modal stuff
  const [open, setOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [newCashFree, setNewCashFree] = useState(0);
  const [newCash, setNewCash] = useState(0);
  const [newNP, setNewNP] = useState(0);
  const [newTables, setNewTables] = useState(0);
  const [newGuests, setNewGuests] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setNewCashFree(0);
    setNewCash(0);
    setNewGuests(0);
    setNewNP(0);
    setNewTables(0);
    handleDateChange(new Date());
    setOpen(false);
  };

  const handleAdd = async () => {
    let req = await fetch(
      "http://localhost:8000/api/app/revenue/?format=json",
      {
        method: "POST",
        body: JSON.stringify({
          cash_income: newCash,
          cash_free_income: newCashFree,
          np: newNP,
          tables: newTables,
          guests: newGuests,
          added_at: `${selectedDate.getFullYear()}-${
            selectedDate.getMonth() + 1
          }-${selectedDate.getDate() + 1}`,
          //add facility and user detection
          facility: 1,
          added_by: 1,
        }),
        headers: {
          "content-type": "application/json",
          Authorization: `token ${token}`,
        },
      }
    );
    if (req.status === 201) {
      console.log("uspeh");
    } else {
      alert("fail");
    }
    fetchData();
    handleClose();
  };

  const fetchData = async () => {
    let token = localStorage.getItem("token");
    setToken(token);
    let req = await fetch(
      "http://localhost:8000/api/app/revenue/?format=json&ordering=-added_at",
      {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    if (req.status === 200) {
      let data = await req.json();
      let rows = [];
      for (let d of rows) {
        let didAdd = false;
        if (rows.length === 0) {
          rows = [{}];
          rows[0].date = d.added_at;
          rows[0].revenues = [
            { cashFree: d.cash_free_income, cash: d.cash_income, np: d.np },
          ];
          rows[0].sum = d.cash_free_income + d.cash_income + d.np;
          rows[0].numTables = d.tables;
          rows[0].numGuests = d.guests;
          rows[0].avgTable = getSum(rows[0].sum / rows[0].numTables);
          rows[0].avgGuest = getSum(rows[0].sum / rows[0].numGuests);
          didAdd = true;
        } else {
          for (let i in rows) {
            if (rows[i].date == d.added_at) {
              let newRevs = rows[i].revenues;
              newRevs.push({
                cashFree: d.cash_free_income,
                cash: d.cash_income,
                np: d.np,
              });
              rows[i].revenues = newRevs;
              rows[i].sum =
                rows[i].sum + d.cash_free_income + d.cash_income + d.np;
              rows[i].numTables = rows[i].numTables + d.tables;
              rows[i].numGuests = rows[i].numGuests + d.guests;
              rows[i].avgTable = getSum(rows[i].sum / rows[i].numTables);
              rows[i].avgGuest = getSum(rows[i].sum / rows[i].numGuests);
              didAdd = true;
            }
          }
        }
        if (!didAdd) {
          let index = rows.length;
          rows[index] = {};
          rows[index].date = d.added_at;
          rows[index].revenues = [
            { cashFree: d.cash_free_income, cash: d.cash_income, np: d.np },
          ];
          rows[index].sum = d.cash_free_income + d.cash_income + d.np;
          rows[index].numTables = d.tables;
          rows[index].numGuests = d.guests;
          rows[index].avgTable = getSum(
            rows[index].sum / rows[index].numTables
          );
          rows[index].avgGuest = getSum(
            rows[index].sum / rows[index].numGuests
          );
          didAdd = true;
        }
      }
      setRows(rows);
      console.log(rows);
    } else {
      console.log(req);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">

    </div>
  )
}
