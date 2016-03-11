/*

    using simple prototype to function

*/
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
person.prototype.nationality = "English";

var myFather = new person("John", "Doe", 50, "blue");
console.log("My father is " + myFather.nationality);
myFather.nationality = "French";
console.log("My father is " + myFather.nationality);