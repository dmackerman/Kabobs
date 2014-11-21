angular.module('kabobOrder', [])
    .controller('KabobController', ['$scope', function($scope) {
        $scope.master = {};

        $scope.update = function(kabobs) {
            $scope.master = angular.copy(kabobs);
        };

        $scope.reset = function() {
            $scope.kabobs = angular.copy($scope.master);
        };

        $scope.reset();

    }])

.controller('MeatController', function() {

    this.products = [{
        name: 'Beef Kobeeda',
        id: 'beefKobeeda',
        value: 'beefKobeeda'
    }, {
        name: 'Chicken Kobeeda',
        id: 'chickenKobeeda',
        value: 'chickenKobeeda'
    }, {
        name: 'Beef',
        id: 'beef',
        value: 'beef'
    }, {
        name: 'Chicken',
        id: 'chicken',
        value: 'chicken'
    }, {
        name: 'Lamb',
        id: 'lamb',
        value: 'lamb'
    }];
});
