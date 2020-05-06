// // var firstName = "Jyo";
// // var age = 24;
// // console.log(firstName+ " "+age);

// // var job,  isMarried;
// // job = 'Programmer';
// // isMarried = false;

// // console.log(job + " " +isMarried);

// // // Variabel Mutation
// // age = "25";
// // prompt("What is the last name");

// var MarkMass = 78;
// var JohnMass = 92;
// var MarkHeit = 169;
// var JohnHeit = 195;
// var BMIMark = MarkMass/(MarkHeit**2);
// var BMIJohn = JohnMass/(JohnHeit**2);

// var BMIHigherMark = (BMIMark > BMIJohn);

// console.log(BMIHigher); 

// var firstName = "John";
// var civilStatus = "single";
// civilStatus = false;
// if(civilStatus && false){
//     console.log(firstName + " is Married");
// }
// else
// {
//     console.log(firstName + " is single");
// }


// var egg;
// egg = "jj";
// if (egg)
// {
//     console.log("Good boy");
// }
// else{
//     console.log("Bad boy");
// }



// var J1 = 2;
// var J2 = 2;
// var J3 = 2;
// var Javg = (J1+J2+J3)/3;

// var M1 = 2;
// var M2 = 2234;
// var M3 = 2;
// var Mavg = (M1+M2+M3)/3;

// if (Javg > Mavg)
// {
//     console.log("Winner is John and his average is "+ Javg);
// }
// else if (Javg < Mavg){
//     console.log("Winner is Mike and his avarage is " + Mavg);
// }
// else
// {
//     console.log("Average is equal");
// }


//Comparing arrays
// let array1 = [1,2,3,4];
// let array2 = [2,3,4,5];

// function isSameArray(array1, array2)
// {
//     if (array1.length !== array2.length) return false;
//     for (let i = 0; i< array1.length; i++)
//     {
//         if (array1[i] !== array2[i]) return false;
//     }
//     return true;
// }

// isSameArray(array1, array2);


// {
//     var y = 100;
// }
// console.log(y)

//Functions

// function calAge(birthYear)
// {
//     return 2020 - birthYear;
// }

// var ageJyo = calAge(1996);
// var ageJyo2 = calAge(1996);
// var ageJyo3 = calAge(1996);
// console.log(ageJyo, ageJyo2, ageJyo3)


// var str = "Jyothish Kall";
// var strarr = str.split(' ');
// var newarray = [];

// for (i=0;i<strarr.length;i++)
// {
//     strarr[i] = strarr[i].split('').reverse().join().replace(/,/g,"");
//     console.log(strarr[i])
//     newarray.push(strarr[i])
// }

// var aa = newarray.join(' ');
// console.log(strarr)




// Functions

// function calAge(birthYear)
// {
//     return 2020 - birthYear;
// }

// function yearsUntilRetirement(year, firstName) 
// {
//     var age = calAge(year);
//     var retirement = 65 - age;
//     console.log(firstName+ " retires in "+age+ " years")
// }

// yearsUntilRetirement(1971, "Jyothish")
// yearsUntilRetirement(1990, "Patanjali")
// yearsUntilRetirement(1961, "Partha")


// var whatDoyouDo = function(job, firstName)
// {
//     switch(job)
//     {
//         case 'Teacher':
//             return firstName + " teaches kids in nearest school";
//         case 'Programmer':
//             return firstName + " programs and changes the world";
//         default:
//             return firstName + " wastes his life";
//     }
// }


// console.log(whatDoyouDo('Teacher', "Partha Sai"));
// console.log(whatDoyouDo('Programmer', "Jyothish"));
// console.log(whatDoyouDo('Teachers', "Patanjali"));


// let id1 = ['Jyothish', 20, 'tcs'];
// let id2 = new Array('Patanjali', 21, 'christ');
// let id3 = ['Partha', 22, 'tcs'];
// let id4 = ['Giri', 20, 'Acharya'];

// for (let i=0, j=1; i< id1.length;i++,j++)
// {
//     console.log(id2[i])
// }

// id2.push('Yellow')
// console.log(id2)

// let bill = [124, 48, 268];
// let tip = [20, 15, 10];
// let totals = [];
// let tips = [];

// function tipCalc (bill)
// {
//     if (bill <= 50)
//     {
//         tips.push(bill*0.2)
//         totals.push(bill + (bill*0.2));
//     }
//     else if (bill >= 50 && bill <= 200)
//     {
//         tips.push((bill*0.15));
//         totals.push(bill + (bill*0.15));
//     }
//     else if (bill > 200)
//     {
//         tips.push(bill*0.10);
//         totals.push(bill + (bill*0.1));
//     }
// }

// for (i = 0; i< bill.length;i++)
// {
//     tipCalc(bill[i]);
// }

// console.log(totals, tips)

// function tipCalc (bill)
// {
//     var perc;
//     if (bill < 50)
//     {
//         perc = 0.2;
//     }
//     else if (bill >= 50 && bill < 200)
//     {
//         perc = 0.15;
//     }
//     else
//     {
//         perc = 0.1;
//     }
//     return perc*bill;
// }


// let bill = [124, 48, 268];


// let tips = [ tipCalc (bill[0]), tipCalc (bill[1]), tipCalc (bill[2]), ]
// let totals = [ bill[0]+tipCalc(bill[0]), bill[1]+tipCalc(bill[1]), bill[2]+tipCalc(bill[2]), ]

// console.log(tips, totals)


// let obj = {
//     firstName: 'Jyo',
//     lastName: 'K',
//     yearBirth: 1995,
//     studies: [
//         'B.Sc(Maths, Computer Science, Statistics)',
//         'Tirupati',
//         2016,
//     ],
//     current: 'Bangalore',
//     calcAge: function (){
//         this.age =  2020 - this.yearBirth;
//     }
// };

// obj.calcAge();
// console.log(obj);

// let obj1 = new Object();
// obj1.firstName = 'Jyo Obj1';
// obj1.lastName = 'K obj1';
// obj1['yearBirth'] = '1996 obj1'
// console.log(obj1['lastName'])

// var MarkMass = 78;
// var JohnMass = 92;
// var MarkHeit = 169;
// var JohnHeit = 195;

// let john = {
//     name: 'John',
//     height: 195,
//     weight: 92,
//     calcbmi: function(){
//         this.bmi = this.weight/(this.height**2);
//     }
// };

// let mark = {
//     name: 'Mark',
//     height: 169,
//     weight: 78,
//     calcbmi: function(){
//         this.bmi = this.weight/(this.height**2)
//     }
// };

// john.calcbmi();
// mark.calcbmi();
// console.log(john, mark)

// console.log(mark.bmi>john.bmi ? 'Mark\'s BMI is higher than John\'s': 'John\'s BMI is higher than Mark\'s');


// const times = 3;

// myLoop:
// for (let i = 0; i < times; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (j === 1) continue myLoop;
//         console.log('Inner loop');
//     }
//   console.log('Outer loop');
// }

// console.log('Outside of the loop');
// 'strict mode'
// const price = 'high';

// switch (price) {
//     case 1:
//         company = 'Apple';
//     default:
//         company = 'Microsoft';
// }

// console.log(company);

// 'strict mode'
// const food = 'orange';
// let foodType;

// switch (food) {
//     case 'carrot':
//         foodType = 'vegetable';
//         break;
//     case 'apple', 'orange':
//         foodType = 'fruit';
//         break;
// }

// console.log(foodType);

// function calVit(num)
// {
//     var counter = 1;
//     var numstr = String(num).split('');
//     var nn = 1;
//     for (i=0;i<numstr.length;i++)
//     {
//         nn = Number(numstr[i]*nn);
//         if (nn>9)
//         {
//              counter++;
//             console.log(counter);
//             calVit(nn);
//         }
//     }
// }
// calVit(55);

// function likes(names)
// {
//     if (names.length == 0)
//     {
//         console.log('no one likes this');
//     }
//     else if (names.length == 1)
//     {
//         console.log(names[0]+ ' likes this');
//     }
//     else if (names.length == 2)
//     {
//         console.log(names[0]+' and '+names[1]+ ' like this');
//     }
//     else if (names.length == 3)
//     {
//         console.log(names[0]+', '+names[1]+ ' and '+names[2]+'like this');
//     }
//     else if (names.length > 3)
//     {
//         console.log(names[0]+', '+names[1]+ ' and '+(names.length-2)+ ' others like this')
//     }
// }
// likes(['peter'])


// let n = 1234;
// let spli = (n + '').split('').map((i) => { return Number(i*i); }).join().replace(/,/g,"");
// console.log(spli)

// let nn = 1234;
// let splitt = (n + '').split('').map((i) => { return Number(i*i); });
// console.log(splitt);

// let str = 'reveresme';
// let spl = str.split('').reverse().join().replace(/,/g,"");      ;
// console.log(spl)

// let str = 'There is one is the only There one in the world in this universe';
// let numstr1 = str.split(' ');
// for (i=0;i<numstr1.length;i++)
// {
//     var counter = 1;
//     for (j=i+1;j<numstr1.length;j++)
//     {
//         if (numstr1[i] == numstr1[j])
//         {
//             counter++
//         }
//     }
//     if (counter >1)
//     {
//         console.log(numstr1[i]);
//     }
// }

// let arr = ['Jyothish', 1996, 'Tirupati', 'Wasted']
// for(i=arr.length-1;i>=0;i--)
// {
//     console.log(arr[i]);
// }

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/



// var johnfam = 
// var totals = [];
// var tip = [];
// function tipCalc(johnfam)
// {
    // if (johnfam <50)
    // {
    //     tip = 0.2;
    // }
    // else if (johnfam >50 && johnfam<200)
    // {
    //     tip = 0.15;
    // }
    // else(johnfam > 200)
    // {   
    //     tip = 0.1;
    // }
    // return tip*johnfam;
// }

// for(i=0;i<johnfam.length;i++)
// {
//     console.log(typeof tipCalc(johnfam[i]));
// }

var tip = [];
var totals = [];

// var johnFamBills = {
//     name: 'Jyothish',
//     bills: [124, 48, 268, 180, 42],
//     calcTip: function (){
//         this.tip = [];
//         this.totals= [];
//         for (i=0;i<this.bills.length;i++)
//         {
//             var perc;
//             var bill = this.bills[i];
//             if (bill <50)
//             {
//                 perc = 0.2;
//             }
//             else if (bill >=50 && bill<200)
//             {
//                 perc = 0.15;
//             }
//             else
//             {   
//                 perc = 0.1;
//             }
//             this.tip[i] = perc*bill;
//             this.totals[i] = this.tip[i]+bill;
//         }    
//     }
// }

// var johnFamBills = {
//     name: 'Jyothish',
//     bills: [124, 48, 268, 180, 42],
//     calcTip: function(){
//         this.totals = [];
//         this.tip = [];
//         for (i=0;i<this.bills.length;i++)
//         {
//             var perc;
//             var bill = this.bills[i];
//             if(bill < 50)
//             {
//                 perc = 0.2;
//             }
//             else if (bill >= 50 && bill< 200)
//             {
//                 perc = 0.15;
//             }
//             else
//             {
//                 perc = 0.1;
//             }
//             this.tip[i] = perc*bill;
//             this.totals[i] = this.tip[i]+bill;
//         }
//     }
// }

// johnFamBills.calcTip();
// console.log(johnFamBills);


// function ageCalc(year)
// {
//     console.log(2020 - year);
//     console.log(this)
// }
// ageCalc(1996);

var age = {
    name: 'Jyo',
    yearBirth: 1996,
    clacAge: function(){
        function calc(){
        }
    }
}

age.clacAge();