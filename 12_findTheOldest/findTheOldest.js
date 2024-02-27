const findTheOldest = function (people = []) {
  return people.reduce((oldest, person) =>
    (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth >
    (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth
      ? person
      : oldest
  );
};

// Do not edit below this line
module.exports = findTheOldest;
