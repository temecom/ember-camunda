import Model, { attr } from '@ember-data/model';

export default class CompleteExternalTaskDtoModel extends Model {
  @attr('string') workerId;
  @attr('object') variables;
  @attr('object') localVariables;
}
