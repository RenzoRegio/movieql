export const people = [
  {
    id: 1,
    name: "Renzo",
    age: 23,
    gender: "Male",
    student: true,
  },
  {
    id: 2,
    name: "Miguel",
    age: 22,
    gender: "Male",
    student: false,
  },
  {
    id: 3,
    name: "Gab",
    age: 21,
    gender: "Male",
    student: true,
  },
  {
    id: 4,
    name: "Alex",
    age: 27,
    gender: "Male",
    student: false,
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
