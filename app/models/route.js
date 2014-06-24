import DS from 'ember-data';

export default DS.Model.extend({
  driverName: DS.attr('string'),
  origin: DS.belongsTo('location'),
       destination: DS.belongsTo('location'),
       winner: DS.attr('boolean'),
       winnerText: DS.attr('string')
});
