import Model, { attr } from '@ember-data/model';

export default class PriorityDtoModel extends Model {
  @attr('integer') priority;
}
