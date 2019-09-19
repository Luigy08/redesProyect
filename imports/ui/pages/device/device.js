import './device.html';
import deviceDetect from 'mobile-device-detect';

Template.device.helpers({
  osName () {
    return deviceDetect.osName;
  },
  mobileVendor () {
    return deviceDetect.mobileVendor;
  },
  mobileModel () {
    return deviceDetect.mobileModel;
  },
  deviceType () {
    return deviceDetect.deviceType;
  }
});
