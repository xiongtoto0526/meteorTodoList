'use strict';

import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/api/tasks';
export default function($scope, $meteor, $reactive, $timeout) {
   
   $reactive(this).attach($scope);
   var vm = this;

   // Notes: only helper function will lead ajax request to mongodb (https://www.meteor.com/tutorials/angular/collections)
   // this means when use [ Tasks.find({}) ] ,which is a pure client behavior , will result empty return.
   vm.helpers({
      tasks() {
        return Tasks.find({});
      }
    })
   
   debugger;
   console.log('this is todolist controller...');
}