// const pi = 3.14;

// var first_name = "Faraz";
// var middle_name = "Ali";
// var last_name = "Ahmad";

// var age = 23;

// var cgpa = 8.17;

// console.log(`
//     Name is : ${first_name}  ${middle_name}  ${last_name}
//     Age is : ${age}
//     CGPA : ${cgpa}
// `)

// console.log("Full name is " + first_name + " " + middle_name + " " + last_name);



// //********************************************** Discount Calculator */

// const mrp = 1000, current_price = 151;

// var discount = 75;

// var Selling_Price = (mrp - (mrp * discount) / 100);






// console.log("\nYour Selling Price is " + Selling_Price);

// //      Converting current price to discount percentage

// discount_percentage = ((mrp - current_price) / mrp) * 100;

// console.log(discount_percentage);

// discount_percentage = Math.round(discount_percentage);   //.            For Rounding the value

// console.log(discount_percentage);

// . ***************************************     Array       **************************************

// var arr = ["a", "b", "c"]
// console.log(arr);

// var arr_1 = Array("a", "b", "c")
// console.log(arr_1);

// var arr_2 = Array("a", "b", "c", 2, 3, 2.5, true)
// console.log(arr_2);


// console.log(arr.length);

// arr.push(5)
// console.log(arr);

// arr.pop(5)
// console.log(arr);

// arr.unshift(5) //.  Push Front
// console.log(arr);

// arr.shift(5) //.        POP front
// console.log(arr);

// console.log(arr.indexOf("c"));

// var x = Array.from("Faraz");  //.*************** Creating array from String
// console.log(x);

// .***************************************  Function ***************************************

// function fun(a, b) {
//     if (a > b)
//         return a;
//     return b;
// }

// var y = fun(6, 50)
// console.log(y)

// .     Instead we can write

// var z = function (a, b) {
//     return a > b ? a : b;
// }
// console.log(z(5, 6));


// var z = (a, b) => {
//     return a > b ? a : b;
// }
// console.log(z(51, 6));

// . *************************** Call Back Function **********************

// var isEven = (n) => { return n % 2 === 0; }
// // console.log(isEven(5));

// var res = [2, 3, 6, 8].every(isEven)  //.   Without loop we can iterate all values
// console.log(res);

// var res = [2, 4, 6, 8].every(isEven) //.   If every element is true then true
// console.log(res);

// var res = [2, 4, 6, 8].every((e) => e % 2 === 0) //.    Without return
// console.log(res);

// var res = [2, 4, 6, 8].every((e) => (e % 2 === 0))
// console.log(res);

// var res = [2, 4, 6, 8].every((e) => { return e % 2 === 0 }) //.   For return we use {}
// console.log(res);


// . ************************* Fill and Filter ***********************

// var arr = [2,3,4,5,6,8,10,15,44];

// console.log(arr.fill("h")); //.     For filling all elements

// console.log(arr.fill("h" , 2)); //.     Fill h from 2nd index

// console.log(arr.fill("h" , 2 , 5)); //.     Fill h from 2nd index to 5th index


// const arr_new = [23, 33, 45, 78, 55, 161, 625, 3232, 55, 1]

// console.log(arr_new.filter((num) => num > 55));
// console.log(arr_new);



// . ************************************ Slice & Splice ************************************

// arr = ["a", "b", "c", "d"]


// console.log(arr.slice(1, 3));

// arr.splice(1,2,"Hi" , "Bye")
// console.log(arr);


// ***************************  Objects *********************************************************

// obj = {
//     name: "Redmi Note 9 pro max",
//     ram_size: 6,
//     front_cam: 32,
//     back_cam: 64,
//     total_cam: 4,
//     Android_Version: "Android 12"
// };

// console.log(obj);
// console.table(obj);
// console.log(obj["ram_size"]);
// console.log(obj.name);


// obj = {
//     name: "Redmi Note 9 pro max",
//     ram_size: 6,
//     front_cam: 32,
//     back_cam: 64,
//     total_cam: 4,
//     Android_Version: "Android 12",
//     costumers: [],
//     varenty: true,

//     Total_Customers: function (c_name) {
//         this.costumers.push(c_name);
//     },

//     info: function () {
//         return `
//     Phone name : ${this.name}
//     Total Ram : ${this.ram_size} GB
//     Front Camera : ${this.front_cam} MP
//     Back Camera : ${this.back_cam} MP
//     user : ${this.costumers}
//     In Varenty : ${this.varenty}
//     `
//     }
// };

// obj.Total_Customers("Faraz")
// console.log(obj.name);
// console.log(obj.info());


// ******************************************   Loops ********************************************************

// obj = {
//     name: "Redmi Note 9 pro max",
//     ram_size: 6,
//     front_cam: 32,
//     back_cam: 64,
//     total_cam: 4,
//     Android_Version: "Android 12"
// };
// var arr = ["Bihar", "UP", "MP", "Rajesthan", 1999, "Assam", "Hydarabad", "Delhi"]

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "string") continue;
//     if (arr[i] === "Hydarabad") break;
//     console.log(arr[i]);
// }

// .         While and Do while loops also exists just like C++



// arr.forEach(i => (console.log(i))); //.         For each loop is method of array

// .************************* For OF loop --> used in Arrays ***********************************

// for (const n of arr) {
//     console.log(n);
// }
// .************************* For IN loop --> used for objects ***********************************

// for (const n in obj) {
//     console.log(` keys ${n}       values : ${obj[n]}`);
// }

// .*******************************  THIS Keyword    *********************************

// console.log("Global Object ", this);

// var user = {
//     name: "Faraz",
//     roll: 191044,
//     get_ROLL: function () {
//         console.log("Inside function of obj : ", this)
//         function say() {
//             console.log("Hello ", this);
//         }
//         say();
//     }
// }

// user.get_ROLL();

// . ************************************ Self executing anonymous function *************************

// (function () {
//     console.log("hello")
// }())

//. Runs automatically on running program

//.*************************************    closure & Curring     ***********************************************

// function init() {
//     var name = "Faraz";
//     console.log("In init");

//     function say_name() {
//         console.log(name);
//     }

//     return say_name;
// }

// var x = init();  //.    function initialization and assigning value to x

// x(); //.        calling function of init()


// function doAddition(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// var res = doAddition(5)

// console.log(res(4));
// console.log(doAddition(4)(96));


//.*************************    borrow method using bind  && Call prop  *****************************************

// faraz = {
//     name: "faraz",
//     roll: 191044,
//     branch: "CSE",

//     get_info: function () {
//         console.log(
//             `name is ${this.name}\nbranch is ${this.branch}\nroll is ${this.roll}
//         `)
//     }
// }

// Arshad = {
//     name: "Arshad",
//     roll: 195015,
//     branch: "Civil",
// }


// faraz.get_info()

// Arshad.get_info() //.   Error

// faraz.get_info.bind(Arshad); //.    Bind gives reference back
// faraz.get_info.bind(Arshad)(); //.    to call either this or below

// var x = faraz.get_info.bind(Arshad);
// x()

// faraz.get_info.call(Arshad);  //. it directly calls it


//.**********************************************   Scope ( LET KEYWORD ) USE

// console.log(x);
// console.log(y); //.     ERROR -->   LET keyword
// var x =5
// let y = 6

// if(true){
//    var i=100
//    let j=200
// }

// console.log(i);
// console.log(j); //.         Error --> not exist in Scope


//.   ***************************** Classes and Objects *****************

// import Student from "./Class_1"; //.   First method to import
// const Student = require("./Class_1")

// const Faraz = new Student("Faraz", 191044, "CSE")

// console.log(Faraz.getInfo()); //.       Dummping out information
// console.log(Faraz.getInfo().branch); //.For Accessing Specific element


// Faraz.Enroll_Course("Bio")
// Faraz.Enroll_Course("Cyber Security")
// Faraz.Enroll_Course("IOT")
// Faraz.Enroll_Course("Soft Skill")

// console.log(Faraz.Get_Course())
// let x = Faraz.Get_Course()

// x.forEach(i => console.log(i)) //.      Iterating each element


//.******************************   Inheritance     ********************************
// class Inherited_Class extends Student {

//     #attandance = 45; //.    Private var

//     constructor(name, roll, branch) {
//         super(name, roll, branch);
//     }

//     get_attandance() {
//         return this.#attandance;
//     }
// }


// const faraz = new Inherited_Class("Faraz", 191044, "CSE")

// console.log(faraz.getInfo());
// console.log(faraz.getInfo().name);
// console.log(faraz.name);
// console.log(faraz.attandance);  //.     Cant access the private member
// console.log(faraz.get_attandance());



//. *************************************       EVENT LOOP      ***********************

// const uno = () => console.log("one");//.        Function

// const dos = () => {
//     setTimeout(() => { console.log("Important") }, 3000) //.   Run after 3 sec

//     console.log("two")
// };

// const tres = () => console.log("Three");


// uno()
// dos()
// tres()


//. *************************************       Promise async and await      ***********************

// const uno = () => { return "one"; }//.        Function

// const dos = () => {
//     setTimeout(() => { return "Two" }, 3000) //.   Run after 3 sec

// };

// const dos = async () => {
//     setTimeout(() => { return "Two" }, 3000) //.   Run after 3 sec

// }; //.******* By putting async we get promise{undefined} in CL as promise is not fullfilled yet 

// const dos = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve("Two") }, 3000) //.  We are not resolving we are returning
//     })

// };

// const dos = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { reject("Two") }, 3000) //.  We are not resolving we are returning
//     })

// };

// const tres = () => { return "Three" };


// Call_Me = async () => //.    We put async because we are using async method inside
// {
//     const val_1 = uno()
//     console.log(val_1);

//     // const val_2 = dos()
//     // console.log(val_2);   //.        This prints undefined as in wait-time

//     const val_2 = await dos()  //.  Wait until this finish
//     console.log(val_2);

//     const val_3 = tres()
//     console.log(val_3);
// }

// Call_Me()

