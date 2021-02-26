import Model, { attr } from '@ember-data/model';

export default class SchemaLogQueryDtoModel extends Model {
  @attr('string') version;
  @attr() sorting;
}
