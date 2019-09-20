import { Router } from 'meteor/iron:router';

// Import needed templates
import '../../ui/layouts/body/body';
import '../../ui/pages/home/home';
import '../../ui/pages/not-found/not-found';
import '../../ui/pages/device/device';
import '../../ui/pages/listDevices/listDevices';

Router.configure({
  layoutTemplate: 'App_body',
  template: 'App_home',
  notFoundTemplate: 'App_notFound'
});

Router.route('/', {
  name: 'home',
  waitOn: function () {
    Meteor.subscribe('device.all');
  },
  onBeforeAction: function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.render('device');
    } else {
      this.render('listDevices');
    }
  }
});
