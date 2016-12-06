// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('ionic-todo', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  //
  // app.config(function(localStorageServiceProvider) {
  //   localStorageServiceProvider
  //     .setPrefix('ionic-todo');
  // });

app.controller('main', function($scope, $ionicPopup, $ionicListDelegate) {
  $scope.tasks = [{
    task: "Should hit the Gym",
    completed: true
  }, {
    task: "Learn Angular 2.0",
    completed: false
  }, {
    task: "Trip to Kasol",
    completed: false
  }];

  $scope.newTask = function() {
    $ionicPopup.prompt({
      title: 'New task',
      template: 'What do you want to do?',
      inputType: 'text',
      inputPlaceholder: 'Enter your TODO'
    }).then(function(res) {
      $scope.tasks.push({
        task: res,
        completed: false
      })
    });
  }

  $scope.editTask = function(todoData) {
    $scope.data = {
      response: todoData.task
    };
    console.log($scope.data);
    $ionicPopup.prompt({
      title: 'Edit task',
      inputType: 'text',
      scope: $scope
    }).then(function(res) {
      if (res !== undefined) todoData.task = $scope.data.response;
      $ionicListDelegate.closeOptionButtons();
    })
  }

  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1);
  }
})
