class Catalog {
  constructor(url) {
    this.items = document.getElementById("items");
    this.url = url;
    //this.xhr = new XMLHttpRequest();
    this.changeXhr(this.url);
  }

  changeXhr(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        let json = JSON.parse(xhr.response);
        console.log(json);
        if (json[0] == "task") {
          this.init(json, 0);
        }
        if (json[0] == "id") {
          this.modal(json);
        }
        if (json[0] == "search") {
          this.search(json);
        }
      }
    };
  }

  init(index, page) {
    let table = document.querySelector(".list");
    let body = document.querySelector(".items");
    let j,
      p = 0;
    if (table) {
      console.log(index);
      if (index[0] == "task") {
        body.innerHTML = "";
        console.log(index.length);
        let item = [];
        let column = document.createElement("div");
        column.classList.add("column", "item", "item_active");
        if (page == 0) {
          for (let i = 1; i < index.length / 100; i = i + 5) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("onclick");
            row.dataset.id = index[i];
            //if (page==j) row.classList.add("item_active");
            //else row.classList.remove("item_active");
            item[i] = document.createElement("div");
            item[i].classList.add("task");
            item[i].dataset.id = index[i];
            item[i].textContent = index[i];
            console.log(index[i]);
            row.appendChild(item[i]);

            item[i + 1] = document.createElement("div");
            item[i + 1].classList.add("title");
            item[i + 1].dataset.id = index[i];
            item[i + 1].textContent = index[i + 1];
            console.log(index[i + 1]);
            row.appendChild(item[i + 1]);

            item[i + 2] = document.createElement("div");
            item[i + 2].classList.add("date");
            item[i + 2].dataset.id = index[i];
            item[i + 2].textContent = index[i + 2];
            console.log(index[i + 2]);
            row.appendChild(item[i + 2]);
            column.appendChild(row);
          }
          body.appendChild(column);
        }

        let prev_link = document.querySelector(".arrow_prev");
        let next_link = document.querySelector(".arrow_next");

        console.log(page);
        prev_link.onclick = function () {
          page = page - 1;
          if (page < 0) {
            page = 99;
          }
          column.innerHTML = "";
          body.innerHTML = "";
          let i = 1 + page * 10 * 5;
          for (i; i < (index.length * (page + 1)) / 100; i = i + 5) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("onclick");
            row.dataset.id = index[i];
            //if (page==j) row.classList.add("item_active");
            //else row.classList.remove("item_active");
            item[i] = document.createElement("div");
            item[i].classList.add("task");
            item[i].dataset.id = index[i];
            item[i].textContent = index[i];
            console.log(index[i]);
            row.appendChild(item[i]);

            item[i + 1] = document.createElement("div");
            item[i + 1].classList.add("title");
            item[i + 1].dataset.id = index[i];
            item[i + 1].textContent = index[i + 1];
            console.log(index[i + 1]);
            row.appendChild(item[i + 1]);

            item[i + 2] = document.createElement("div");
            item[i + 2].classList.add("date");
            item[i + 2].dataset.id = index[i];
            item[i + 2].textContent = index[i + 2];
            console.log(index[i + 2]);
            row.appendChild(item[i + 2]);
            column.appendChild(row);
          }
          body.appendChild(column);
        };
        next_link.onclick = () => {
          page = page + 1;
          if (page >= 100) {
            page = 0;
          }
          column.innerHTML = "";
          body.innerHTML = "";
          let i = 1 + page * 10 * 5;
          for (i; i < (index.length * (page + 1)) / 100; i = i + 5) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("onclick");
            row.dataset.id = index[i];
            //if (page==j) row.classList.add("item_active");
            //else row.classList.remove("item_active");
            item[i] = document.createElement("div");
            item[i].classList.add("task");
            item[i].dataset.id = index[i];
            item[i].textContent = index[i];
            console.log(index[i]);
            row.appendChild(item[i]);

            item[i + 1] = document.createElement("div");
            item[i + 1].classList.add("title");
            item[i + 1].dataset.id = index[i];
            item[i + 1].textContent = index[i + 1];
            console.log(index[i + 1]);
            row.appendChild(item[i + 1]);

            item[i + 2] = document.createElement("div");
            item[i + 2].classList.add("date");
            item[i + 2].dataset.id = index[i];
            item[i + 2].textContent = index[i + 2];
            console.log(index[i + 2]);
            row.appendChild(item[i + 2]);
            column.appendChild(row);
          }
          body.appendChild(column);
        };
      }
      if (index[0] == "search") {
        body.innerHTML = "";
        console.log(index.length);
        let item = [];
        let column = document.createElement("div");
        column.classList.add("column", "item", "item_active");
        if (page == 0) {
          for (let i = 1; i < index.length; i = i + 5) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("onclick");
            row.dataset.id = (i - 1) / 5 + 1;
            //if (page==j) row.classList.add("item_active");
            //else row.classList.remove("item_active");
            item[i] = document.createElement("div");
            item[i].classList.add("task");
            item[i].dataset.id = (i-1)/5+1;
            item[i].textContent = index[i];
            console.log(index[i]);
            row.appendChild(item[i]);

            item[i + 1] = document.createElement("div");
            item[i + 1].classList.add("title");
            item[i + 1].dataset.id = (i - 1) / 5 + 1;
            item[i + 1].textContent = index[i + 1];
            console.log(index[i + 1]);
            row.appendChild(item[i + 1]);

            item[i + 2] = document.createElement("div");
            item[i + 2].classList.add("date");
            item[i + 2].dataset.id = (i - 1) / 5 + 1;
            item[i + 2].textContent = index[i + 2];
            console.log(index[i + 2]);
            row.appendChild(item[i + 2]);
            column.appendChild(row);
          }
          body.appendChild(column);
        }
      }
    }
  }

  modal(index) {
    console.log("modal ok");
    console.log(index);
    let onclk = document.querySelectorAll(".onclick");
    const modalMain = document.getElementById("modal_main");

    onclk.forEach((el, indexEl) => {
      el.onclick = function (e) {
        console.log(e.target.dataset.id);
        // index[e.target.dataset.id];
        let main = document.querySelectorAll(".modal__disc__item__disc");
        main.forEach((el, indexEl) => {
          el.innerHTML = index[e.target.dataset.id*6 - 5 + indexEl];
        });

        if (modalMain.className == "modal") {
          modalMain.className = "modal modal_active";
        }
        const modalClose = document.querySelectorAll(
          ".modal__close.modal__close_times"
        );

        modalClose.forEach((elem, key) => {
          elem.onclick = function () {
            if (modalMain.className == "modal modal_active") {
              modalMain.className = "modal";
            }
          };
        });
      };
    });
    const modal = document.querySelector(".modal");
    document.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("modal_active");
      }
    });
  }

  search(index) {
    // console.log(index);
    let key, value, result, result2;
    let button = document.getElementById("search");
    button.addEventListener("keyup", (event) => {
      event.preventDefault();
      if (event.keyCode === 13) {
        let matchString = document.getElementById("search").value;
        result = ["search"];
        result2=["id"];
        //index.splice(0,1)
        for (key in index) {
          if ((key - 2) % 6 == 0 || key == 2) {
            //index.hasOwnProperty(key) && !isNaN(parseInt(key, 10))&&
            value = index[key];
            let val0 = index[Number(key) - 1],
              val1 = index[Number(key) + 1],
              val2 = index[Number(key) + 2],
              val3 = index[Number(key) + 3],
              val4 = index[Number(key)+4];
            if (value.toLowerCase().indexOf(matchString) != -1) {
              // You've found it, the full text is in `value`.
              // So you might grab it and break the loop, although
              // really what you do having found it depends on
              // what you need.
              console.log();
              if (value !== null) {
                result.push(val0, value, val1,"", "");
                result2.push(val0, value, val1, val2, val3, val4);
                // console.log(result);
              }
            }
          }
        }
        document.querySelector(".results").innerHTML =
          "Результат поиска:  " ;
        this.init(result, 0);
        this.modal(result2);  
      }
    });
  }
}

let cat = new Catalog("api/v1/task");
let cat2 = new Catalog("api/v1/task/0");
let cat3 = new Catalog("api/v1/search");
