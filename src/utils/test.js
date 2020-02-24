class User {
  constructor(name, email) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email);
  }
}

class Admin extends User {
  sayHello() {
    console.log('Hello World');
  }
}
const userOne = new User('Daniel', 'daniel@example.com');
const admin = new Admin('Daniel', 'daniel@exampleTwo.com');

const users = [userOne, admin];

console.log(users);

module.exports = User;
