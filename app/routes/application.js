import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
                     controller.set('routeA', this.store.createRecord('route', {
                       driverName: 'Joe',
                       origin: this.store.createRecord('location', {}),
                       destination: this.store.createRecord('location', {})
                     }));
                     controller.set('routeB', this.store.createRecord('route', {
                       driverName: 'Bob',
                       origin: this.store.createRecord('location', {}),
                       destination: this.store.createRecord('location', {})
                     }));
                   }
});
