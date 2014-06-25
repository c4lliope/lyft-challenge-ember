import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
                     controller.set('routeA', this.store.createRecord('route', {
                       driverName: 'Joe',
                       origin: this.store.createRecord('location', {address: 'Sutro Heights Park, San Francisco, CA'}),
                       destination: this.store.createRecord('location', {address: 'Golden Gate Bridge, San Francisco, CA'})
                     }));
                     controller.set('routeB', this.store.createRecord('route', {
                       driverName: 'Bob',
                       origin: this.store.createRecord('location', {address: '819 Mission St, San Francisco, CA'}),
                       destination: this.store.createRecord('location', {address: 'Pier 39, San Francisco, CA'})
                     }));
                   }
});
