import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
             updateMap: function() {
                          var routeA = this.get('routeA');
                          var origin = routeA.get('origin').get('address');
                          var destination = routeA.get('destination').get('address');
                          displayRoute(directionsDisplayA, origin, destination);

                          var routeB = this.get('routeB');
                          var origin = routeB.get('origin').get('address');
                          var destination = routeB.get('destination').get('address');
                          displayRoute(directionsDisplayB, origin, destination);
                        }
           }
});
