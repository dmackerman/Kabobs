
(function() {

    var app = angular.module('kabobs', ['ngMaterial']);

    app.controller('KabobController', ['$scope', function($scope) {
        $scope.data = {};
        $scope.data.geoff = false;
        $scope.data.richard = false;

        $scope.update = function(kabobs) {
            $scope.data = angular.copy(kabobs);
        };

        $scope.reset = function () {
            $scope.kabobs = angular.copy($scope.data);
        };

        $scope.reset();

    });



})();