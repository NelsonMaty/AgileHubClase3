(function() {
    'use strict';

    angular
        .module('app.viewToDo')
        .controller('viewController', viewController);

    viewController.$inject = ['datafactory'];

    function viewController(datafactory) {
        var vm = this;

        vm.toDos = [];

        activate();

        ///////////////////////////////////

        function activate(){
          vm.toDos = getToDos();
        }

        function getToDos() {
          return datafactory.getToDos();
        }

        
    }
})();
