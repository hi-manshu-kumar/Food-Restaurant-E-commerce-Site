app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider.when("/",{
		templateUrl:'index1.html'
	}).when("/specials",{
		templateUrl:'indexspecial.html',
		controller:'specialctrl'
	}).when("/menu",{
		templateUrl:'index.html',
		controller:'menuctrl'
		
	}).otherwise({redirectTo:"/"
        });

})