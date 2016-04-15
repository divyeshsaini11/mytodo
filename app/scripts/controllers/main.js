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
    	console.log("Adding TODO");

    	for(var item in $scope.todos) {
    		console.log(item + " item");
    		console.log($scope.todo + " in for loop");
    		if($scope.todos[item] == $scope.todo) {
    			console.log($scope.todo +" Todo already present");
    			alert($scope.todo +":  Todo already present");
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
