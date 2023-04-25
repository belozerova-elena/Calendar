let date = new Date();
let todayDay = date.getDate();
let todayMonth = date.getMonth();
let todayYear = date.getFullYear();
let nowMonth = null;
let nowYear = null;

function render(month, year) {
  let daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  let day = 1;
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  let firstDayInMonth = new Date(year, month).getDay();
  nowMonth = month;
  nowYear = year;

  let navDate = document.querySelector('.js-date');
  navDate.innerHTML = `${months[month]} ${year}`;

  let thead = document.querySelector('.js-thead');
  thead.innerHTML = '';

  for (let i = 1; i < 2; i++) {
    let tr = document.createElement('tr');
    tr.classList.add('table__tr');
    for (let i = 0; i < daysOfWeek.length; i++) {
      let td = document.createElement('td');
      td.classList.add('calendar__table-td');

      td.innerHTML = `${daysOfWeek[i]}`;
      tr.appendChild(td);
    }
    thead.appendChild(tr);
  }

  let tbody = document.querySelector('.js-tbody');
  tbody.innerHTML = '';

  for (let i = 1; i < 7; i += 1) {
    let tr = document.createElement('tr');
    tr.classList.add('table__tr');

    for (let j = 1; j <= 7; j += 1) {
      let td = document.createElement('td');
      td.classList.add('calendar__table-td');
      if (day <= daysInMonth) {  
        if (i === 1) {      
          if (j >= firstDayInMonth) { 
            td.innerHTML = `${day}`;
            td.id = day;
            day += 1;

          } else {
            td.innerHTML = '';
            td.id = 0;
          }
        } else {
          td.innerHTML = day;
          td.id = day;
          day += 1;
        }
        tr.appendChild(td);
      } else {
        break;
      }
    }
    tbody.appendChild(tr);
  }
}

(function () {
  let nextBtn = document.querySelector(".js-next");
  nextBtn.addEventListener("click", () => {
    if (nowMonth + 1 < 12) {
      nowMonth += 1;
    } else {
      nowMonth = 0;
      nowYear += 1;
    }
    render(nowMonth, nowYear);
  });

  let prevBtn = document.querySelector(".js-prev");
  prevBtn.addEventListener("click", () => {
    if (nowMonth - 1 >= 0) {
      nowMonth -= 1;
    } else {
      nowMonth = 11;
      nowYear -= 1;
    }
    render(nowMonth, nowYear);
  });  
})();

render(todayMonth, todayYear);