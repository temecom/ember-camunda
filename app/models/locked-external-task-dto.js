import Model, { attr } from '@ember-data/model';

export default class LockedExternalTaskDtoModel extends Model {
  @attr('string') activityId;
  @attr('string') activityInstanceId;
  @attr('string') errorMessage;
  @attr('string') errorDetails;
  @attr('string') executionId;
  @attr('string') lockExpirationTime;
  @attr('string') processDefinitionId;
  @attr('string') processDefinitionKey;
  @attr('string') processDefinitionVersionTag;
  @attr('string') processInstanceId;
  @attr('string') tenantId;
  @attr('integer') retries;
  @attr('boolean') suspended;
  @attr('string') workerId;
  @attr('integer') priority;
  @attr('string') topicName;
  @attr('string') businessKey;
  @attr('object') variables;
}
