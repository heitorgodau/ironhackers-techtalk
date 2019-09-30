// get today date
const date = new Date();
const today = date.getDate().toString();
const thisMonth = (date.getMonth() + 1).toString();
const cards = [
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
  const cardDateMonth = cardDate.slice(4, 5);

  if (today === cardDateDay && thisMonth === cardDateMonth) {
    el.changeWarning();
  }

  el.cardConstructor('.section');
});
