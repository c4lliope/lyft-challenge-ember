import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
             updateMap: function() {
                          var routeA = this.get('routeA');
                          var origin = routeA.get('origin');
                          var destination = routeA.get('destination');
                          displayRoute(directionsDisplayA, origin, destination);

                          var routeB = this.get('routeB');
                          var origin = routeB.get('origin');
                          var destination = routeB.get('destination');
                          displayRoute(directionsDisplayB, origin, destination);

                          this.send('arbitrate');
                        },

       centerMapOnRoutePoints: function() {
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

                    var originA = routeA.get('origin');
                    var destinationA = routeA.get('destination');
                    var originB = routeB.get('origin');
                    var destinationB = routeB.get('destination');

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
                        var winnerDistance, loserDistance;
                        if(aPickUpBDistance < bPickUpADistance) {
                          winner = "A"; loser = "B";
                          routeA.set('winner', true);
                          winnerDistance = aPickUpBDistance;
                          loserDistance = bPickUpADistance;
                        } else {
                          winner = "B"; loser = "A";
                          routeB.set('winner', true);
                          winnerDistance = bPickUpADistance;
                          loserDistance = aPickUpBDistance;
                        }
                        self.send('drawPickupDropoffLegs', winner, loser);
                        self.send('setWinnerMessage', winner, loser, winnerDistance, loserDistance);
                      }
                    }
                  },

       drawPickupDropoffLegs: function(winnerLetter, loserLetter) {
                                var winner = this.get('route'+winnerLetter);
                                var loser = this.get('route'+loserLetter);

                                displayRoute(directionsDisplayPickup,
                                    winner.get('origin'),
                                    loser.get('origin'));
                                displayRoute(directionsDisplayDropoff,
                                    loser.get('destination'),
                                    winner.get('destination'));

                                this.send('centerMapOnRoutePoints');
                              },

       setWinnerMessage: function(winnerLetter, loserLetter, winnerDistance, loserDistance) {
                           var winner = this.get('route'+winnerLetter);
                           var loser = this.get('route'+loserLetter);

                           var difference = loserDistance - winnerDistance;
                           var difference_miles = Number((difference / 1609.34).toFixed(1));

                           var message = "If " + winner.get('driverName') +
                             " picks up " + loser.get('driverName') +
                             ", the drive will be " + difference_miles + " miles shorter."
                             console.log(message);
                           winner.set('winnerText', message);
                         }
           }
});
