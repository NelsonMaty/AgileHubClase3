(function() {
    'use strict';

    angular
        .module('app.viewToDo')
        .controller('Controller', Controller);

    Controller.$inject = ['datafactory'];

    /* @ngInject */
    function Controller(datafactory) {
        var vm = this;

        activate();

        function activate() {
          console.log(datafactory.getToDos());
        }
    }
})();
