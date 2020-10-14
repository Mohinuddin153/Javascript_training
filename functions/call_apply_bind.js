//call
function sayHi(phrase) {
  console.log(this.name + ': ' + phrase);
}

let user = { name: "John" };
let admin = { name: "Admin" };
sayHi.call(user, "user");

//apply for above example
sayHi.apply(admin, ["admin"]); // Admin

//bind
const obj = {
  x: 42,
  getX: function () {
    return this.x;
  }
};
const y = obj.getX;
const z = y.bind(obj);
console.log(z());