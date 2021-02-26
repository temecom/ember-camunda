import Model, { hasMany } from '@ember-data/model';

export default class LinkableDtoModel extends Model {
  @hasMany links;
}
