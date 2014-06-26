import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
                     controller.set('routeA', this.store.createRecord('route', {
                       driverName: 'Ashley',
                       origin: 'Sutro Heights Park, SF',
                       destination: 'Golden Gate Bridge, SF',
                       iconPath: "assets/woman.svg"
                     }));
                     controller.set('routeB', this.store.createRecord('route', {
                       driverName: 'Matt',
                       origin: 'University of San Francisco',
                       destination: 'Pier 39, San Francisco',
                       iconPath: "assets/man.svg"
                     }));
                   }
});
