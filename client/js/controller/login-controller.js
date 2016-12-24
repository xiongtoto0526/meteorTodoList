'use strict';

import { Meteor } from 'meteor/meteor';
export default function($scope, $meteor, $reactive, $timeout) {

   console.log('this is login controller...');

   $reactive(this).attach($scope);
   // 'ngInject';
}