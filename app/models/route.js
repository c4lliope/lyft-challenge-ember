import DS from 'ember-data';

export default DS.Model.extend({
  driverName: DS.attr('string'),
  origin: DS.belongsTo('location'),
       destination: DS.belongsTo('location'),
       winner: DS.attr('boolean'),
       winnerText: function() {
         return "If " + this.get('driverName') + " gives the other guy a lift, the ride will be shorter.";
       }.property('driverName')
});
