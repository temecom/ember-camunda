import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProcessInstanceModificationInstructionDtoModel extends Model {
  @attr('string') type;
  @belongsTo variables;
  @attr('string') activityId;
  @attr('string') transitionId;
  @attr('string') activityInstanceId;
  @attr('string') transitionInstanceId;
  @attr('string') ancestorActivityInstanceId;
  @attr('boolean') cancelCurrentActiveActivityInstances;
}
