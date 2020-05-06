// // Lecture: Let and Cont

// const name = "Jane Smith" // Immutable, and which is not gonna change
// let age = 23; // Mutable

// // var = function scoped and let is block scoped

// // ES5
// function driversLicense5(passedTest) {
//     if(passedTest) {
//         var firstName = 'John'
//         var yob = '1995';
//     }
//     console.log(firstName + " passed drivig test and born in " + yob);
// }
// driversLicense5(true);

// //ES6
// // Block scoped as we used let and const
// function driversLicense6(passedTest) {
//     let firstName = 'Jyo'
//     const yob = 1995;
//     if(passedTest) {
//         console.log(firstName + " passed drivig test and born in " + yob);
//     }
// }

// driversLicense6(true);

// var i = 23;
// for (var i = 0; i< 5; i++) {
//     console.log(i);
// }
// console.log(i);



////////////////////////////////////////
//// Lecture: Blocks and IIFEs

// {
//     let a = 1;
//     const b = 2;
//     var c = "100";
// }
// console.log(c);

// (function() {
//     var c = 23;
// })();

////////////////////////////////////////
///// Lecture: Strings

// let firstName = 'John';
// let lastName = 'Smith'
// const yob = 1996;

// function calcAge(year) {
//     return 2020 - yob;
// }

// // ES5
// console.log("He is " + calcAge(yob));

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yob}. Today, he is ${calcAge(yob)} years old`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('h'));
// console.log(n.includes('L'));
// console.log(`${firstName} `.repeat(10));

////////////////////////////////////////
///// Lecture: Arrow functions

// const years = [1990, 1965, 1999, 1943];

// // ES5
// var ages5 = years.map(function(el) {
//     return 2020 - el;
// })
// console.log(ages5);

// // ES6
// let ages6 = years.map(el => 2020 - el);
// console.log(ages6)

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${2020 - el}.`;
// });
// console.log(ages6);

//////////////////////////////////////
///// Lecture: Arrow functions 2

// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
        
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + " and it is " + self.color;
//             alert(str);
//             console.log(this);
//         })
//     }
// }
// box5.clickMe();

// ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
    
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + " and it is " + this.color;
//             alert(str);
//             console.log(this);
//         })
//     }
// }
// box6.clickMe();


// ES5
// function Person(name) {
//     this.name = name;
//     console.log(this.name);
// }

// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el) {
//         return this.name + " is friends with " + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['Bob', 'Bob2', 'Bob3'];
// new Person('John').myFriends5(friends);

// // ES6
// Person.prototype.myFriends6 = function(friends) {
//     var arr = friends.map(el =>  `${this.name} is friends with  ${el}`);
//     console.log(arr);
// }

// var friends = ['Bob', 'Bob2', 'Bob3'];
// new Person('Mike').myFriends6(friends);


///////////////////////////////////////
///// Lecture: Destructuring

// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ['John', 26]
console.log(name + " " + age);

const obj = {
    firstName: "John",
    lastName: "Smith"
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1996);
console.log(age2);
console.log(retirement);
