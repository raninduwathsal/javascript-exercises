const findTheOldest = function (array) {
    return array.reduce((oldestPerson, currentPerson) => {
      const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldestPerson;
    });
  };
const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
};
    

// Do not edit below this line
module.exports = findTheOldest;
