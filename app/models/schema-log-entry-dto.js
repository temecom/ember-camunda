import Model, { attr } from '@ember-data/model';

export default class SchemaLogEntryDtoModel extends Model {
  @attr('string') timestamp;
  @attr('string') version;
}
