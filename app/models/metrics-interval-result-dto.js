import Model, { attr } from '@ember-data/model';

export default class MetricsIntervalResultDtoModel extends Model {
  @attr('string') timestamp;
  @attr('string') name;
  @attr('string') reporter;
  @attr('integer') value;
}
