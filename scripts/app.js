'use strict';

angular.module('confusionApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // ---------NEW CODE 6/12/2017----------
            //route for Demo page
            .state('app.demo', {
                url: 'demo',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })

            // route for the demo#demo id in menu page
            .state('app.demoid', {
                url: 'menu#menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })

            // route for the /aboutus#aboutme tag in aboutus page
            .state('app.aboutusid', {
                url: 'aboutus#aboutme',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })

            // route for the /contactus#contactme tag in contactus page
            .state('app.contactusid', {
                url: 'contactus#contactme',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })


           // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu#dishdetailid/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/dishdetail.html',
                        controller  : 'DishDetailController'
                   },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })

            //-----------------------------------------------



             // route for sample projects
            .state('app.samples', {
                url: 'samples',
                views: {
                    'content@': {
                        templateUrl : 'views/samples.html',
                        controller  : 'JumboController'
                   }
                }
            })


            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/home.html'
                    },
                    'content2': {
                        templateUrl : 'views/samples.html'
                    },
                    'content3': {
                        templateUrl : 'views/creds.html'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {

                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'                  
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }

                }
            })
        
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'                  
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }

                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    },
                    'content2@': {
                        templateUrl : null
                    },
                    'content3@': {
                        templateUrl : null
                    }
                }
            })


                // route for the menu#menu id in menu page
            .state('app.menuid', {
                url: 'menu#menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })


            // route for the sampledetals page ***NEW: 6/7/2017
            .state('app.sampledetails', {
                url: 'samples/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/home.html',
                        controller  : 'DishDetailController'
                   },
                    'content2@': {
                        templateUrl : 'views/sampledetails.html',
                        controller  : 'SamplesController'
                    },
                    'content3@': {
                        templateUrl : 'views/creds.html',
                        controller  : ''
                    }
                }
            });


    
        $urlRouterProvider.otherwise('/');
    }])
;
