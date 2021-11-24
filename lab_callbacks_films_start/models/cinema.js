const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findTitles = function () {
let result = this.films.map(a => a.title);
return result;
}

Cinema.prototype.findByTitle = function(title){
  let result = this.films.find(element => title == element.title)
  return result;
}

Cinema.prototype.filterByGenre = function(genre){
  let result = this.films.filter(element => element.genre == genre)
  return result;
}

Cinema.prototype.filmFromYear = function(year){
  let result = this.films.some(element => element.year == year);
  return result;
}

Cinema.prototype.filmLength = function(length){
  let result = this.films.every(element => element.length > length);
  return result;
}

Cinema.prototype.filmTotalLength = function(length){
  let list = this.films.map(a => a.length);
  let result = list.reduce((previousValue, currentValue) => previousValue + currentValue);
  return result;
}

Cinema.prototype.filmsByProperty = function(property, value){
  let result = this.films.filter(element => element[property] == value)
  return result;
}


module.exports = Cinema;
