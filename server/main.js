import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/api/tasks';

Meteor.startup(() => {
  // code to run on server at startup
  debugger;
  
   if (Tasks.find().count() == 0) {
     console.log('no old data found...');

     console.log('will init base data...');
     Tasks.insert({'text':'待做事项1'});
     Tasks.insert({'text':'待做事项2'});
     Tasks.insert({'text':'待做事项3'});
   }
   var newCount =  Tasks.find().count();
   console.log('new data count:'+ newCount);
});
