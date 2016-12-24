'use strict';

import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/api/tasks';
export default function($scope, $meteor, $reactive, $timeout) {
   
   $reactive(this).attach($scope);
   var vm = this;
   debugger;

   // notes : when insert by mongodb console ,
   // instead of insert in memory as did below, and then find all record here , will return [].(donot known why...)
   // which do not match the offical book (https://www.meteor.com/tutorials/angular/collections)
   // each time app restart ,db data will reload again...
   // guess : may be thera are some relation between mongodb persisit and load-data-from-boot which i missed .
   // (to be dig...)
   Tasks.insert({'text':'待做事项1'});
   Tasks.insert({'text':'待做事项2'});
   Tasks.insert({'text':'待做事项3'});
   vm.tasks = Tasks.find({}).fetch();
   console.log('this is todolist controller...');
}