// let - value may change later, scope vahi...jaha declare hoga
// const - values fixed, scope vahi...jaha declare hoga
// var - old way of declaring variables, global scope, ek baar declare karne ke baad uska scope pura program me hota hai, 
// variable naming rules----->
// 1. variable name should not start with number
// 2. variable name should not contain spaces
// 3. variable name should not contain special characters except _ and $
// 4. variable name should not be a reserved keyword like let, var, const,if,else and etc.
//5. yeh case senstitive bhi hita hai
let age = 18;
age = 19;
age=20;
age=21; 
console.log(age);
// let allows updates
// output will be 21

const country = "india";
console.log(country);
// output will be india 
//country = "usa";
// it will error as it is constant and cannot be changed

var name = "aditya";
console.log(name);
// we can store data in variables which can be string, number, boolean, null, undefined and etc.
let money = 155050;
money = money +10000;
console.log("this is my money",money);


for (let i =1; i<=5; i++){
    console.log(i);
    var temp = 66 // yaha likha hua hai but sabh jagah clg karenge toh yeh he value aayegi
    const abc = 'aditya';
}
console.log(temp);
console.log(typeof country, typeof money, typeof temp);
//yeh type of use hota hai yeh jann ne ke iye. ki data kaisa hai string hai,number hai kya hai
console.log(temp);
