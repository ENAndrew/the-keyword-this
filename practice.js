//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //'this' is used to refer to the invoking object or function

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer

  // 3) What is the difference between call and apply?

      //.apply requires the value of what 'this' should apply to, plus an array of arguments 
      //.call requires the value of what 'this' should apply to, plus arguments entered explicitly, 
      //separated by commas. Thus: 
      //.apply(valueForThis, [arguments]);
      //.call(valueForThis, arg1, arg2, arg3);

  // 4) What does .bind do?

      //creates a new function that when called has its context (or the value that 'this' refers to)
      //set to a provided value


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. 
  //*Don't use 'user' instead use the 'this' keyword*

var user = {
    username: 'username',
    email: 'email',
    getUsername: function() {
        return this.username;
    }
};
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function () {
        this.move = this.move + 10;
        return this.move;
    };
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from 
//the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're 
//invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, 
//use the proper syntax that will allow for you to call the getYear function with the 
//prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.


getYear.call(prius);

getYear.call(mustang);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 
//5 seconds, what will the getUsername function return?


  //undefined, as it is looking for a username property on the window object. 
  //unless there is globally defined variable 'username', there will be no result. 

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //'this' is referring to the window object

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.


setTimeout(getMyUsername.call(myUser), 5000);  //does not work, no delay

var rightContext = function(func, obj) {
    return func.call(obj);
};

setTimeout(rightContext(getMyUsername, myUser), 5000);  //no delay