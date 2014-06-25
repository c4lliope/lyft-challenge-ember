import DS from 'ember-data';

export default DS.Model.extend({
  driverName: DS.attr('string'),
  origin: DS.attr('string'),
       destination: DS.attr('string'),
       winner: DS.attr('boolean'),
       winnerText: DS.attr('string')
});
