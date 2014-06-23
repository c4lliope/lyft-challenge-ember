import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
       longitude: DS.attr('number'),

       address: DS.attr('string'),
       latLong: DS.attr('boolean'),

       addressString: function() {
         if(this.get('latLong')) {
           return this.get('latitude') + ',' + this.get('longitude');
         } else {
           return this.get('address');
         }
       }.property('latitude', 'longitude', 'address', 'addressString')
});
