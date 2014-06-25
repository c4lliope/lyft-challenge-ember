import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
                     controller.set('routeA', this.store.createRecord('route', {
                       driverName: 'Joe',
                       origin: 'Sutro Heights Park, San Francisco, CA',
                       destination: 'Golden Gate Bridge, San Francisco, CA'
                     }));
                     controller.set('routeB', this.store.createRecord('route', {
                       driverName: 'Bob',
                       origin: '819 Mission St, San Francisco, CA',
                       destination: 'Pier 39, San Francisco, CA'
                     }));
                   }
});
