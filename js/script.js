const officeHours = [
  {
    day: 0,
    name: 'Sumit',
    start: '2:00',
    end: '4:00',
    sec: 546
  },
  {
    day: 0,
    name: 'Andrew',
    start: '3:00',
    end: '5:00',
    sec: 554
  },
  {
    day: 1,
    name: 'Zoë',
    start: '3:00',
    end: '5:00',
    sec: 554
  },
  {
    day: 1,
    name: 'Rob',
    start: '3:30',
    end: '5:30',
    sec: 546
  },
  {
    day: 3,
    name: 'Athiban',
    start: '3:30',
    end: '5:30',
    sec: 546
  },
  {
    day: 3,
    name: 'Rob',
    start: '3:30',
    end: '5:30',
    sec: 554
  },
  {
    day: 4,
    name: 'Nanya',
    start: '2:30',
    end: '4:30',
    sec: 546
  }
];

window.onload = () => {
  const days = [...document.querySelectorAll('.day')];
  officeHours.forEach(({ day, name, start, end, sec }) => {
    days[day].insertAdjacentHTML(
      'beforeend',
      `<div class="cs${sec}">
        <p class="ta">${name}</p>
        <p>${start} - ${end}</p>
        <p>${sec === 546 ? 'Web I' : 'Web II'}</p>
      </div>`
    );
  });
  const today = new Date().getDay() - 1;
  [...document.querySelectorAll('.d')][today].classList.add('today');
};
