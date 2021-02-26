import Model, { attr } from '@ember-data/model';

export default class RestartProcessInstanceModificationInstructionDtoModel extends Model {
  @attr('string') type;
  @attr('string') activityId;
  @attr('string') transitionId;
}
