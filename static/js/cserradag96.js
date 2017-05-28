/*#########################################################################################################################################################################################################################
# MODULE CREATION
#########################################################################################################################################################################################################################*/
var cserradag96 = angular.module("cserradag96", ["ui.router"]);

/*#########################################################################################################################################################################################################################
# APP CONFIGURATION
#########################################################################################################################################################################################################################*/
cserradag96.config(function($stateProvider, $urlRouterProvider) {

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    - ROUTES MANAGEMENT
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    $stateProvider
        // Main screen
        .state("main", {
            url         : "",
            templateUrl : "views/main/main.html",
            controller  : "MainController"
        })

    // Wrong url
    $urlRouterProvider.otherwise("");

});

/*#########################################################################################################################################################################################################################
# INITIAL GLOBAL SETTINGS
#########################################################################################################################################################################################################################*/
cserradag96.run(function ($rootScope) {
    $rootScope.baseURL  = "//cserradag96.github.io/";             /* Server domain */
    $rootScope.apiURL   = "static/apis/";    /* Server domain */
    $rootScope.lenguage = "es";                                   /* Default lenguage */
});
