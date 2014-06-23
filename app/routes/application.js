import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
                     controller.set('routeA', this.store.createRecord('route', {
                       driverName: 'Joe',
                       origin: this.store.createRecord('location', {latLong: true, latitude: 37.802139, longitude: -122.41874}),
                       destination: this.store.createRecord('location', {latLong: false, address: 'Golden Gate Bridge, San Francisco, CA'})
                     }));
                     controller.set('routeB', this.store.createRecord('route', {
                       driverName: 'Bob',
                       origin: this.store.createRecord('location', {latLong: false, address: '819 Mission St, San Francisco, CA'}),
                       destination: this.store.createRecord('location', {latLong: true, latitude: 37.777794, longitude: -122.511107})
                     }));
                   }
});
