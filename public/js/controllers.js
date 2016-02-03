'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    socket.on('send:name', function (data) {
      $scope.name = data.name;
    });
  }).
  controller('MyCtrl1', function ($scope, socket) {
    socket.on('send:time', function (data) {
      $scope.time = data.time;
    });
  }).
  controller('LoginCtrl', function($scope){

    $scope.login = function() {
      // $scope.msg = 'clicked';
      alert($scope.username + " " + $scope.password );
    }
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
  });
