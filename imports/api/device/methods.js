import { Meteor } from 'meteor/meteor';
import { Device } from './device';

Meteor.methods({
    'insert.device' (doc) {
        Device.insert(doc);
    },
    'remove.device' (doc) {
        const temp = Device.findOne({ ipAddress: doc.ip });
        if (temp !== undefined) {
            Device.remove(temp);
        }
    } 
});