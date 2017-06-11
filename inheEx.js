
// Initializing Person object constructor.
function Person (first,last,age,gender,interest) {

    // creating name object which acces the first and last parameter
    this.name = {   
      first,
      last
    };

    // binding/initializing the 3,4,5 parameters 
    this.age = age;         
    this.gender = gender;
    this.interest = interest;

    // creating bio method of the person object
    this.bio= function () {     
      console.log(`Hi, my name is ${this.name.first} ${this.name.last} and I like ${this.interest[0]} ${this.interest[1]} `);
    }

    // creating greeting method of person object
    this.greeting = function() {   
      console.log(`my is ${this.name.first} ${this.name.last} and my age is ${this.age}`);
    }
} 

// creating an instance of persorn object called David.
  var david = new Person ('David','Beckham',42,'m',['Football','Fashion']);   

// call greeting and bio methods
  david.greeting();  
  david.bio();

// acces interest property
  david.interest;   

// Checking instance of person object
  console.log('is david instance of person ? ', david instanceof Person); 


/* -->> NOW GOING TO INHERITE (EXTEND) PERSON OBJECT TO PROGRAMMER OBJECT (PROTOTYPE) <<--- */

// Creating a Programmer Object prototype from Person Object
  Programmer.prototype = Object.create(Person.prototype);

// Initializing Programmer Object (prototy) constructor
  Programmer.prototype.constructor = Programmer;

// Extending Programmer object constructor from Person Object.
function Programmer (first,last,age,gender,interest,fav_language) {
    Person.call(this, first,last,age,gender,interest)
    this.fav_language=fav_language;
}

// creating code method of programmer object
Programmer.prototype.code = function () {
    console.log('bex can write programms using JavaScript');
}

// Defining the bex instance of Programmer Object
  var bex = new Programmer('Bex','Bolton',18,'f',['coding','texting'],'JavaScript');

// calling ncode method of programmer
  bex.code();

// acces a property of programmer object
  bex.fav_language;

// Checking instance of programmer object
  console.log('is bex instance of programmer ? ', bex instanceof Programmer);

// Checking instance of person object
  console.log('is bex instance of person ? ', bex instanceof Person);

//calling the greeting method of Person from the instance of Programmer.  
  bex.greeting();

console.log('is david instance of programmer ? ', david instanceof Programmer);


/* --->> !! The usage of `${ }` is Template String of the New ES6 standard. !! <<---  */

