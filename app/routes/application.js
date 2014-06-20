import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
                     controller.set('routeA', this.store.createRecord('route', {
                       driverName: 'Joe'
                     }));
                     controller.set('routeB', this.store.createRecord('route', {
                       driverName: 'Bob'
                     }));
                   }
});
