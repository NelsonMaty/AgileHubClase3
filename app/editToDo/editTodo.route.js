(function() {
  angular
    .module('app.editToDo')
    .config(config);

    function config($stateProvider) {

      $stateProvider
      .state('edit', {
        url: "/edit",
        templateUrl: "app/editToDo/editToDo.view.html"
      });
    }
}());
