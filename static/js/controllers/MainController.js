/*#########################################################################################################################################################################################################################
# MAIN APPLICATION CONTROLLER
#########################################################################################################################################################################################################################*/
INEATugs.controller('MainController', function($scope, $rootScope, $http, $auth, $state, $stateParams) {

    //$state.defaultErrorHandler(function() { /* do nothing */});

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    - FUNCIONES
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    // Login method
    $scope.login = function() {
        var data = {username: $scope.username, password: $scope.password};
        $auth.login(data)
            .then(
                function successCallback(response){
                    $auth.setToken(response.data['key']);
                    $scope.resetLoginForm();
                    $scope.resetRpmForm();
                    $scope.resetNewPasswordForm();
                    $rootScope.errorMessages = [];
                    $rootScope.loginShow = false;
                    $rootScope.homeShow = true;
                    $scope.getCurrentUser();
                    $state.go("home");
                },
                function errorCallback() { $rootScope.errorMessages = ["Datos incorrectos"]; }
            )
            .catch(function(response){ /* things */ }
        );
    };

    // LogOut Test function
    $scope.logout = function() {
        $auth.logout().then(function() {
            $http.post($rootScope.apiURL + 'auth/logout/').then(
                function successCallback(response) {},
                function errorCallback(response) {}
            );
            $rootScope.loginShow  = true;
            $rootScope.loginView  = 0;
            $rootScope.homeShow   = false;
            $state.go("main");
        });
    };

    // Send restore password mail
    $scope.sendRPM = function() {
        var data = { email : $scope.resetPassEmail };

        $http.post($rootScope.apiURL + 'auth/password/restore/', data).then(
            function successCallback(response) {
                $scope.resetNewPasswordForm();
                $scope.goToSuccessView("Se ha enviado el correo para restauración de contraseña satisfactoriamente");
            },
            function errorCallback(response) {
                $rootScope.errorMessages = ["Correo no registrado"]
            }
        );
    };

    // Set new password metod
    $scope.setNewPassword = function() {
        var data = {
            uid           : $stateParams.key0,
            token         : $stateParams.key1,
            new_password1 : $scope.newPass0,
            new_password2 : $scope.newPass1
        }

        $http.post($rootScope.apiURL + 'auth/password/reset/confirm/', data).then(
            function successCallback(response) {
                $scope.resetNewPasswordForm();
                $scope.goToSuccessView("Se estableció la nueva contraseña satisfactoriamente");
            },
            function errorCallback(response) {
                var data = response.data;
                var err0 = "Invalid value";
                var err1 = "The two password fields didn't match.";
                var err2 = "This password is entirely numeric.";
                var err3 = "This password is too common.";
                var err4 = "This password is too short. It must contain at least 8 characters.";
                var err5 = "The password is too similar to the username.";
                var err6 = "The password is too similar to user email.";
                var err7 = "The password is too similar to user first_name.";
                var err8 = "The password is too similar to user last_name.";

                var msg0 = "Este enlace ya fué usado o ha expirado";
                var msg1 = "Las contraseñas no coinciden";
                var msg2 = "La contraseña solo tiene números";
                var msg3 = "La contraseña es demasiado simple";
                var msg4 = "La contraseña debe tener al menos 8 carateres";
                var msg5 = "La contraseña se parece demasiado a su nombre de usuario";
                var msg6 = "La contraseña se parece demasiado a su correo";
                var msg7 = "La contraseña se parece demasiado a su nombre";
                var msg8 = "La contraseña se parece demasiado a su apellido";
                var msg9 = "Error desconocido";

                $rootScope.errorMessages = [];

                if (data.token == err0) { $rootScope.errorMessages.push(msg0) }
                else {
                    var errors = data.new_password2
                    for(var i=0; i<errors.length; i++) {
                        if (errors[i] == err1)      { $rootScope.errorMessages.push(msg1) }
                        else if (errors[i] == err2) { $rootScope.errorMessages.push(msg2) }
                        else if (errors[i] == err3) { $rootScope.errorMessages.push(msg3) }
                        else if (errors[i] == err4) { $rootScope.errorMessages.push(msg4) }
                        else if (errors[i] == err5) { $rootScope.errorMessages.push(msg5) }
                        else if (errors[i] == err6) { $rootScope.errorMessages.push(msg6) }
                        else if (errors[i] == err7) { $rootScope.errorMessages.push(msg7) }
                        else if (errors[i] == err8) { $rootScope.errorMessages.push(msg8) };
                    };

                    if ($rootScope.errorMessages.length == 0) {
                        $rootScope.errorMessages.push(msg9)
                    };
                };
            }
        );
    };

    // Close error message
    $rootScope.closeErrorMessage = function() {
        $rootScope.errorMessages = [];
    }

    // Close success message
    $rootScope.closeSuccessMessage = function() {
        $rootScope.successMessages = [];
    }

    // Change current login subview for the login subview
    $scope.goToLogin = function() {
        $rootScope.errorMessages = [];
        $rootScope.loginView = 0;
    };

    // Change current login subview for the reset password subview
    $scope.goToResetPass = function() {
        $rootScope.errorMessages = [];
        $rootScope.loginView = 1;
    };

    // Change current login subview for the new password subview
    $scope.goToNewPass = function() {
        $rootScope.loginView = 2;
    };

    // Change current login subview for the reset password subview
    $scope.goToSuccessView = function(message) {
        $rootScope.errorMessages   = [];
        $rootScope.successMessages = [message];
        $rootScope.loginView       = 3;
    };

    // Reset the login form
    $scope.resetLoginForm = function() {
        $scope.username = null;
        $scope.password = null;
        $scope.loginForm.$setPristine();
        $scope.loginForm.$setUntouched();
    };

    // Reset the signup form
    $scope.resetSignupForm = function() {
        $scope.newUser = {
            username  : null,
            firstName : null,
            lastName  : null,
            email     : null,
            password0 : null,
            password1 : null
        };

        $scope.signupForm.$setPristine();
        $scope.signupForm.$setUntouched();
    };

    // Reset the reset password email form
    $scope.resetRpmForm = function() {
        $scope.resetPassEmail = null;
        $scope.rpmForm.$setPristine();
        $scope.rpmForm.$setUntouched();
    };

    // Reset the new password form
    $scope.resetNewPasswordForm = function() {
        $scope.newPass0 = null;
        $scope.newPass1 = null;
        $scope.newPasswordForm.$setPristine();
        $scope.newPasswordForm.$setUntouched();
    };

    // Function to get the list of roles
    $scope.getCurrentUser = function() {
        $http.get($rootScope.apiURL + 'users/current/').then(
            function successCallback(response) { $rootScope.currentUser = response.data; console.log(response.data); },
            function errorCallback(response) {}
        );
    };

    // Function to get the list of users
    $rootScope.getUsersList = function(scope) {
        $http.get($rootScope.apiURL + 'users/').then(
            function successCallback(response) { scope.usersList = response.data.results; },
            function errorCallback(response) {}
        );
    };

    // Function to get the list of users
    $rootScope.searchUser = function(scope, string) {
        $http.get($rootScope.apiURL + 'users/?search='+string).then(
            function successCallback(response) { scope.userSearched = response.data.results; },
            function errorCallback(response) {}
        );
    };

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    - SCREEN MANAGEMENT
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    // Set defaults values
    $rootScope.errorMessages   = [];
    $rootScope.successMessages = [];

    // If there is an active session
    if ($auth.isAuthenticated()) {
        $rootScope.loginShow = false;
        $rootScope.homeShow = true;
        $scope.getCurrentUser();
        $state.go("home");
    };

    // If the current view is userRegister, set pertinent values
    if ($state.is('resetPassword')) {
        $rootScope.homeShow  = false;
        $rootScope.loginShow = true;
        $scope.goToNewPass();
    }
});