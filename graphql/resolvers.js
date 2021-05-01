const Renzo = {
  name: "Renzo",
  age: 23,
  gender: "Male",
  student: true,
};

const resolvers = {
  Query: {
    person: () => Renzo,
  },
};

export default resolvers;
