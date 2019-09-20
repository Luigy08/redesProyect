import './device.html';
import { Session } from 'meteor/session';
import deviceDetect from 'mobile-device-detect';

Template.device.onRendered(() => {
  $.getJSON('https://api.ipify.org?format=json', data => { //eslint-disable-line
    Session.set('ip', data.ip);

    Meteor.call('remove.device', { ip: Session.get('ip') });
    Session.set('osName', deviceDetect.osName);
    Session.set('mobileVendor', deviceDetect.mobileVendor);
    Session.set('mobileModel', deviceDetect.mobileModel);
    Session.set('deviceType', deviceDetect.deviceType);
    const doc = {
      ipAddress: Session.get('ip'),
      company: Session.get('mobileVendor'),
      operatingSystem: Session.get('osName'),
      deviceType: Session.get('deviceType'),
      modelo: Session.get('mobileModel')
    }
    console.log(Session.get('ip'))
      Meteor.call('insert.device', doc);
  });
});
Template.device.onDestroyed(() => {
  Meteor.call('remove.device', { ip: Session.get('ip') });
});
Template.device.helpers({
  ip () {
    
    return Session.get('ip');
  },
  osName () {
    return Session.get('osName');
  },
  mobileVendor () {
    return Session.get('mobileVendor');
  },
  mobileModel () {
    return Session.get('mobileModel');
  },
  deviceType () {
    return Session.get('deviceType');
  },
  logo () {
    return deviceDetect.osName === 'Android' ? 'img/android.jpg' : 'img/apple.jpg';
  }
});
