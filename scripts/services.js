'use strict';

angular.module('confusionApp')


        .constant("baseURL","http://localhost:3000/")
        .service('demoFactory', ['$http', 'baseURL', function($http,baseURL) {


//---------------------NEW CODE JUNE 13 2017 ADDING DEMO OBJECT TO DEMO------------- PAGE-------------------------------------------------------------------------------
            var demo=[
                         {
                          _id:0,
                          name:'HTML5',
                          image: 'images/html5.png',
                          category: 'HTML5',
                          link:'https://www.google.com/search?q=html5&rlz=1C1CHBF_enUS742US742&oq=html&aqs=chrome.0.69i59j69i60j69i61j69i60j69i57j69i65.1308j0j7&sourceid=chrome&ie=UTF-8',
                          info:'info',
                          description:'The bare back-bone of an internet web page. Lays out the structural foundation of the site.'
                        },
                        {
                          _id:1,
                          name:'CSS3',
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
                          description:'Programming language of the web. Very versatile and popular.'
                        },
                        {
                          _id:3,
                          name:'AngularJS',
                          image: 'images/angular.png',
                          category: 'AngularJS',
                          link:'https://www.google.com/search?num=100&safe=off&rlz=1C1CHBF_enUS742US742&q=angularjs&oq=angularjs&gs_l=serp.3..35i39k1l2j0i67k1j0i20k1j0i67k1l6.12606.13477.0.13605.9.9.0.0.0.0.155.993.5j4.9.0....0...1.1.64.serp..0.9.993...0j0i131k1.-uM5Wggwq8U',
                          info:'info',
                          description:'A very powerful front end javascript framework. Some of my favorite features supported are Single Page Applications, MVC architecture, and dynamic data binding'
                        }
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
