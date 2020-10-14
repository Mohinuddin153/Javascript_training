let user = {
  firstName: "John",
  lastName: "Smith",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log(user.fullName)

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.firstName);
console.log(user.lastName); 