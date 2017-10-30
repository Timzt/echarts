var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("http://www.ls-tim.com/vue/get.json").then(function (response) {
        $scope.myWelcome = response.data;
    });
});