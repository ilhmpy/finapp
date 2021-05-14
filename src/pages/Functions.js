export default class Functions {
    constructor() {
      this.filtration = this.filtration.bind(this);
      this.changeChecked = this.changeChecked.bind(this);
      this.addDocument = this.addDocument.bind(this);
      this.changeAllCheckeds = this.changeAllCheckeds.bind(this);
      this.createObject = this.createObject.bind(this);
      this.findDate = this.findDate.bind(this);
      this.findInData = this.findInData.bind(this);
      this.showCurrentEddit = this.showCurrentEddit.bind(this);
      this.findAndDelete = this.findAndDelete.bind(this);
      this.edditDocument = this.edditDocument.bind(this);
      this.uploadFile = this.uploadFile.bind(this);
      this.edditUploadFile = this.edditUploadFile.bind(this);
    }

 filtration(filterSetting, setData) {
    setData(prev => {
      return prev.map(e => {
          return ({
              ...e,
             files: e.files.filter(fl => fl.company === filterSetting)
          });
        });
     });
  };

  changeChecked(target, data, setData, type = "number") {
    if (type == "number") {
      data.forEach(dt => dt.files.forEach(fl => {
        if (fl.number == target) {
          fl.innerChecked = !fl.innerChecked;
        };
      }));
    }

    if (type == "accept") {
      data.forEach(dt => dt.files.forEach(fl => {
        if (fl.number == target) {
          fl.acceptChecked = !fl.acceptChecked;
        };
      }));
    }

    if (type == "date") {
      data.forEach(dt => {
        if (dt.date == target) {
          dt.allChecked = !dt.allChecked;
        };
      });
    }

    if (type == "number") {
      setData(state => {
        return state.map(st => {
          return ({
              ...st,
             files: st.files.filter(fl => fl.innerChecked == true || fl.innerChecked == false)
          });
        });
      });
   }

   if (type == "date") {
     setData(state => {
       return state.map(st => {
         return ({
             ...st,
         });
       });
     });
   }

   if (type == "accept") {
     setData(state => {
       return state.map(st => {
         return ({
             ...st,
            files: st.files.filter(fl => fl.acceptChecked == true || fl.acceptChecked == false)
         });
       });
     });
   }
}

  addDocument(value, setData, setPrevData = "") {
    setData(state => {
      return [
           ...state,
           value
        ];
    });

    if (setPrevData != "") {
      setPrevData(prev => {
        return [
            ...prev,
            value
          ];
       });
    }
  };

  changeAllCheckeds(data, type = "allChecked") {
    if (type == "allChecked") data.forEach(dt => dt.allChecked = !dt.allChecked);
    if (type == "innerChecked") data.forEach(dt => dt.files.forEach(fl => fl.innerChecked = !fl.innerChecked));
    if (type == "acceptChecked") data.forEach(dt => dt.files.forEach(fl => fl.acceptChecked = !fl.acceptChecked));
  };


  changeDescription(selector, text) {
    selector.innerText = text;
  }

  changeStateDomElement(selectorBlock = "", selectorNone = "") {
    if (selectorBlock != "") selectorBlock.style.display = "block";
    if (selectorNone != "") selectorNone.style.display = "none";
  }


   getDate()  {
      const date = new Date();
      let day = String(date.getDate()).padStart(2, '0');
      let month = String(date.getMonth() + 1).padStart(2, '0');
      let year = date.getFullYear();
      return `${day}.${month}.${year}`;
  }

  createObject(date = "", company, number, type, sum, nds, comment = "", accept, id = 0) {
      let object = {
        date: date == "" ? this.getDate() : date,
        allChecked: false,
        files: [
          {
            id,
            company,
            innerChecked: false,
            number,
            type: type == "Без наличный расчет" || type == "Б" ? "Б" : "Н",
            acceptChecked: accept == undefined ? false : accept,
            sum, nds,
            comment: comment == "" ? "-" : comment,
          }
        ]
      };
    return object;
  };

  findDate(date, data) {
    data.forEach(dt => {
      if (dt.date == date) return true;
    });
    return false;
  };

  findInData(find, object) {
    return object.forEach(massive => {
        if (massive.date == find.date) {
          return massive.files.forEach(fl => {
            return find.files.forEach(ffl => {
              if (fl.number == ffl.number) {
                return {
                  massive: object.indexOf(massive),
                  file: massive.files.indexOf(fl)
                };
              };
            });
          });
        };
    });
  };

  showCurrentEddit(object, windowObj = {}) {
    windowObj.title.innerText = object.files[0].company;
    windowObj.dateInput.value = object.date;
    windowObj.numberInput.value = object.files[0].number;
    windowObj.sumInput.value = object.files[0].sum;
    windowObj.ndsInput.value = object.files[0].nds;
    windowObj.edditTextarea.value = object.files[0].comment;
  };

  findAndDelete(find, object, defaultObject, set, setDefault) {
    object.forEach(massive => massive.files.forEach(fl => {
       if (fl.number == find.files[0].number) massive.files.splice([massive.files.indexOf(fl)], 1);
    }));

    defaultObject.forEach(massive => massive.files.forEach(fl => {
       if (fl.number == find.files[0].number) massive.files.splice([massive.files.indexOf(fl)], 1);
    }));

    set(state => {
      return state.map(mp => {
        return ({
          ...mp,
          files: mp.files.filter(fl => fl.acceptChecked == true || fl.acceptChecked == false)
        });
      });
    });

    setDefault(def => {
      return def.map(df => {
        return ({
          ...df,
          files: df.files.filter(fl => fl.acceptChecked == true || fl.acceptChecked == false)
        });
      });
    });
  };

  reloadComponent(set, setDefault) {
    set(state => {
      return state.map(mp => {
        return ({
          ...mp,
          files: mp.files.filter(fl => fl.acceptChecked == true || fl.acceptChecked == false)
        });
      });
    });

    setDefault(def => {
      return def.map(df => {
        return ({
          ...df,
          files: df.files.filter(fl => fl.acceptChecked == true || fl.acceptChecked == false)
        });
      });
    });
  }

  edditDocument (find, object, defaultObject, newFindObject, set, setDefault) {
    object.forEach(massive => massive.files.forEach(fl => {
       if (fl.number == find.files[0].number) {
         massive.date = newFindObject.date;
         massive.files[massive.files.indexOf(fl)] = {
           id: newFindObject.files[0].id,
           company: newFindObject.files[0].company,
           innerChecked: newFindObject.files[0].innerChecked,
           nds: newFindObject.files[0].nds,
           number: newFindObject.files[0].number,
           sum: newFindObject.files[0].sum,
           type: newFindObject.files[0].type,
           comment: newFindObject.files[0].comment,
           acceptChecked: newFindObject.files[0].acceptChecked,
         };
       };
    }));

    defaultObject.forEach(massive => massive.files.forEach(fl => {
       if (fl.number == find.files[0].number) {
         massive.date = newFindObject.date;
         massive.files[massive.files.indexOf(fl)] = massive.files[massive.files.indexOf(fl)] = {
           id: newFindObject.files[0].id,
           company: newFindObject.files[0].company,
           innerChecked: newFindObject.files[0].innerChecked,
           nds: newFindObject.files[0].nds,
           number: newFindObject.files[0].number,
           sum: newFindObject.files[0].sum,
           type: newFindObject.files[0].type,
           comment: newFindObject.files[0].comment,
           acceptChecked: newFindObject.files[0].acceptChecked,
         };
       };
    }));

    set(state => {
      return state.map(mp => {
        return ({
          ...mp,
          files: mp.files.filter(fl => fl.acceptChecked == true || fl.acceptChecked == false)
        });
      });
    });

    setDefault(def => {
      return def.map(df => {
        return ({
          ...df,
          files: df.files.filter(fl => fl.acceptChecked == true || fl.acceptChecked == false)
        });
      });
    });
  };

  checkFileType(files, mode = "images") {
    let regJPG = /image\/jpeg/g;
    let regPDF = /.+\/pdf$/g;

    if (mode == "images") if (regJPG.test(files.type)) return true; else return false;
    if (mode == "documents") if (regPDF.test(files.type)) return true; else return false;
  };

  fileLoader(read, selector = document.querySelector("#img__ava")) {
    let reader = new FileReader();
    reader.readAsDataURL(read);

    reader.onload = e => {
        selector.setAttribute("src", e.target.result);
    };
  };

  checkerLength(len) {
    if (len.length > 0) return true; else return false;
  };

  clearAdd(...val) {
    const domElements = document.querySelectorAll(val);
    domElements.forEach(elm => {
      if (!elm.value.length > 0) elm.classList.add("clear");
      else elm.classList.remove("clear");
    });
  };

  innerText(value, text, mode = "t") {
    if (mode == "t") document.querySelector(value).innerText = text;
    if (mode == "v") document.querySelector(value).value = text;
  };

  reloadCoworkers(set) {
    set(st => {
      return st.map(s => {
        return ({
          ...s
        });
      });
    });
  };

  uploadFile(files, massive, filesObject, selector, mode = "documents") {
    if(this.checkFileType(files, mode)) {
      if (massive.indexOf(filesObject) == -1) return [...massive, filesObject]; else console.error(new Error("Файл уже имеется в массиве."));
    } else {
      console.error(new Error("Тип файла не соответствует ожидаемому."));
    };
  };

  edditUploadFile(files, current, filesObject, set, workers) {
    workers.forEach(wk => {
      if (wk.number == current.number) {
        if (wk.documents.indexOf(files) == -1) {
          wk.documents = [...wk.documents, files];
          console.log(wk.documents, files);
        } else {
          wk.documents[wk.documents.indexOf(files)] = files;
          console.log(wk.documents, files);
        };
        this.reloadCoworkers(set);
      };
    });
  };

  search(searching, data) {
    data(dt => dt.filter(t => t.company.indexOf(searching) != -1));
  };

  findInCompaniesAndChange(massive, set, find, position) {
    massive.forEach(mas => {
      if (mas.company == find) mas.position = position;
    });
  };

  scrollTo() {
    window.scrollBy(0, -100000);
  };

  filterByDates(setState, filter) {
    setState(state => state.filter(date => {
        if (typeof filter == "object") {
          for (let i = 0; i <= filter.length; i++) {
            if (filter[i] == date.date) return date;
          };
        } else {
          if (filter == date.date) return date;
        };
    }));
  };
};
