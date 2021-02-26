import Model, { attr } from '@ember-data/model';

export default class MetricsResultDtoModel extends Model {
  @attr('integer') result;
}
