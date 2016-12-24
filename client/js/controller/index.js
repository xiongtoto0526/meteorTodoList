'use strict';

import LoginController from './login-controller.js';
import TodoListController from './todolist-controller.js';

export default angular
  .module('app.controllers', [])
  .controller('LoginController', LoginController)
  .controller('TodoListController', TodoListController);