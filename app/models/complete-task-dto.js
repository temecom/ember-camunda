import Model, { attr } from '@ember-data/model';

export default class CompleteTaskDtoModel extends Model {
  @attr('object') variables;
  @attr('boolean') withVariablesInReturn;
}
