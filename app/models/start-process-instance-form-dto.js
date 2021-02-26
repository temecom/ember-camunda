import Model, { attr } from '@ember-data/model';

export default class StartProcessInstanceFormDtoModel extends Model {
  @attr('object') variables;
  @attr('string') businessKey;
}
