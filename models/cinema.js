const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {
    return film.title;
  })
};

Cinema.prototype.filmByTitle = function (filmName) {
  return this.films.find((film) => {
    return film.title === filmName;
  })
};

Cinema.prototype.filmsOfGenre = function (filmGenre) {
  return this.films.filter((film) => {
    return film.genre === filmGenre;
  })
};

Cinema.prototype.checkFilmsFromYear = function (releaseYear) {
  return this.films.some((film) => {
    return film.year === releaseYear;
  })
};

Cinema.prototype.checkFilmsOverLength = function (minutes) {
  return this.films.every((film) => {
    return film.length >= minutes;
  })
};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((accum, film) => {
    return accum + film.length;
  }, 0);
};

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter((film) => {
    return film[property] === value;
  });
};

module.exports = Cinema;
