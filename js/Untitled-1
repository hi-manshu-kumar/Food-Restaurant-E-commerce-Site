app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider.when("/",{
		templateUrl:'home.html'
	}).when("/about",{
		templateUrl:'aboutus.html',
		controller:'aboutctrl'
	}).when("/contact/:name/:job",{
		templateUrl:'contactus.html',
		controller:'contactctrl'
		
	}).when("/news",{
		template:"<h1>News are </h1>"
	}).otherwise({redirectTo:"/"
        });

})