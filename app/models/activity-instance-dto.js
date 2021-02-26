import Model, { attr, hasMany } from '@ember-data/model';

export default class ActivityInstanceDtoModel extends Model {
  @attr('string') parentActivityInstanceId;
  @attr('string') activityId;
  @attr('string') activityName;
  @attr('string') activityType;
  @attr('string') processInstanceId;
  @attr('string') processDefinitionId;
  @hasMany('child-activity-instance') childActivityInstances;
  @hasMany('child-transition-instance') childTransitionInstances;
  @attr() executionIds;
  @attr() incidentIds;
  @hasMany incidents;
}
