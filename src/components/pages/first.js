const person = {
  firstName: "Taieb",
  lastName: "Hossain",
  show: {
    education: "University of chittagong",
    invoked: function () {
      console.log(this.lastName);
    },
  },
};

person.invoked.call(person.show);
