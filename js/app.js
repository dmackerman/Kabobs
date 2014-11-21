(function() {

    function MeatController() {
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
    }

    function KabobsController() {

        this.update = function(kabobs) {
            console.log(arguments);
            this.master = angular.copy(kabobs);
        };

        this.reset = function() {
            this.kabobs = angular.copy(this.master);
        };
    }

    angular
      .module('kabobOrder', [])
      .controller('MeatController', MeatController)
      .controller('KabobsController', KabobsController);

})();
