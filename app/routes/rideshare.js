import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
                     controller.set('routeA', this.store.createRecord('route', {
                       driverName: 'Ashley',
                       origin: 'University of San Francisco',
                       destination: 'Dolores Park, SF',
                       iconPath: "assets/woman.svg"
                     }));
                     controller.set('routeB', this.store.createRecord('route', {
                       driverName: 'Matt',
                       origin: 'Presidio, SF',
                       destination: 'Ghiradelli Square, SF',
                       iconPath: "assets/man.svg"
                     }));
                   }
});
