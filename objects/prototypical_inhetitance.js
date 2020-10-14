let animal = {
  eats: true,
  walk() {
    return "Animal walk"
  }
};
let rabbit = {
  jumps: true
};
let frog = {
  amphibian: true,
  __proto__: rabbit,//creates prototype from rabbit
};

rabbit.__proto__ = animal;
console.log(frog.jumps)
console.log(rabbit.eats);
console.log(rabbit.jumps);
console.log(rabbit.walk()); 