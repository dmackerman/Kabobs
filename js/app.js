(function() {

    function KabobsController() {

        // viewModel. bind here to avoid 'this' (and having to use .bind() to change `this`
        // context, and issues inside other function calls.
        var vm = this;

        vm.products = [{
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

        vm.update = function(kabobs) {
            console.log(arguments);
            vm.master = angular.copy(kabobs);
        };

        vm.reset = function() {
            vm.kabobs = angular.copy(vm.master);
        };

    }

    angular
        .module('kabobOrder', [])
        .controller('KabobsController', KabobsController);

})();
