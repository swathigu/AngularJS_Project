var app= angular.module('libraryApp',['ui.router','ui.grid','ui.bootstrap','ui.bootstrap.tpls','ngMessages','ngResource']);

app.config(['$stateProvider', '$urlRouterProvider',configApp]);


// Views targeting:
  		 // # relatively 	
        //  - my-view : 				 relatively target 'my-view' in parent state.
    	  //  - "" : 						relatively targets the unnamed view in parent state.
  		 // # absolutely views
    	  //  - my-view@ : 			  absolutely target 'my-view' in root. 
  		 //  - my-view@my-state :   absolutely target 'my-view' in my-state's view.	
  		 //  - @my-state: 		     absolutely target unnamed view in my-state's view.
  		 //  - @:  						 absolutely targets the unnamed view in root unnamed state.
  
  		 // Recommended, use always views and states names (only root is unnamed):
    	 // # relatively 	
        //  - my-view : 				 relatively target 'my-view' in parent state.
  		 // # absolutely views
  		 //  - my-view@my-state :   absolutely target 'my-view' in my-state's view.	
        //  - my-view@ : 			  absolutely target 'my-view' in root. 

function configApp($StateProvider,$UrlRouterProvider){

    $UrlRouterProvider.otherwise('/');
    
    $StateProvider.state('home',{
        url:'/',
        templateUrl:'app/views/index.html',
        views: {
                'head': {
                    url: "",
                    templateUrl: 'app/views/head.html'
                }
            }
    }).state('addBook',{
        url:'/addBook',
        templateUrl:'app/views/addBook.html'
    }).state('addBookSuccess',{
        url:'/addBookSuccess',
        template:'<p>Successfully Added Book</p>'
    }).state('list',{
        url:'/list',
        templateUrl:'app/views/bookList.html',
        controller: 'bookListController'
    }).state('contact',{
        url:'/contact',
        templateUrl:'app/views/contact.html'
    }).state('login',{
        url:'/login',
        templateUrl:'app/views/login.html'
    }).state('register',{
        url:'/register',
        templateUrl:'app/views/register.html'
    }).state('search',{
        url:'/search',
        templateUrl:'app/views/search.html'
    });
}
app.run(['$http','$window','$rootScope',configRun]);

function configRun($http,$window,$rootScope){
    
    // add JWT token as default auth header
     //   $http.defaults.headers.common.Authorization = 'Bearer ' + $window.jwtToken;
    
    $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
            console.log("Changing the state "+ fromState +" to "+ toState);     
    });
    
   /* (function(){
          $http.get('/app/token', function (token) {
            $window.jwtToken = token;
          });

    })();*/
}
