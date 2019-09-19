
import { Meteor } from 'meteor/meteor';
import { Device } from '../device';

Meteor.publish('device.all', () => (Device.find()));
