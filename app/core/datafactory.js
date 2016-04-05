(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('datafactory', factory);

    // factory.$inject = [];

    /* @ngInject */
    function factory() {

        var todos = [
          {
            id:5,
            titulo:'Banear',
            descripcion:'Banear a Darius, Yasuo o Teemo',
            done:true
          },
          {
            id:6,
            titulo:'Pick lane',
            descripcion:'Pedir top o flamear chilenos en el chat',
            done:true
          },
          {
            id:7,
            titulo:'Pick Champ',
            descripcion:'Instalockear poppy, si ya la pickearon continuar flameando.',
            done:true
          },
          {
            id:0,
            titulo:'Comprar',
            descripcion:'Comprar una espada de doran y una pota',
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
          },
          {
            id:4,
            titulo:'Card grande',
            descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            done:false
          },
          {
            id:8,
            titulo:'Teleport',
            descripcion:'Usar TP en bot',
            done:false
          },
          {
            id:9,
            titulo:'Kill',
            descripcion:'Focusear adc, pushear torre, ganar dragon',
            done:false
          }
        ];

        var service = {
            getToDos: getToDos,
            removeToDo: removeToDo,
            editToDo: editToDo,
            addToDo: addToDo
        };

        return service;

        ////////////////////////////

        function getToDos() {
          return todos;
        }

        function removeToDo(id) {
          for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
              todos.splice(i, 1);
              break;
            }
          }
        }

        function editToDo(todo) {
          for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
              todos.splice(i, 1, todo);
              break;
            }
          }
        }

        function addToDo(todo) {
          todos.push(todo);
        }
    }
})();
