import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
       longitude: DS.attr('number'),

       address: function() {
         var latitude = this.get('latitude');
         var longitude = this.get('longitude');
         return '('+latitude+','+longitude+')';
       }.property('latitude', 'longitude')
});
