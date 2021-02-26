import Model, { attr } from '@ember-data/model';

export default class ExternalTaskQueryDtoModel extends Model {
  @attr('string') externalTaskId;
  @attr() externalTaskIdIn;
  @attr('string') topicName;
  @attr('string') workerId;
  @attr('boolean') locked;
  @attr('boolean') notLocked;
  @attr('boolean') withRetriesLeft;
  @attr('boolean') noRetriesLeft;
  @attr('string') lockExpirationAfter;
  @attr('string') lockExpirationBefore;
  @attr('string') activityId;
  @attr() activityIdIn;
  @attr('string') executionId;
  @attr('string') processInstanceId;
  @attr() processInstanceIdIn;
  @attr('string') processDefinitionId;
  @attr() tenantIdIn;
  @attr('boolean') active;
  @attr('boolean') suspended;
  @attr('integer') priorityHigherThanOrEquals;
  @attr('integer') priorityLowerThanOrEquals;
  @attr() sorting;
}
