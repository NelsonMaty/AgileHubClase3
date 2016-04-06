(function() {
    'use strict';

    angular
        .module('app.viewToDo')
        .controller('viewController', viewController);

    viewController.$inject = ['datafactory'];

    function viewController(datafactory) {
        var vm = this;

        vm.toDos = [];
        vm.markAsDone = markAsDone;

        activate();

        ///////////////////////////////////

        function activate(){
          vm.toDos = getToDos();
        }

        function getToDos() {
          console.log('traigo todos');
          return datafactory.getToDos();
        }

        function markAsDone (task){
          console.log(task);
          datafactory.markAsDone(task.id);
        }
    }
})();
