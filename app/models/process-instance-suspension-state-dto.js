import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProcessInstanceSuspensionStateDtoModel extends Model {
  @attr('boolean') suspended;
  @attr('string') processDefinitionId;
  @attr('string') processDefinitionKey;
  @attr('string') processDefinitionTenantId;
  @attr('boolean') processDefinitionWithoutTenantId;
  @attr() processInstanceIds;
  @belongsTo('process-instance-query') processInstanceQuery;
  @belongsTo('historic-process-instance-query') historicProcessInstanceQuery;
}
