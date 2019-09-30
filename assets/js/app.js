// get today date
const date = new Date();
let today = date.getDate().toString();
let thisMonth = (date.getMonth() + 1).toString();
if (today.length === 1) today = `0${today}`;
if (thisMonth.length === 1) thisMonth = `0${thisMonth}`;

const cards = [
  new Card('23/09 (Seg)', 'Astolfo', 'Sobrevivencia em um mundo pós-apocalíptico'),
  new Card('30/09 (Seg)', 'Renata', 'Pitching'),
  new Card('01/10 (Ter)', 'Filipe Gonçalves', 'Planejamento e Gestão de Projetos'),
  new Card('03/10 (Qui)', 'Marco Modena', 'Hacktoberfest'),
  new Card('08/10 (Qua)', 'Lucas', 'Mundo digital, números binários, lógica, booleana, computadores, pq bug?'),
  new Card('14/10 (Seg)', 'Adamy', 'SASS'),
  new Card('16/10 (Qua)', 'Felipe Padua', 'Javascript com abordagem funcional'),
];


// Iteration in all Cards, verifing if card already pass, is today or is sometime in future
cards.forEach((el) => {
  const cardDate = el.date;
  const cardDateDay = cardDate.slice(0, 2);
  const cardDateMonth = cardDate.slice(3, 5);

  if (today === cardDateDay && thisMonth === cardDateMonth) {
    el.changeWarning();
  } else if (thisMonth > cardDateMonth) {
    console.log(thisMonth, cardDateMonth);
    el.changeOpacity();
  } else if (thisMonth === cardDateMonth && today > cardDateDay) {
    console.log('month = card && day > card');
    el.changeOpacity();
  }

  el.cardConstructor('.section');
});