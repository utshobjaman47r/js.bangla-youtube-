'use strict';




// console.log("i am batman");

// const bookings =[];
// const createBooking = function(flightNum,numPassengers = 1 ,price = 199 * numPassengers){
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

// }; 
  
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
//   return str.replace(/ /g,"  ").toLowerCase();

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



// const greet = function(greeting){
//   return function(name){
//     console.log( `${greeting},${name}` )
//   }

// }

// //greet("hey","uthsob");
// const greeterhey =greet("hey") // in this line greet also return the name functions 

// greeterhey("uthsob");
// greeterhey("batman");
   

//  // anoter mode which as tow parameter 

//  greet("hello")("supergril"); //  tow parameter 


// //challange 

// const greet2 = greeting=> name => {
//    console.log(`${greeting},${name}`)
  
// };


// const greeterhello =  greet2("helloZ");

// greeterhello('uthsob');


  

// const luthansa = {
//   airline :"luthansa",
//   itacode :"LH",
//   bookings:[],
//   book :function(flightNum,name){
//     console.log(`${name}  booked a seat on ${this.airline} flight${this.itacode} ${flightNum}`);
//   this.bookings.push({flight :`${this.itacode} ${flightNum}`,name})

//   } 
// };

// console.log(luthansa);
// luthansa.book(239,"uthsob");
// luthansa.book(2599,"batman")

// const ewuroWrings = {
//   airline :"EuroWrings",
//   itacode : "Ew",
//   bookings: [],
// };

// const azeerSpace = {
//   airline :"azeerSace and ocean ",
//   itcode  : "Az",
//   bookings :[],
//   // no need to crate this because this fuctiosn is explecitlly called by using some  methods 
//   // book :function(flightNum,name){
//   //   console.log(`${name} booked a seat on ${this.airline},flight${this.itcode} ${flightNum}`);
//   //   bookings.push({flight:`${this.itcode}${flightNum}`,name})


//   // },
// }

// // call method 
  
// const book =luthansa.book

// //Does not work 
// //book(23,"sara williams") 

// book.call(ewuroWrings,23,"sara williams");

// console.log(ewuroWrings);

// book.call(luthansa, 444, "williham gOulfman");
// book.call(azeerSpace,447,'MALIK AL GAFUR')

// const swiss = {
//   airline :"swiss airline",
//   itacode :"Lx",
//   bookings:[],
// };

// book.call(swiss,583,"Marry jane");
// console.log(swiss);


// // apply method

// const flightData = [583,"GORGE copper"];

// book.apply(swiss,flightData);
// console.log(swiss);

// // morderan use 
// book.call(swiss,...flightData);
// console.log(swiss);


// //bind method 
// const bookEWE = book.bind(ewuroWrings);
// const bookLH = book.bind(luthansa);
// const bookLX = book.bind(swiss);

// bookEWE(23,"stven williams");
// console.log(bookEWE);

// bookLH(25,"jack hamsworth");
// bookLX(42,"khabir khan");

// // console.log(bookLH);
// // console.log(bookLX);


// const bookEWE23 = book.bind(ewuroWrings,23);

// bookEWE23("lutfor jaman uthosb");
// bookEWE23("jane wilde");

// // with Event lestener 

// luthansa.planes = 300;

// luthansa.buyPlane = function(){
//   console.log(this);
//   this.planes++
//   console.log(this.planes);
// };
// luthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click',luthansa.buyPlane.bind(luthansa));

// //partial application ?? this means preset parameters 

// const addTax = (rate,value) => value + value *rate;

// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null,0.23);
// // addVAT = (value) => value + value *0.23

// console.log(addVAT(100));
// console.log(addVAT(235));

// const addTax2 = function(rate){
//   return function(value){
//     return value + value * rate;
//   }

// };
// const addVat =addTax2(0.3);
// console.log(addVat(200));


// const poll = {
//   question:"what is your favorite programming langugae ?",
//   Options :['0:javascript',"1:python","2:rust","3:c++"],
//   answers: new Array(4).fill(0),
//   // resgisterNewAnswer:prompt("what is your favorit porgramming language?")

//   resgisterNewAnswer(){
//     const answer = Number(prompt(`${this.question}\n${this.Options.join('\n')}\n("what is your opinion")`));
//     console.log(answer);

//     typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
    
//     this.displayResult()
//     this.displayResult("string")
    



//   },
//   displayResult(type = "array"){
//     if(type === "array"){
//       console.log(this.answers);
//     }else if (type === "string"){
//       console.log(`poll results are ${this.answers.join(", ")}`)

//     }
//   }
 

// };
// poll.resgisterNewAnswer();
// console.log(new Array());


// document.querySelector(".poll").addEventListener('click',poll.resgisterNewAnswer.bind(poll));

// poll.displayResult.call({answers:[5,2,3]},"String");
// poll.displayResult.call({answers:[1,5,3,9,6,1],},"string");
// poll.displayResult.call({answers:[1,5,3,9,6,1],});











// const rurnOne = function(){
//   console.log("this function will not run agian ")

// };

// rurnOne();
// rurnOne();

// (function () {
//   console.log("this function will not run agian");
//   const isprivate = 23;
//   console.log(isprivate);

  
// })();// every functins needs a name but we tricked with js and make the statement into expression by adding () since 
// // we did not named it and calls it imidiatley . now this function  will not call it later 




// //console.log(isprivate);




// // so this functioned called imidiatley involved functionsexpression ;

// (function(){
//   console.log("the lost soul will not found agian ")
// })();

// //also for arrow functions 
// // remove the name and  just add the () ; 

// (() => console.log("well will lost as if we are not existed "))();


// {
//   const isprivate = 23;
//   var isNotPrivate = 33;
// };

// // console.log(isprivate);
// console.log(isNotPrivate);



const secureBooking = function(){
  let passagerCount = 0;
  return function(){
    passagerCount++
    console.log(`${passagerCount} passanger`)

  }

};
const booker = secureBooking();
booker();
booker();
booker();


console.dir(booker);
