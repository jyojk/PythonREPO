//Function Constructor
/*




var john = {
    name: 'John',
    dOB: 1996,
    job: 'teacher'
};

//Person constructor
var Person = function(name, dOB, job){
    this.name = name;
    this.dOB = dOB;
    this.job = job;
};  

Person.prototype.calcAge = function(){
    console.log(2020 - this.dOB);
}

Person.prototype.lastName = 'Smith';


// Instantiation, new: A new empty object is created and after that Person(constructor) is invoked with passed arguments.
//So 'new' points 'this' variable to the empty object which 'new' created instead of Global object(which is Person here)
var john = new Person('John', 1996, 'teacher')  
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();


console.log(john.lastName, jane.lastName);

*/

/*

//Object.create: We will first define object that will act as the prototype and will

var personProto = {
    calcAge: function(){
        console.log(2020 - this.dob);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.dob = 1996;
john.job = 'developer';

var jyo = Object.create(personProto,
{
    name:{value: 'Jyo'},
    dob: {value: 1996},
    job: {value: 'developer'}
})
*/

/*
//Primitives
var num = 20;
var num2 = num;
num = 50;
console.log(num)
console.log(num2)
//num2 outputs 20 because variable has their own copy of the values instead of referencing 

//Objects
var obj1 = {
    name: 'Jyo',
    age: 24
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 24;
var obj = {
    name: 'Jyothish',
    city: 'Bangalore'
};

function change(a, b){
    a = 30;
    b.city = 'Mumbai';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/


// var years = [1990, 1989, 2000, 2005, 2002];

// function arrayCacl(arr, fn) {
//     var arrRes = [];
//     for(var i = 0;i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return 2020 - el;
// }

// function isFullAge(el) {
//      return el >=18;
// }

// function maxHeartRate(el) {
//     if (el >= 18){
//     return Math.round(206.9 - (0.67 + el));
//     } else{
//         return -1;
//     }
// }

// var ages = arrayCacl(years, calcAge);


// var fullAges = arrayCacl(ages, isFullAge);
// var rates = arrayCacl(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates)





// var subjects, marks, totals;

// function bsc(addsub) {
//     subjects = ['Maths', 'Statistics', 'CS'];
//     marks = [89, 90, 99, 99, 97];
//     totals = calTot(marks);
//     subjects.push(addsub);
//     return subjects;
// }

// function calTot(totals){
//     var tot = 0;
//     for (var i=0;i<totals.length;i++)
//     {
//         tot += totals[i];
//     }
//     return tot;
// }

// console.log(bsc("AI"));

/*
// Function returing another function

function interviewQues(job)
{
    if (job === 'designer') 
    {
    return function(name) 
        {
            console.log(name + ', can you please explain what UX design is?');
        }
    } 
    else if (job === 'teacher') 
    {
        return function (name) 
        {
            console.log('What subject do you teach, ' + name + '?');
        }
    } 
    else 
    {
        return function(name) 
        {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teachQues = interviewQues('teacher')('Jyo');
var designerQues = interviewQues('designer')('Jyo');;
*/

////////////////////////////
/////// Lecture: IIFE

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(100);

//////////////////////
////// Closures

// function retirement(retirementAge) {
//     var a = ' years left until retirement';
//     return function (dob) {
//         var age = 2020 - dob;
//         console.log((retirementAge - age) + a);
//     }
// }
// var retUS = retirement(66)(1996);
// var retGer = retirement(65)(1996);
// var retIce = retirement(67)(1996);

// function interviewQues(job)
// {
//     return function (name) {
//         if (job === 'designer') 
//         {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//         else if (job === 'teacher') 
//         {
//             console.log('What subject do you teach, ' + name + '?');
//         } 
//         else 
//         {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQues('designer')('Jyothish');
// interviewQues('teacher')('Jyothish');
// interviewQues('')('Jyothish');

// (function(){
//     var z = 'Hello first function';
//     return function(){
//         console.log(z);
//         second(z);
//     };
// })()();

// function second(jus){
//     console.log(jus+ ' Hello Second function');
// }

// var a = 'Hello';
// first();

// function first() {
//     var b = 'Hi';
//     second();

//     function second() {
//         var c = 'Hey';
//         console.log(b+c)
//         third(c);
//     }
// }

// function third() {
//     var d = 'John';
// }

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function (style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentelmen! I\'m '+ this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         } else if (style === 'firendly') {
//             console.log('Hey whats up? I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age +' years old. Have a nice '+timeOfDay);
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 29,
//     job: 'designer',
// }

// john.presentation('firendly', 'evening');
// john.presentation.call(emily, 'firendly','afternoon'); // We can use 'call' method to access a function which is insed of an object from an other object.

// john.presentation.apply(emily, ['friendly', 'afternoon']);

// var johnFriendly = john.presentation.bind(emily, 'firendly')

// johnFriendly('morning');
// // johnFriendly('night');

// // Currying: It is technique of creating a function based on another function but with some preset parameter

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');



// var years = [1990, 1989, 2000, 2005, 2002];

// function arrayCacl(arr, fn) {
//     var arrRes = [];
//     for(var i = 0;i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return 2020 - el;
// }

// function isFullAge(limit, el) {
//      return el >= limit;
// }


// var ages = arrayCacl(years, calcAge);
// console.log(ages);

// var fullJapan = arrayCacl(ages, isFullAge.bind(this, 20));
// console.log(fullJapan);

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


(function(){
function Question (question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};


Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (i=0;i<this.answers.length;i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans) {
    if(this.correct == ans)
    {
        console.log('Correct answer!'); 
    }
    else
    {
        console.log('Incorrect answer, Try again');
    }
}


var q1 = new Question('Is JavaScript the best programming language in the world!?', ['Yes', 'No'], 0);
var q2 = new Question('Is Python the best programming language in the world!?', ['Yes', 'No'], 0);
var q3 = new Question('Is PHP the best programming language in the world!?', ['Yes', 'No'], 1);

var questions = [q1,q2,q3];
var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please enter the correct answer'));

questions[n].checkAnswer(answer);

})();


// (function(){
//     function Question (question, answers, correct){
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     };
    
    
//     Question.prototype.displayQuestion = function () {
//         console.log(this.question);
    
//         for (i=0;i<this.answers.length;i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }
    
//     Question.prototype.checkAnswer = function(ans) {
//         var sc;
//         if(this.correct == ans)
//         {
//             console.log('Correct answer!'); 
//             sc = keepScore(true);
//         }
//         else
//         {
//             console.log('Incorrect answer, Try again');
//             sc = keepScore(false);
//         }

//         this.displayScore(sc);
//     }

//     Question.prototype.displayScore = function(score) {
//         console.log('Your current score is: '+ score);
//         console.log('------------------')
//     }

    
    
//     var q1 = new Question('Is JavaScript the best programming language in the world!?', ['Yes', 'No'], 0);
//     var q2 = new Question('Is Python the best programming language in the world!?', ['Yes', 'No'], 0);
//     var q3 = new Question('Is PHP the best programming language in the world!?', ['Yes', 'No'], 1);

//     var questions = [q1,q2,q3];

//     function score () {
//         var sco = 0;
//         return function(correct){
//             if(correct){
//                 sco++;
//             }
//             return sco;
//         }
//     }

//     var keepScore = score();

//     function nextQues(){
//         var n = Math.floor(Math.random() * questions.length);
    
//         questions[n].displayQuestion();
    
//         var answer = prompt('Please enter the correcr answer');
    
//         if (answer !== 'exit')
//         {
//             questions[n].checkAnswer(parseInt(answer));
//             nextQues();
//         }
//     }
//     nextQues();    
    
// })();

























































