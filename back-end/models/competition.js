var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Vale la pena tener todas las competiciones guardadas en base de datos ?

var Competition = mongoose.model('Competition', new Schema({
  id: {type: Number, unique: true, required: true},
  league: {type: String, unique: true, required: true},
  name: {type: String, required: true},
  logo: String
}));

module.exports = Competition;

//En estas funciones si estan retornando el callback 

// Find all competitions
module.exports.getCompetitions = function(callback) {
  return Competition.find(callback);
};

// Find the competition with the given league-code
module.exports.getCompetition = function(league, callback) {
  return Competition.find({league: league}, callback);
};

// Save a given competition to the database
module.exports.saveCompetition = function(comp, callback) {
  Competition.create(comp, callback)
};

// Update the information of the given competition
module.exports.updateCompetition = function(league, comp, options, callback) {
  var query = {league: league};
  var update = {
    name: comp.name,
    logo: comp.logo
  };
  Competition.findOneAndUpdate(query, update, options, callback);
};
