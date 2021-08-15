const person = {
  name: "John",
  friend: {
    name: "Max",
    friend: {
      name: "Bunny",
    },
  },
};

function printNames(currentPerson) {
  if (currentPerson == null) return;
  console.log(currentPerson.name);
  printNames(currentPerson.friend);
}

printNames(person);
