// get today date
const date = new Date();
let today = date.getDate().toString();
let thisMonth = (date.getMonth() + 1).toString();
if (today.length === 1) today = `0${today}`;
if (thisMonth.length === 1) thisMonth = `0${thisMonth}`;

// Iteration in all Cards, verifing if card already pass, is today or is sometime in future
const cardsMaker = (array) => {
  array.forEach((card) => {
    const cardDate = card.date;
    const cardDateDay = cardDate.slice(0, 2);
    const cardDateMonth = cardDate.slice(3, 5);

    if (today === cardDateDay && thisMonth === cardDateMonth) {
      card.changeWarning();
    } else if (thisMonth > cardDateMonth) {
      card.changeOpacity();
    } else if (thisMonth === cardDateMonth && today > cardDateDay) {
      card.changeOpacity();
    }

    card.cardConstructor('.section');
  });
};

const listPopulator = (array) => {
  const sectionSecundary = document.querySelector('.section--secondary');
  const subjectsList = document.createElement('ul');
  array.forEach((subject) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'section__list');
    listItem.innerText = subject;
    subjectsList.appendChild(listItem);
  });
  sectionSecundary.appendChild(subjectsList);
};

cardsMaker(cards);
listPopulator(otherSubjects);
