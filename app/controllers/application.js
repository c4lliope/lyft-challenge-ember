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

                          this.send('arbitrate');

                     var points = [this.get('routeA').get('origin'),
       this.get('routeA').get('destination'),
       this.get('routeB').get('origin'),
       this.get('routeB').get('destination')];
                     centerMap(points);
                        },

       arbitrate: function() {
                    var routeA = this.get('routeA');
                    var routeB = this.get('routeB');

                    routeA.set('winner', false);
                    routeB.set('winner', false);

                    var originA = routeA.get('origin').get('addressString');
                    var destinationA = routeA.get('destination').get('addressString');
                    var originB = routeB.get('origin').get('addressString');
                    var destinationB = routeB.get('destination').get('addressString');

                    var service = new google.maps.DistanceMatrixService();
                    service.getDistanceMatrix(
                        {
                          origins: [originA, originB, destinationA, destinationB],
                      destinations: [originA, originB, destinationA, destinationB],
                      travelMode: google.maps.TravelMode.DRIVING,
                      unitSystem: google.maps.UnitSystem.IMPERIAL,
                      durationInTraffic: false,
                      avoidHighways: false,
                      avoidTolls: false
                        }, callback);

                    var self=this;

                    function callback(response, status) {
                      if (status == google.maps.DistanceMatrixStatus.OK) {
                        var aPickUpBDistance = response.rows[0].elements[1].distance.value +
                          response.rows[1].elements[3].distance.value +
                          response.rows[3].elements[2].distance.value;
                        console.log("a picks up b: " + aPickUpBDistance);

                        var bPickUpADistance = response.rows[1].elements[0].distance.value +
                          response.rows[0].elements[2].distance.value +
                          response.rows[2].elements[3].distance.value;
                        console.log("b picks up a: " + bPickUpADistance);

                        var winner, loser;
                        if(aPickUpBDistance < bPickUpADistance) {
                          winner = "A"; loser = "B";
                          routeA.set('winner', true);
                        } else {
                          winner = "B"; loser = "A";
                          routeB.set('winner', true);
                        }
                        self.send('drawPickupDropoffLegs', winner, loser);
                        console.log("It's shorter if " + winner + " picks up " + loser);
                      }
                    }
                  },
       drawPickupDropoffLegs: function(winnerLetter, loserLetter) {
                                var winner = this.get('route'+winnerLetter);
                                var loser = this.get('route'+loserLetter);

                                displayRoute(directionsDisplayPickup,
                                    winner.get('origin').get('addressString'),
                                    loser.get('origin').get('addressString'));
                                displayRoute(directionsDisplayDropoff,
                                    loser.get('destination').get('addressString'),
                                    winner.get('destination').get('addressString'));
                              }
           }
});
