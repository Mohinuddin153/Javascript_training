class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  display() {
    console.log(`USER:
      ${this.name} 
      ${this.age} 
      ${this.gender} 
      `);
  }
}

let person = new Person("John", 32, "Male");
person.display();

//extends from person class
class Employee extends Person {
  constructor(name, age, gender, empId, salary) {
    super(name, age, gender);
    this.empId = empId;
    this.salary = salary;
  }
  display() {
    super.display();
    console.log(`Employee details:
         ${this.empId}
         ${this.salary}
         `)
  }
}
let emp = new Employee("John", 32, "Male", 202, 60000);
emp.display();
