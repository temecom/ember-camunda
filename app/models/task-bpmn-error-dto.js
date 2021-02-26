import Model, { attr } from '@ember-data/model';

export default class TaskBpmnErrorDtoModel extends Model {
  @attr('string') errorCode;
  @attr('string') errorMessage;
  @attr('object') variables;
}
