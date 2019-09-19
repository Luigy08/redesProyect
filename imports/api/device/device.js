// Definition of the users collection
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
const Device = new Mongo.Collection('device');

const DeviceSchema = new SimpleSchema({
  ipAddress: {
    type: String,
    label: 'IP Address',
    autoform: {
      type: 'text'
    }
  },
  HostName: {
    type: String,
    label: 'Host Name',
    autoform: {
      type: 'text'
    }
  },
  operatingSystem: {
    type: String,
    label: 'Sistema Operativo',
    autoform: {
      type: 'text'
    }
  },
  deviceType: {
    type: String,
    label: 'Tipo de Dispocitivo',
    autoform: {
      type: 'text'
    }
  }
}, { check: check, tracker: Tracker });

Device.attachSchema(DeviceSchema);

Device.deny({
  insert () { return true; },
  update () { return true; },
  remove () { return true; }
});

export {
  DeviceSchema,
  Device
};