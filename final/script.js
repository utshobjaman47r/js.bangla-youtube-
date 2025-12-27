'use strict';



// dddd ;
// console.log("i am batman");

// const bookings =[];
// const createBooking = function(flightNum,numPassengers =1 ,price =199 * numPassengers){
//    //ES 5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking ={
//     // flightNum:flightNum,
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);


// }
// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123',2);
// createBooking('LH123',5);

// createBooking('LH123',undefined,1000);// if you want the default value , use undigined it will skip the value 


// const flight = 'LH123';


// const utshob = {
//   name :'BRUCE WAYNE',
//   passport : 123457215454, 
// };


// const chackIn =  function(flightnum,passenger){
//   flightnum = "LH999",
//   passenger.name = "Mr" + passenger.name;
//   if(passenger.passport === 123457215454){
//     alert("checaked in ");
//   }else{
//     alert("wrong passport")
//   }

// }
  
// chackIn(flight,utshob);

// console.log(flight);
// console.log(utshob); 


// const newPassport = function(person){
//   person.passport = Math.trunc(Math.random() * 1000000000);

// };

// newPassport(utshob)
// chackIn(flight,utshob);

 
// // replacing the place 
// const oneWord = function(str){
//   return str.replace(/ /g," ").toLowerCase();

// };


// const upperFirstWord = function(str){
//   const [first,...others] =str.split(" ");
//   return[first.toUpperCase(),...others].join(' ');

// };

// // higher order function 
// const transformer = function(str,fn){
//   console.log(`transfrom stirng ${fn(str)}`);
//   console.log(`transfrom by : ${fn.name}`);

//   console.log(`trnsfromed by ${fn.name}`)

// };


// transformer("javascript is the bast!",upperFirstWord);
// transformer("javascript is the bast!",oneWord);



// // js uses callbacks all the time 
// const high5 = function(){
//   console.log("Hello i am utshob whats your name ")
// };

// document.body.addEventListener('click',high5);



// ["jonas ","terminator", "salman khan "].forEach(high5);



const greet = function(greeting){
  return function(name){
    console.log( `${greeting},${name}` )
  }

}

//greet("hey","uthsob");
const greeterhey =greet("hey") // in this line greet also return the name name functions 

greeterhey("uthsob");
greeterhey("batman");
   

 // anoter mode which as tow parameter 

 greet("hello")("supergril"); //  tow parameter 


//challange 

const greet2 = greeting=> name => {
   console.log(`${greeting},${name}`)
  
};


const greeterhello =  greet2("helloZ");

greeterhello('uthsob');


  

const luthansa = {
  airline :"luthansa",
  itacode :"LH",
  bookings:[],
  book :function(flightNum,name){
    console.log(`${name}  booked a seat on ${this.airline} flight${this.itacode} ${flightNum}`)

  } 
};

luthansa.book(239,"uthsob");
luthansa.book(2599,"batman")

console.log(this);
