import Model, { attr } from '@ember-data/model';

export default class TaskDtoModel extends Model {
  @attr('string') name;
  @attr('string') assignee;
  @attr('string') owner;
  @attr('string') created;
  @attr('string') due;
  @attr('string') followUp;
  @attr('string') delegationState;
  @attr('string') description;
  @attr('string') executionId;
  @attr('string') parentTaskId;
  @attr('integer') priority;
  @attr('string') processDefinitionId;
  @attr('string') processInstanceId;
  @attr('string') caseExecutionId;
  @attr('string') caseDefinitionId;
  @attr('string') caseInstanceId;
  @attr('string') taskDefinitionKey;
  @attr('boolean') suspended;
  @attr('string') formKey;
  @attr('string') tenantId;
}
