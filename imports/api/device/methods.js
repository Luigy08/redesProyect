import { Meteor } from 'meteor/meteor';
import { Device } from './device';

Meteor.methods({
    'insert.device' (doc) {
        Device.insert(doc);
    }
});