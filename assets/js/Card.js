class Card {
  constructor(date, talker, subject) {
    this._date = date;
    this._talker = talker;
    this._subject = subject;
    this.warning = false;
    this.opacity = false;
  }

  get date() {
    return this._date;
  }

  get talker() {
    return this._talker;
  }

  get subject() {
    return this._subject;
  }

  cardConstructor(elementSelector) {
    let card = '';
    if (this.warning) {
      card = `<div class="card card--warning">
        <h3 class="card__title">${this.date}</h3>
        <h4 class="card__talker">${this.talker}</h4>
        <p class="card__subject">${this.subject}</p>
      </div>`;
    } else if (this.opacity) {
      card = `<div class="card card--opacity">
        <h3 class="card__title">${this.date}</h3>
        <h4 class="card__talker">${this.talker}</h4>
        <p class="card__subject">${this.subject}</p>
      </div>`;
    } else {
      card = `<div class="card">
        <h3 class="card__title">${this.date}</h3>
        <h4 class="card__talker">${this.talker}</h4>
        <p class="card__subject">${this.subject}</p>
      </div>`;

    }
    const element = document.querySelector(elementSelector);
    element.innerHTML += card;
  }

  changeWarning() {
    this.warning = !this.warning;
  }

  changeOpacity() {
    this.opacity = !this.opacity;
  }
}
