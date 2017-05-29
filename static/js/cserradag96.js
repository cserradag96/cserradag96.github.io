/*#########################################################################################################################################################################################################################
# MODULE CREATION
#########################################################################################################################################################################################################################*/
var cserradag96 = angular.module("cserradag96", ["ui.router", 'pascalprecht.translate', 'ngSanitize']);

/*#########################################################################################################################################################################################################################
# APP CONFIGURATION
#########################################################################################################################################################################################################################*/
cserradag96.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

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

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    - TRANSLATE MANAGEMENT
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    // Spanish language
    $translateProvider.translations("es", {
      submit      : "Enviar",

      lang        : "english",
      main_text0  : "¡Bienvenido!",
      main_text1  : "Me llamo <strong>Carlos Serrada</strong>, y éste es mi portafolio",

      about_me    : "acerca de mi",
      skills      : "habilidades",
      experience  : "experiencia",
      projects    : "proyectos",

      contact_me       : "contáctame",
      contact_me_text0 : "Escribeme",
      contact_me_text1 : "Nombre",
      contact_me_text2 : "Correo electrónico",
      contact_me_text3 : "Escribir un mensaje...",
      contact_me_text4 : "Sigueme",
      contact_me_text5 : "Ayúdame a mejorar el sitio",
      contact_me_text6 : "Por favor hazme saber tus sugerencias, tus comentarios y los errores que encuentres haciendo click <a href='https://github.com/cserradag96/cserradag96.github.io/issues'>aquí",
      contact_me_text7 : "Sí te ha gustado mi trabajo puedes ayudarme a seguir investigando haciendo una donación"
    });

    // English language
    $translateProvider.translations("en", {
      submit      : "Submit",

      lang        : "español",
      main_text0  : "Welcome!",
      main_text1  : "My name is <strong>Carlos Serrada</strong>, and this is my portfolio",

      about_me    : "about me",
      skills      : "skills",
      experience  : "experience",
      projects    : "projects",

      contact_me       : "contact me",
      contact_me_text0 : "Write me",
      contact_me_text1 : "Name",
      contact_me_text2 : "Email address",
      contact_me_text3 : "Write a message...",
      contact_me_text4 : "Follow me",
      contact_me_text5 : "Help me improve the site",
      contact_me_text6 : "Please let me know your suggestions, your comments and the errors you find by clicking <a href='https://github.com/cserradag96/cserradag96.github.io/issues'>here",
      contact_me_text7 : "If you liked my work you can help me to continue investigating making a donation"
    });

    // Default language
    $translateProvider.preferredLanguage('es');

    // Mark as safe
    $translateProvider.useSanitizeValueStrategy('sanitize');

});

/*#########################################################################################################################################################################################################################
# INITIAL GLOBAL SETTINGS
#########################################################################################################################################################################################################################*/
cserradag96.run(function ($rootScope) {
    $rootScope.baseURL = "//cserradag96.github.io/";  /* Server domain */
    $rootScope.apiURL  = "static/apis/";              /* Server domain */
    $rootScope.lang    = 'es';                        /* Default lenguage */
});
