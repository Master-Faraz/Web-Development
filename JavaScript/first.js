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

//. ***************************************     Array       **************************************

var arr = ["a", "b", "c"]
console.log(arr);

// var arr_1 = Array("a", "b", "c")
// console.log(arr_1);

// var arr_2 = Array("a", "b", "c", 2, 3, 2.5, true)
// console.log(arr_2);


console.log(arr.length);

arr.push(5)
console.log(arr);

arr.pop(5)
console.log(arr);

arr.unshift(5) //.  Push Front
console.log(arr);

arr.shift(5) //.        POP front
console.log(arr);

console.log(arr.indexOf("c"));

var x = Array.from("Faraz");  //.*************** Creating array from String
console.log(x);

//.***************************************  Function ***************************************

// function fun(a, b) {
//     if (a > b)
//         return a;
//     return b;
// }

// var y = fun(6, 50)
// console.log(y)

//.     Instead we can write

// var z = function (a, b) {
//     return a > b ? a : b;
// }
// console.log(z(5, 6));


// var z = (a, b) => {
//     return a > b ? a : b;
// }
// console.log(z(51, 6));

//. *************************** Call Back Function **********************

// var isEven = (n) => { return n % 2 === 0; }

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


//. ************************* Fill and Filter ***********************

// var arr = [2,3,4,5,6,8,10,15,44];

// console.log(arr.fill("h")); //.     For filling all elements

// console.log(arr.fill("h" , 2)); //.     Fill h from 2nd index

// console.log(arr.fill("h" , 2 , 5)); //.     Fill h from 2nd index to 5th index


// const arr_new = [23, 33, 45, 78, 55, 161, 625, 3232, 55, 1]

// console.log(arr_new.filter((num) => num > 55));
// console.log(arr_new);