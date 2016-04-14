'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todoInStore = localStorageService.get('todos');
    $scope.todos = todoInStore || [];
    $scope.$watch('todos', function() {
    	localStorageService.set('todos', $scope.todos);
    }, true);
    $scope.addTodo = function() {
    	for(var item in $scope.todos) {
    		if(item == $scope.todo) {
    			console.log($scope.todo +" Todo already present");
    			return;
    		}
    	}
      	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    $scope.removeTodo = function(index) {
    	$scope.todos.splice(index, 1);
    };

  });
