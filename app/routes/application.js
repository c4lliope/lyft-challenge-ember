import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
                     controller.set('routeA', this.store.createRecord('route', {
                       driverName: 'Joe',
                       origin: 'Sutro Heights Park, San Francisco',
                       destination: 'Golden Gate Bridge, San Francisco'
                     }));
                     controller.set('routeB', this.store.createRecord('route', {
                       driverName: 'Bob',
                       origin: 'University of San Francisco',
                       destination: 'Pier 39, San Francisco'
                     }));
                   }
});
