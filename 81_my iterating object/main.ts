//let an object
let bioData = {
  name: "Hashir",
  age: 18,
  degree: "Intermediate",
};
//making a function taking iterating object as an argument, for/in
//its check one by one object keys as iterating object
for (let property in bioData) {
  console.log(property);
}
