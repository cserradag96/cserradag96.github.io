/*#########################################################################################################################################################################################################################
# RECAPTCHA CONTROLLER
#########################################################################################################################################################################################################################*/
cserradag96.controller('RecaptchaController', function($scope, $rootScope, $http, $state, $translate, SweetAlert) {

    //$state.defaultErrorHandler(function() { /* do nothing */});

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    - FUNCIONES
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    $scope.sendContactMail = function() {
        $scope.disbleBtn = true;
        $http.post("https://formspree.io/thecsportfolio@gmail.com", $rootScope.mailData).then(
            function successCallback(response) { $scope.verificationSuccess = true; },
            function errorCallback(response) { $scope.disbleBtn = false; }
        );
    };

    $scope.setID = function (id) { $scope.id = id; };
    $scope.recaptchaValidate = function() { $scope.validRecaptcha = true; };
    $scope.recaptchaExpire = function() { $scope.validRecaptcha = false; vcRecaptchaService.reload($scope.id); };
    $scope.goToMain = function() { $state.go('main'); };

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    - VIEW CONFIGURATION
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    $scope.disbleBtn = false;
    $scope.validRecaptcha = false;
    $scope.verificationSuccess = false;

});