import Model, { hasMany } from '@ember-data/model';

export default class ResourceReportDtoModel extends Model {
  @hasMany errors;
  @hasMany warnings;
}
