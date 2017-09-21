'use strict';

angular.module('confusionApp')


        .constant("baseURL","http://localhost:3000/")
        .service('demoFactory', ['$http', 'baseURL', function($http,baseURL) {


//---------------------NEW CODE JUNE 13 2017 ADDING DEMO OBJECT TO DEMO------------- PAGE-------------------------------------------------------------------------------
            var demo=[
                         {
                          _id:0,
                          name:'HTML',
                          image: 'images/html5.png',
                          category: 'HTML5',
                          link:'https://www.google.com/search?q=html5&rlz=1C1CHBF_enUS742US742&oq=html&aqs=chrome.0.69i59j69i60j69i61j69i60j69i57j69i65.1308j0j7&sourceid=chrome&ie=UTF-8',
                          info:'info',
                          description:'The bare back-bone of an internet web page. Lays out the structural foundation of the site.'
                        },
                        {
                          _id:1,
                          name:'CSS',
                          image: 'images/css3.png',
                          category: 'CSS3',
                          link:'https://www.google.com/search?num=100&safe=off&rlz=1C1CHBF_enUS742US742&q=css3&oq=css3&gs_l=serp.3..35i39k1l2j0i20k1l2j0j0i131k1j0j0i67k1j0i131k1j0i67k1.12112.12605.0.12754.4.4.0.0.0.0.92.333.4.4.0....0...1.1.64.serp..0.4.333.CsZdd9rmxfI',
                          info:'info',
                          description:'Style sheets used to design the html page.'
                        },
                        {
                          _id:2,
                          name:'JavaScript',
                          image: 'images/javascript.png',
                          category: 'JavaScript',
                          link:'https://www.google.com/search?num=100&safe=off&rlz=1C1CHBF_enUS742US742&q=javascript&oq=javascript&gs_l=serp.3..35i39k1l2j0i67k1l3j0j0i20k1l2j0i67k1l2.23896.24864.0.24981.10.10.0.0.0.0.115.725.7j1.8.0....0...1.1.64.serp..2.8.725...0i131k1.A8q65rp6VlQ',
                          info:'info',
                          description:'Programming language of the web. Very versatile and popular. Javascript is popular because it is pretty much the only language you can use on the front end. Then node.js was created that took JavaScript, added a few things to the language, and made it so it can function as a server side language. Server language is a program that is running on a computer. The program doesn\'t have a nice interface, but it can do stuff to the computer like receive info and send it back. NodeJS makes JavaScript a C++ program, all different words get interpreted by C++. KEY CHARACTERISTICS: JavaScript is a high-level language meaning it has strong abstraction from details of computation. It is dynamic programming language meaning at runtime it executes many common programming behaviors that static languages perform during compilation. It is untyped, which allows operations to be performed on any type of data. JavaScript is object based, it uses the idea of encapsulating state and operations inside of objects. There are object based and object oriented languages. JavaScript is also multi-paradigm and is interpreted, meaning that it executes instructions directly to machine code without the need of a compiler via an interpreter.'
                        },
                        {
                          _id:3,
                          name:'Angular',
                          image: 'images/angular.png',
                          category: 'AngularJS',
                          link:'https://www.google.com/search?num=100&safe=off&rlz=1C1CHBF_enUS742US742&q=angularjs&oq=angularjs&gs_l=serp.3..35i39k1l2j0i67k1j0i20k1j0i67k1l6.12606.13477.0.13605.9.9.0.0.0.0.155.993.5j4.9.0....0...1.1.64.serp..0.9.993...0j0i131k1.-uM5Wggwq8U',
                          info:'info',
                          description:'A very powerful front end javascript framework. Some of my favorite features supported are Single Page Applications, MVC architecture, and dynamic data binding'
                        },
                        {
                          _id:4,
                          name:'variable',
                          image: 'images/4.PNG',
                          category: 'JavaScript',
                          link:'',
                          info:'info',
                          description:'Programming Language is a set of instructions that were ultimately given to the computer. When we write these instructions, we have different values that we manipulate, pass around, and do stuff with. Variables hold values. We user variables to manipulate data. We declare a variable using JS keyword var and give the variable a name. Example: var name = "Ben". We then use assignment operator and assign the variable name with value Ben.  We use the variable name to reference the value. '
                        },
                        {
                          _id:5,
                          name:'object',
                          image: 'images/5.PNG',
                          category: 'JavaScript',
                          link:'',
                          info:'info',
                          description:'Object is a list of key value pairs. Objects give use a nice way to have a bunch of related variables we can all group together under a single name we can pass around in our app. An object is a list of key:value pairs. Example: var user = {username: "serge", password: "123hey123"}.'
                        },
                {
                          _id:6,
                          name:'function(value)',
                          image: 'images/6.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/terinagacu/edit?js,console',
                          info:'info',
                          description:'There is a value in JavaScript that references a whole block of code, or a list of instructions. These values are called functions, which are "reusable packets of code." Note: function is a value, but we use function key word (not var) to assign the function its value. *** A function is a block of code that we wrap in a variable name and use that name with () to execute that block of code. Example: function sayHi() {console.log("Hello");}. Here we define a function sayHi, we can then invoke/call this function by typing: sayHi();. When the code catches up with this line it will look for our function definition and execute the instructions accordingly. In example below we show that there are 2 assign a function a name. In the first example we name the function before we define it, and in the second we first created an anonymous function, and then pass that function definition into a variable sayHi2. The second method of using anonymous functions is a very important aspect of JavaScript.   '
                        },
                {
                          _id:7,
                          name:'.length',
                          image: 'images/7.PNG',
                          category: 'JavaScript',
                          link:'',
                          info:'info',
                          description:'.length is a String object property that tells you how many characters are in a string. Also it is a property of an array that tells you how many indexes are in that array.'
                        },
                {
                          _id:8,
                          name:'parameters',
                          image: 'images/8.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/jerucopudo/edit?js,console',
                          info:'info',
                          description:' vs arguments: When we define a function, we can specify parameters (params). Parameters are placeholders to the values being passed as arguments into a function every time the function is called/invoked. ***A parameter is a reference to a value you pass in as an argument.'
                        },
                {
                          _id:9,
                          name:'ternary expression',
                          image: 'images/9.PNG',
                          category: 'JavaScript',
                          link:'',
                          info:'info',
                          description:'An expression that evaluates to true or false. Example: return x > y ? true: false. We first set a condition "if x greater than y" then if true return true, and if false return false. The first segment is if expression evaluates to be true and the second segment if the expression evaluates to be false.'
                        },
                {
                          _id:10,
                          name:'.reduce()',
                          image: 'images/10.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/pixomutolu/embed?js,console',
                          info:'info',
                          description:'An array method that ads up all elements in an array. An example of a method that takes a function as an argument.'
                        },
                {
                          _id:11,
                          name:'assignment',
                          image: 'images/11.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/quxusasave/edit?js,console',
                          info:'info',
                          description:'In Javascript we use equal sign = as an assignment operator. In the example we have variable firstName, we assign it to string Ben. We then have var lastName and we assign it to string Nelson. For the variable fullName we concatenate the other two variables and stick this new value under this new variable name. '
                        },
                {
                          _id:12,
                          name:'.forEach()',
                          image: 'images/12.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/jiyitejumo/edit?js,console',
                          info:'info',
                          description:'The .forEach() method executes a provided function once for each array element. Syntax: arr.forEach(function(currentValue,, index, array){//your iterator that does something with currentValue, index, or array})'
                        },
                {
                          _id:13,
                          name:'.map()',
                          image: 'images/13.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/tuporemutu/edit?js,console',
                          info:'info',
                          description:'An array method that is used when we want to transform a set of collections. The .map() method accumulates all the results into a collection, while the .forEach() method simply exectutes an action on each element and returns nothing. ***map method creates a new array with the results of calling a provided function on every element of the array. .map() and .forEach() are examples of methods that take in a callback function as an argument. We pass these methods an anonymous function when we invoke it. Notice in the example we take the results of the numbers.map() and pass those results into the var squares.  '
                        },
                {
                          _id:14,
                          name:'pass-by-reference',
                          image: 'images/15.PNG',
                          category: 'JavaScript',
                          link:'https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language?rq=1',
                          info:'info',
                          description:'The data associated with passed variable is not copied when passed to the function, and thus any modification made by the function to the passed variable will be retained after the function call terminates. An example of this would be me giving you a URL to my website. I am passing you my website by the reference of a URL.'
                        },
                {
                          _id:15,
                          name:'pass-by-value',
                          image: 'images/15.PNG',
                          category: 'JavaScript',
                          link:'https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language?rq=1',
                          info:'info',
                          description:'The data associated with the variable is actually copied when passed to the function and any modification made by such function to such variable will be lost when the variable goes out of scope of the functions body when the function returns. Remember, variables are pointers to values in memory. Rearranging a variable merely points that pointer to a new value. Reassigning a variable will not effect other variables that were pointing a the same value.'
                        },
                {
                          _id:16,
                          name:'object II',
                          image: 'images/16.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/yiwajarotu/edit?js,console',
                          info:'info',
                          description:'An object is a list of key/value paiers with named keys that reference a value. We use the keyword aka property, that is a string =, to access the value of an object. When there a function is on an object it is called a method. A property is a special variable that is stuck on an object. Example: var user = {username: serge} we access and/or assign the value serge by doing user.username = serge; There are two ways to create an object using JavaScript. var user = {}; user.username = "Ben"; and var user = {username: "Ben"}; '
                        },
                {
                          _id:17,
                          name:'.dot vs [bracket] notation',
                          image: 'images/17.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/nufomireku/edit?js,console',
                          info:'info',
                          description:'Both are ways to add property values to an object. Note: objects and arrays occupy a single space in memory. .dot notation: object.newProperty = newValue; [bracket] notation: object["newProperty"] = newValue. Note: if you are looking to use newProperty as a parameter of a property coming in as an argument, in the function definition we use bracket notation object[newProperty] = newValue to store newValue into that object property that is coming in as an argument. It is kinda confusing to grasp the first time around but the key difference is comparing function calls and their arguments with function definition and their parameters when the functions are dealing with object properties. Another thing to consider: when you pass in a property as an argument, in other words when you are calling a function with a specific property, you must specify that property as a string, aka in quotes. This is because properties in javascript are stored in memory as strings, and if you pass in as a variable (parameter without quotes) javascript will not know where that variable is defined. Ok now on the other hand, we use bracket notation on the function definition side, on the parameter side of the function, to accept these properties that come in as arguments. If you try to accept a property using .dot notation, the function definition is going to expect the object.property property that is literally called "property". Rather, if you use [bracket] notation, when the property enters the function definition as an argument (in other words the property name is being handed to the parameter), such as object[property], the function will know you are passing in the property into the bracket notation. Remember, a property name is a string, so if we pass in the property as an argument, has to be in quotes. To access the value of a property we can do: object.property or object["property"]. The example below doesn\'t show the function definition side of the bracket notation but we can kinda see how we pass in the newProperty as a string on the function call side of the dilemma.'
                        },
                {
                          _id:18,
                          name:'.push() .pop() .unshift()',
                          image: 'images/18.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/qugusotabe/edit?js,console',
                          info:'info',
                          description:'All array methods. .push() ads an item to end of array. .pop() removed last item of array. .unshift() adds to first item in array and shifts all other indexes by 1.'
                        },
                {
                          _id:19,
                          name:'last item in array',
                          image: 'images/19.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/dowukocapi/edit?js,console',
                          info:'info',
                          description:'var z = array[array.length - 1] will store the last item of an array into variable z'
                        },
                {
                          _id:20,
                          name:'current value in array iteration',
                          image: 'images/20.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/pituferehi/2/edit?js,console',
                          info:'info',
                          description:'array[i] where i is the index of for loop, will give you current value of array in that iteration. An alternative way is to use .forEach() array method, and forEach iteration pass it an anon function that takes in value as first parameter. The .forEach() method will know that first argument in the callback function is the current iterator of the loop.'
                        },
                {
                          _id:21,
                          name:'for loop',
                          image: 'images/211.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/kikiyamowi/edit?js,console',
                          info:'info',
                          description:'For loop is a basic way to iterate over a set of collections. Usually an array but sometimes can be an object. In a for loop we have 3 different statements followed by a block of code we will be iterating for each iteration. ***Remember that the code gets run first, then the iterator gets updated. In the first statement we define our iterator i. In second statement we define how many times we want the for loop to be iterated.In the third statement we choose to iterate the statement for each index. ***for loops aer used when you have a bunch of code you want to run over and over.'
                        },
                {
                          _id:22,
                          name:'if, else if, else',
                          image: 'images/22.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/kikiyamowi/edit?js,console',
                          info:'info',
                          description:'Any if statement is a fork in the road. Whatever in parenthesis evaluates to be true runs the immediate code only and skips over other forks in the for loop. In the example our first function call skipps the first if food===pizza statement and exists the loop when food === steak.'
                        },
                {
                          _id:23,
                          name:'this keyword',
                          image: 'images/23.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/fijugakade/edit?js,console',
                          info:'info',
                          description:'"this" is an important javascript keyword that allows us to access a variable of an object\'s property that a method or whatever on that object demands. "this" is used to reference the object at hand.'
                        },
                {
                          _id:24,
                          name:'how to reach your goals',
                          image: 'images/24.PNG',
                          category: 'Jordan Peterson',
                          link:'https://www.youtube.com/user/JordanPetersonVideos',
                          info:'info',
                          description:'Start listening to yourself talk, and pay attention what you say is strong and weak. 1) Chip away at it, little bit everyday. 2) Don\'t wait for a large batch of time to do it because you probably won\'t have that time. 3) Don\'t do it perfectly, doing it badly quickly is good enough. 4) Don\'t do it like it is an assignment. 5) Don\'t do it for someone else. 6) Don\'t do it because you should do it, do it because you want to. 7) ***Do it so badly that you will do it. '
                        },
                {
                          _id:25,
                          name:'javascript object literal',
                          image: 'images/25.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/hojizasube/edit?js,console',
                          info:'info',
                          description:'A javascript object literal is the notation of how objects are defined in javascript. It is a coma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, encoding it in a tidy packages. ***This minimizes the use of global variables. They can be any data type, including array, function, objects. Example below is a good showcase of different data types that cen be stored in a single javascript object literal notation:'
                        },
                {
                          _id:26,
                          name:'first class objects',
                          image: '',
                          category: 'JavaScript',
                          link:'',
                          info:'info',
                          description:'First-class functions: A function can be treated the same way as any other variable. JavaScript supports constructing new functions during execution (dynamic) of a program, storing them in data structures, passing them as arguments to other functions, and returning them as values of other functions. A function is an instance of the Object type. A function has properties and has a link back to its constructor method. You can store a function in a variable. You can pass a function as a parameter to another function. You can return a function from a function. On a side note javascript supports Lexical scoping also known as static scoping. This is a convention used by many programming languages that sets the scope(range of functionality) of a variable so that it may be referenced from within the block of code in which it is defined. This is the basis of javascript closures.'
                        },
                {
                          _id:27,
                          name:'prototype',
                          image: 'images/27.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/jitasatewa/edit?js,console',
                          info:'info',
                          description:'In the example below the code is testing that Array is a JavaScript object with a capital A, we are adding a custom method or creating a prototype sayHi, then we are adding this prototype to all array type objects. ***All array objects inherit this new sayHi function from now on because we added it as a prototype to Array global object. Now we can call this method because we added it to every single array that we create like var array in the example.'
                        },
                {
                          _id:28,
                          name:'constructors',
                          image: 'images/28.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/fovohozuri/edit?js,console',
                          info:'info',
                          description:'Constructors in Javascript are ***blueprints to custom objects we want to create. In the example the blueprint is Cat. We create our blueprints using function keyword followed by a capital letter name for our constructor blueprint. In the example we are using options object as a parameter/placeholder for the custom new object we will be passing in later as an argument. When we finally want to utilize this blueprint we use the keyword new to create our new object based on the constructor blueprint, in the example we say var snowball = new Cat({//the new cat\'s properties}). So essentially what we are doing is we are creating a new Cat object using the Cat constructor blueprint, and then we are passing this new object we create based off of that blueprint into the variable name snowball. Now really in the practical sense we would not be passing this new object into the var snowball, but we would be passing this new cat object into an array of cats, because we can always reffer to each specific cat name by accessing the name property, so what we would do is create a cats array and use .push(), something like var cats = []; cats.push(new Cat({//the new cat\'s properties})); What is interesting with constructors is that we are using function keyword, then we passing in an options object, and assigning, using the equal sign = to assign the option property values into this.name property. Javascript will know that this. will be replaced with the custom object name we assign later, either var snowball. or cats[0]. BOTTOM LINE CONFUSION: CONSTRUCTORS USE ASSIGNMENT EQUALS SIGN AND OBJECTS USE SEMICOLON SIGN'
                        },
                {
                          _id:29,
                          name:'prototype II',
                          image: 'images/29.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/nobofisuge/edit?js,console',
                          info:'info',
                          description:'Best practice is to move method definitions away from constructors and store them in custom prototypes. This is so we have one .meow() function to hypothetically a thousand custom cat objects, instead of each custom cat object having their own exact same meow function. It is away to have clean code and more functional code. A way to minimize memory storage and a solution to scalability issues with Javascript. *** by creating a cat prototype .meow() we have one place in memory all 1k cat objects can use. The cat prototype has a single function on it, and all cat objects inherit from this prototype. Remember inheritance goes hand in hand with prototypes. Another way to look at this is all cat objects remember the prototype that is on their constructor blueprint, so when we make snowball by saying var snowball = new Cat({//cat properties}), the snowball object remembers its constructor and that the constructor has a prototype on it. We use prototypes on constructors because if the function is huge and expensive we don\'t want to copy the function every time we create an object in memory. Snowball objects remembers its constructor and the prototypes on it.'
                        },
                {
                          _id:30,
                          name:'closures',
                          image: 'images/30.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/nalixut/edit?js,console',
                          info:'info',
                          description:'A function defined inside another function has access to all the variables declared in the outer function (outer scope). The inner function will continue to have access to the variables from the outer scope even after the outer function has returned. If you return a function from a functioin, the function that gets returned remembers the scope of the function it was returned from. In the first example the innter function remembers the scope of the outer. closures = return something. Just like you can pass a function you can also return a function. In the second example we can uses closures to limit how many times a function is called. '
                        },
                {
                          _id:31,
                          name:'null keyword',
                          image: 'images/31.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/menocewevo/edit?js,console',
                          info:'info',
                          description:'null means nothing, it is not an object type and returns value false. This can be useful for conditional statements, for example if(null) will return false. If anything equates to empty the condition is going to be false. This is important because  in Javascript we often test if(object) to see if that object exists or if it has been created. Doesn\'t have to be an object could be any data type as long as not null will return true.  '
                        },
                {
                          _id:32,
                          name:'for in loop',
                          image: 'images/32.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/gawetotuwe/1/edit?js,console',
                          info:'info',
                          description:'For in loop is used for iterating over properties or keys of objects. We can use the for in loop to capture property names (string type) and property values (values can be any type in js objects). For example we say for(var key in user) {console.log(key); console.log(user[key]);} The important message is the var key you are creating, technically can be any placeholder name. In our example key is the iterator for the property name in string form. When we wrap key in brackets it allows us to dynamically access the properties. Note that we can\'t use dot notation and say user.key bc it will look for a property on object that is named key. So to sum it up bracket notation used by for in loop is similar to bracket notation used in regular for loops. We use bracket notations when we want to iterate over objects properties. '
                        },
                                {
                          _id:33,
                          name:'callback functions',
                          image: 'images/33.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/kufumol/edit?js,console',
                          info:'info',
                          description:'A callback is a set of instructions we hand to a function(inform of a parameter and as a function) when we are calling it. After this function runs some tests with the other parameters you handed it, it will take your callback and with the return values (closures) specified in that function\'s callback definition, will return the caller a result usually a in form of a javascript object. This form of calling a function is used in nodeJS and the example below is a basic method of how node modules are defined and called in an application. In an actual node module you would set var rect to module.exports and in the file you wish to use the node module you would type require(\'node-module-file\'). Also in an actual node module for error handling you use Try Catch combo and if (error) throw new Error();. The reason for node\'s use of callbacks in this form is to create asynchronous nonblocking i/o...i think. "***That illustrates to you how you would define a node module and then you would supply a callback function when you call that node module and then the node module can invoke the callback function to send back information to you and execute the code inside the callback function." The node module sends its information into the callback parameter, so when we utilize the callback function we write code that uses that juicy parameter to display the object that came in for example rectangle.area().'
                        },
                {
                          _id:34,
                          name:'fibonacci',
                          image: 'images/34.PNG',
                          category: 'JavaScript',
                          link:'http://jsbin.com/jutuyu/edit?js,console',
                          info:'info',
                          description:'Fibonaccis go fractal mode untill all base cases eacn each recursion are reached and then all of them get added up and sum is returned. The execution trickle down till all base cases then shoots back up collecting all the ones. Recursions are functions that call themselves inside of themselves. Recursions depending on a situations can make it much esier to iterate over a value. It is essentially another way of iterating/repeating something.'
                        },
                {
                          _id:35,
                          name:'amazon elastic cloud 2',
                          image: '',
                          category: '',
                          link:'',
                          info:'info',
                          description:'Allows you to run a linux instance on a cloud using amazon web services. Before we run an instance we need to enable inbound ssh traffic from our IP addreess to our instance. This ensures that the same group associated with your instance allows incomming SSH traffic by default. Security groups enable you to controlltraffic to our instance. To enable network access to an instance, you must allow inbound traffic to the instance. To do this you must add a rule to your main security group that is associated with the instance.'
                        },
                {
                          _id:36,
                          name:'XMLHttpRequest object',
                          image: 'images/36.PNG',
                          category: '',
                          link:'http://jsbin.com/pununus/edit?html,js,console,output',
                          info:'info',
                          description:'Ajax is asynchronous Javascript and XML/JSON. Ajax uses Javascript XMLHttpRequest object in order to make http requests behind the scenes. Ajax uses this object to look up data rather than use the typical http request that is initiated via the URL Bar. Big part of ajax is requesting the right URL at the right moment. Ajax is a process of sending and receiving data on the fly without a page reload. In the example 1) The web browser is gonna expect us to use a method called open(), it is our chance to say what we want to do. It takes 2 arguments send or receive, GET/POST, and URL of the data. 2)Next, we need to do something with GET data when in comes in so we specify an onload() anon function and we assign our new var ourData to the json parsed ourRequest.responseText. We then consolelog ourData variable as a javascript object array. The last thing we need to do is officially .send() ourRequest. This will initiate a GET request to server, to get JSON object, parse it to javascript object, and console log response on load. Ajax baby! In the second example we make use of jquery\'s success & error method of making an XMLHttpRequest.  '
                        },
                {
                          _id:37,
                          name:'blockchain',
                          image: 'images/37.jpg',
                          category: '',
                          link:'',
                          info:'info',
                          description:'An indestructible ledger containing independently distributed information, copied across many self-replicating data stores. A database is a series of bytes that is managed by a database management system. A data store is a repository for persistently storing and managing collection of data which include not just repositories like databases but also simpler stores such as files or emails. '
                        },
                {
                          _id:38,
                          name:'networking terms',
                          image: '',
                          category: '',
                          link:'',
                          info:'info',
                          description:'FQDN:fully qualified domain name. ACME: Automated Certificate Management Environment, this automates i/a b/w CA (certificate authority) and their users web servers (express/node). SSL: Secure sockets layer and TLS transport layer security, cryptographic protocols provide communication security over networks. A certificate is used for HTTPS connection. ***The HTTPS protocol uses the SSL protocol to establish secure connection over the HTTP layer. IP internet protocol, standard format for communication. OSI open systems interconnection model. TTLS:EAP extensible authentication protocol that encapsulates a TLS (transport security server) consisting of 1 min to propagate TTLS. For AWS, before using elastic load balancing, you must configure one or omre listeners for your classic load balancer. Listener is a process that checks for connection requests.  '
                        },
                {
                          _id:39,
                          name:'JSON server',
                          image: '',
                          category: 'nodejs',
                          link:'',
                          info:'info',
                          description:'JSON server is a node module. It is a server that serves up JSON data that you store in a simple json text file. In addition it provides simple support for delivering static resources that you can put in a folder and then the server will serve up those resources. install: npm install json-server-g . Next createa json-folder in your project folder. Here we add our json file we wish to serve up. In our command promt in the location of the json file, we start our server by typing: json-server --watch jsonfile.json. In the browser the server will ALSO serve files  we put in a public folder over the localhost:3000. JSON server does two thigns: it serves static files in our public folder of our project, and when there are HTTP requests to localhost:3000 I will return them the .json file.'
                        },



                        ];


            this.getDemo = function () {
                return demo;
            };

            this.getDem = function (index) {

                return demo[index];
            };





//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            var skills = {
                image: 'images/skills.png',
                front: ['HTML5', 'CSS3', 'Bootstrap','jQuery', 'AngularJS'],
                back: ['PowerShell','MongoDB', 'Express', 'RESTful API', 'NodeJS'],
                other: ['Github/Git','NPM/Bower/CDN','Gulp','WordPress', 'Ionic/Cordova'],
                concepts: ['Dynamic Data Binding', 'Single Page Applications', 'MVC Design Pattern', 'Asynchronous Programming', 'MEAN Stack'],
                list: ['html',
                        'css','Bootstrap','jQuery',
                        'javascript',
                        'angularJS', '-model', '-controller', '-directories', '-filters', '-services',
                    '-scope', '-forms', '-dependency injection', '-templates', '-routing', '-RESTfuf client-service communication',
                    '-Karma/Jasmine Unit Testing', '-Protractor E2E Testing',
                        'nodeJS', 'MVC','JSON-Server','Bower','Yo/Yeoman','MongoDB','Express',
                        'other'],
                title: 'Skill List',
                face: 'images/face.png',
                face3: 'images/Face3.png'
            };

            this.getSkills = function () {
                return skills;
            };


            var credentials = {
                image: 'images/credentials.png',
                list: ['UoI Diploma', 'Depaul Diploma'],
                title: 'Educational Credentials',
                diploma: 'images/diploma.png',
                ddiploma: 'images/ddiploma.png',
                cdiploma:  'images/cdiploma.png'
            };

            this.getCredentials = function () {
                return credentials;
            };

            var goals = {
                title: 'Programming Goals',
                list: ['employment as a full stack web developer', 'master front end skills: CSS, JS, HTML, Angular', 'develop personal web app projects', 'keep up to date with evolving techs in the industry', 'transition to server side development with nodeJS', 'create sample apps with business logic'],
                summary: '    My ultimate goal is to become a full stack web dev guru. I plan to achieve this goal by mastering the MEAN JavaScript Stack. The resource I am using to learn these technologies is the Coursera Full Stack Specialization Program. So far I am capable of building simple responsive front-end single page applications using AngularJS in congruency with other front end techs like jQuery and Bootstrap. I also figured out how to host these static dynamic sites via GitHub Pages. I am a fan of building Single Page Applications because they are very fast, user friendly, and can be accessed multi platform. My next step is transition over to the back-end side of the MEAN stack, were I will further learn and develop example server side apps with nodeJS, Express, and MongoDB.',
                title2: 'Goal List'
            };

            this.getGoals = function () {
                return goals;
            };
//-----------------------------------------------------------------------------------------------------
            //NEW CODE 6/7/2017



var samples=[
                         {
                          _id:0,
                          name:'GCS Fund',
                          image: 'images/main.png',
                          url: 'https://surakhchin.github.io/gcsfund',
                          date: '8/16/2017',
                          description:'Django web app embedded with custom javascript, ajax, html buttons and inputs.'
                        },
                        {
                          _id:1,
                          name:'Compass App',
                          image: 'images/compass.PNG',
                          url: 'https://surakhchin.github.io/compass',
                          date: '8/26/2017',
                          description:'Mobile app project to capture device GPS geolocation and rotational data using HTML5 Geolocation and Device Orientation Web APIs.'
                        },
                        {
                          _id:2,
                          name:'Menu',
                          image: 'images/menu.PNG',
                          url: 'https://surakhchin.github.io/conFusion/#/menu#menu',
                          date: '2/30/2017',
                          description:'Menu app is the featured page of conFusion site. It is an Angular page that uses bootstrap tabs to display menu dishes. Clicking on each dish redirects to a dish detail template were you can read and submit dish comments'

                        },
                        {
                          _id:3,
                          name:'Budgets',
                          image: 'images/budgets.PNG',
                          url: 'https://surakhchin.github.io/budgets2',
                          date: '5/30/2017',
                          description:'Simple budgets app build for an open source project. This app pulls custom data from a RESTful API server. Supports GET, UPDATE, DELETE, ADD operations on the Campaign Budgets Object.'
                        },
                        {
                          _id:4,
                          name:'Forms',
                          image: 'images/form.PNG',
                          url: 'https://surakhchin.github.io/form',
                          date: '6/1/2016',
                          description:'Sample forms made with HTML5, jQuery ajax, and custom JavaScript',
                          url2: 'https://surakhchin.github.io/form2'
                        },
                        {
                          _id:5,
                          name:'Chicago',
                          image: 'images/chicago.PNG',
                          url: 'https://surakhchin.github.io/Chicago',
                          date: '5/30/2016',
                          description:'Single html page responsive static website built with Bootstrap, custom jQuery, CSS3, and HTML5 elements.'
                        },
                        {
                          _id:6,
                          name:'conFusion',
                          image: 'images/confusion.PNG',
                          url: 'https://surakhchin.github.io/conFusion',
                          date: '2/30/2017',
                          description:'Single Page Application build with AngularJS, Bootstrap, custom JavaScript and jQuery.'
                        }
                        ];

            var samples2 = {
                image: 'images/sampleprojects.png',
                list: ['Sample Assignments', 'Mr. Constant', 'Gunz Online' ],
                title: 'Sample Projects'
            };

            this.getSamples = function () {
                return samples;
            };



            this.getSample = function (index) {

                return samples[index];
            };

// ----------------------------------------------------------------------------------------------------

            var dishes=[
                         {
                          _id:0,
                          name:'Uthapizza',
                          image: 'images/uthapizza.png',
                          category: 'mains',
                          label:'Hot',
                          price:'4.99',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }

                           ]
                        },
                        {
                          _id:1,
                          name:'Zucchi',
                          image: 'images/zucchipakoda.png',
                          category: 'appetizer',
                          label:'',
                          price:'1.99',
                          description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                          comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }

                           ]
                        },
                        {
                          _id:2,
                          name:'Vadonut',
                          image: 'images/vadonut.png',
                          category: 'appetizer',
                          label:'New',
                          price:'1.99',
                          description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }

                           ]
                        },
                        {
                          _id:3,
                          name:'ElaiCheese Cake',
                          image: 'images/elaicheesecake.png',
                          category: 'dessert',
                          label:'',
                          price:'2.99',
                          description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }

                           ]
                        }
                        ];
            var promotions = [
                {
                          _id:0,
                          name:'Weekend Grand Buffet',
                          image: 'images/buffet.png',
                          label:'New',
                          price:'19.99',
                          description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person '
                }

            ];




            this.getDishes = function(){

                return dishes;

            };

            this.getDish = function (index) {

                return dishes[index];
            };

            // implement a function named getPromotion
            // that returns a selected promotion.
            this.getPromotion = function (index) {

                return promotions[index];
            };



        }])

        .factory('corporateFactory', function() {
    
            var corpfac = {};
    
            var leadership = [
                {
                    name: "Peter Pan",
                    designation: "Chief Epicurious Officer",
                    abbr: "CEO",
                    description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
                },
                {
                    name: "Dhana Withers",
                    image: 'images/alberto.png',
                    designation: "Chief Food Officer",
                    abbr: "CFO",
                    description: "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
                },
                {
                    name: "Agumbe Tang",
                          image: 'images/alberto.png',
                    designation: "Chief Taste Officer",
                    abbr: "CTO",
                    description: "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
                },
                {
                    name: "Alberto Somayya",
                    image: 'images/alberto.png',
                    designation: "Executive Chef",
                    abbr: "EC",
                    description: "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
                }
                
            ];
     
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
            corpfac.getLeaders = function(){

                    return leadership;

                };

            corpfac.getLeader = function (index) {
                return leadership[index];
            };


            return corpfac;





        })

;
