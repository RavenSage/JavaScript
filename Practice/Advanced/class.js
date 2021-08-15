/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static goodName = "KrishnaSai";
  static printHi() {
    //Variables and functions declared with static are
    //only available With in the class
    console.log("Hai");
  }
  print() {
    console.log(this.name);
  }
}

const person = new Person("Sai", 25);
console.log(Person.goodName);
 */

class CreateUser {
  constructor(email, password, language) {
    this.email = email;
    this.password = password;
    this.language = language;
  }
  printPassword() {
    console.log(this.password);
  }
}

const user = new CreateUser("sair7781@hotmail.com", "Animal@123", "Spanish");
console.log(user);
