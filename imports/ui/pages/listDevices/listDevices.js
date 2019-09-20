import './listDevices.html';
import { Device } from '../../../api/device/device';

Template.listDevices.helpers({
  devices () {
      return Device.find({});
  },
  logo () {
    return this.operatingSystem === 'Android' ? 'img/android.jpg' : 'img/apple.jpg';
  }
});