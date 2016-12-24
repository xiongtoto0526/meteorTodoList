'use strict';

'ngInject';
export default angular.module('xmasterApp.route', [])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);//?

    $stateProvider
      .state('home', { url: '/', templateUrl: '/client/view/login.ng.html', controller: 'LoginController as vm' });

    $stateProvider
       .state('todoList', { url: '/todolist', templateUrl: '/client/view/todolist.ng.html', controller: 'TodoListController as vm' });

  });
