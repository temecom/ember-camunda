import Model, { attr, hasMany } from '@ember-data/model';

export default class TransitionInstanceDtoModel extends Model {
  @attr('string') parentActivityInstanceId;
  @attr('string') activityId;
  @attr('string') activityName;
  @attr('string') activityType;
  @attr('string') processInstanceId;
  @attr('string') processDefinitionId;
  @attr('string') executionId;
  @attr() incidentIds;
  @hasMany incidents;
}
