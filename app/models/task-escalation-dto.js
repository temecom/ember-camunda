import Model, { attr } from '@ember-data/model';

export default class TaskEscalationDtoModel extends Model {
  @attr('string') escalationCode;
  @attr('object') variables;
}
