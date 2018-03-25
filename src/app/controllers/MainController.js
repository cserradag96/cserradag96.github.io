/*#####################################################################################################################
# MAIN APPLICATION CONTROLLER
#####################################################################################################################*/
(function() {
  portfolio.controller('MainController', ["$scope", "$rootScope", "$state", "$translate", function($scope, $rootScope, $state, $translate) {

    // $state.defaultErrorHandler(function() { /* do nothing */});

    /*-----------------------------------------------------------------------------------------------------------------
    - FUNCIONES
    -----------------------------------------------------------------------------------------------------------------*/
    $scope.changeLang = function() {
      if ($rootScope.lang =='es') { $rootScope.lang = 'en'; }
      else { $rootScope.lang = 'es'; };
      $scope.resume = $rootScope.baseURL + 'assets/files/resume/' + $rootScope.lang + '.pdf';
      $translate.use($rootScope.lang);
    };

    $scope.goToRecaptcha = function(data) {
      $rootScope.mailData = data;
      $state.go('recaptcha');
    };

    /*-----------------------------------------------------------------------------------------------------------------
    - VIEW CONFIGURATION
    -----------------------------------------------------------------------------------------------------------------*/
    $scope.resume = $rootScope.baseURL + 'assets/files/resume/' + $rootScope.lang + '.pdf';
  }]);
})();