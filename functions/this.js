
var person = {
    firstName: "John",
    lastName: "Doe",

    fullName: function () {
        return this.firstName + " " + this.lastName;//this keyword 
    }
};
console.log(person.fullName())