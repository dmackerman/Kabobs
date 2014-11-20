
angular.module('kabobs', [])
    .controller('KabobController', ['$scope', function($scope) {
        $scope.master = {};

        $scope.update = function(kabobs) {
            $scope.master = angular.copy(kabobs);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    }]);