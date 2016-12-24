import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find();
  });
}