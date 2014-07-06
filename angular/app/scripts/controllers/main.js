'use strict';

/**
 * @ngdoc function
 * @name firstprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstprojectApp
 */
angular.module('firstprojectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
