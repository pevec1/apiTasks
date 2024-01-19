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
    }
  }

  modal(index) {
    console.log("modal ok");
    let onclk = document.querySelectorAll(".onclick");
    const modalMain = document.getElementById("modal_main");

    onclk.forEach((el, indexEl) => {
      el.onclick = function (e) {
        console.log(e.target.dataset.id);
        // index[e.target.dataset.id];
        let main = document.querySelectorAll(".modal__disc__item__disc");
        main.forEach((el, indexEl) => {
          el.innerHTML = index[e.target.dataset.id * 6 - 5 + indexEl];
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
}

let cat = new Catalog("api/v1/task");
let cat2 = new Catalog("api/v1/task/0");
