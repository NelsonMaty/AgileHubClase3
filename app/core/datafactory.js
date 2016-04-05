(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('datafactory', factory);

    // factory.$inject = [];

    /* @ngInject */
    function factory($http) {
        var todos = [
          {
            id:0,
            titulo:'Comprar',
            descripcion:'Comprar anillo de Doran y una pota',
            done:true
          },
          {
            id:1,
            titulo:'Farmear',
            descripcion:'Farm all the minions',
            done:true
          },
          {
            id:2,
            titulo:'Gankear',
            descripcion:'Gankear bot lane a nivel 6',
            done:false
          },
          {
            id:3,
            titulo:'Dont die',
            descripcion:'No morir gankeando la bot lane',
            done:false
          }
        ];

        var service = {
            getTodos: getToDos,
            removeTodo: removeToDo,
            editTodo: editTodo
        };

        return service;

        function getToDos() {
          console.log("paso por aca");
          return todos;
        }

        function removeTodo(id) {
          for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
              todos.splice(i, 1);
              break;
            }
          }
        }

        function editTodo(todo) {
          for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
              todos.splice(i, 1, todo);
              break;
            }
          }
        }
    }
})();
