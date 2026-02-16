// const arr = [1,2,3,4,5];
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] %2 == 0){
//         console.log(arr[i]);
//     }
// }


// const sales = "Tyota";
// function carType(name){
//     return name === "Honda" ? name : "Sorry";
// }

// const car = {carn:"City",getCar:carType("Honda"),Special:sales};

// console.log(car.carn);
// console.log(car.getCar);
// console.log(car.Special);

// const color = ["red","yelllow","green"];
// color.forEach((i,a)=>console.log(i,a)); // iterare by foreach loop here a is for index

// const arr = [1,2,3,4];
// j = 0;
// arr.forEach((i)=>{arr[j++]=i+3});
// console.log(arr);

// const color = ["red","yelllow","green"];

// for(const i in color){ // iterate on index
//     console.log(i,color[i]);
// }

// const arr = [1,2,3,4];
// for(const i in arr){ 
//     arr[i] = arr[i]+2;
// }

// console.log(arr);

// const user = {name:"rabin",age:25,hobby:"coding"};

// for(const index in user){
//     console.log(index,user[index]);
// }
 
// const language=["HTML","CSS","Java"];
// for(const i of language){ // to iterate over value
//     console.log(i);
// }

// function greet(name){
//     console.log("Hello" + name);
//     console.log(`Hello ${name}`); //will use more in this way
// }
// greet("User");

// const factorial = function(n){ // this is anonanymus function
//     if(n==0 || n==1)
//         return 1;
//     else
//         return n*factorial(n-1); 
// }

// console.log(factorial(5));

// Map Method   - to store array elements with changes in new array

// const number = [1,2,3]
// const newnumber = number.map(function(n){   // 1st way
//     return n*2;
// })

// console.log(newnumber);

// const number = [1,2,3]
// const newnumber = number.map(n=>n*2);        // 2nd way
// console.log(newnumber);


// Filter 
const number = [1,2,3]
const newnum = number.filter((n)=>n%2==0)
console.log(newnum);
