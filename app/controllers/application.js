import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
             updateMap: function() {
                          var routeA = this.get('routeA');
                          var origin = routeA.get('origin').get('addressString');
                          var destination = routeA.get('destination').get('addressString');
                          displayRoute(directionsDisplayA, origin, destination);

                          var routeB = this.get('routeB');
                          var origin = routeB.get('origin').get('addressString');
                          var destination = routeB.get('destination').get('addressString');
                          displayRoute(directionsDisplayB, origin, destination);

                          /* TODO update viewport to include all four points */
                        }
           }
});
