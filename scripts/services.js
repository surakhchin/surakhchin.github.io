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
                          link:'',
                          info:'info',
                          description:'There is a value in JavaScript that references a whole block of code, or a list of instructions. These values are called functions, which are "reusable packets of code." Note: function is a value, but we use function key word (not var) to assign the function its value. *** A function is a block of code that we wrap in a variable name and use that name with () to execute that block of code. Example: function sayHi() {console.log("Hello");}. Here we define a function sayHi, we can then invoke/call this function by typing: sayHi();. When the code catches up with this line it will look for our function definition and execute the instructions accordingly.'
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
                          description:'Both are ways to add property/values to an object. Note: objects and arrays occupy a single space in memory. .dot notation: object.newProperty = newValue; [bracket] notation: object[newProperty] = newValue. Note: when you pass in a property as an argument, in other words when you are calling a function with a property, you must specify the property as a string, aka in quotes. This is because the property is stored in memory as a string, and if you pass it in as a variable javascript will not know where that variable is defined. We use bracket notation (when we pass in a property as an argument) on the function definition side, on the parameter side of the function, to accept these properties that come in as arguments. If you try to accept a property using .dot notation, the function definition is going to expect the object.property property that is literally called "property". Rather, if you use [bracket] notation, when the property enters the function definition as an argument (in other words the value is being handed to the parameter), such as object[property], the function will know you are passing in the property into the bracket notation. Remember, a property name is a string, so if we pass in the property as an argument, has to be in quotes. To access the value of a property we can do: object.property or object["property"].'
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
                          name:'this',
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
                          description:'JavaScript supports constructing new functions during execution (dynamic) of a program, storing them in data structures, passing them as arguments to other functions, and returning them as values of other functions. A function is an instance of the Object type. A function has properties and has a link back to its constructor method. You can store a function in a variable. You can pass a function as a parameter to another function. You can return a function from a function. On a side note javascript supports Lexical scoping also known as static scoping. This is a convention used by many programming languages that sets the scope(range of functionality) of a variable so that it may be referenced from within the block of code in which it is defined. This is the basis of javascript closures.'
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
                          description:'Django web app embedded with custom javascript and html buttons/inputs.'
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
