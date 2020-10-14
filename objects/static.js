class User {
    constructor(name,age) {
        this.name = name;
        this.age=age;
    }
    static hello(x) {
        return x.name+" "+x.age;
    }
}

user = new User("John",45);

console.log(User.hello(user));