import Model, { attr, hasMany } from '@ember-data/model';

export default class ProcessInstanceQueryDtoModel extends Model {
  @attr('string') deploymentId;
  @attr('string') processDefinitionId;
  @attr('string') processDefinitionKey;
  @attr() processDefinitionKeyIn;
  @attr() processDefinitionKeyNotIn;
  @attr('string') businessKey;
  @attr('string') businessKeyLike;
  @attr('string') caseInstanceId;
  @attr('string') superProcessInstance;
  @attr('string') subProcessInstance;
  @attr('string') superCaseInstance;
  @attr('string') subCaseInstance;
  @attr('boolean') active;
  @attr('boolean') suspended;
  @attr() processInstanceIds;
  @attr('boolean') withIncident;
  @attr('string') incidentId;
  @attr('string') incidentType;
  @attr('string') incidentMessage;
  @attr('string') incidentMessageLike;
  @attr() tenantIdIn;
  @attr('boolean') withoutTenantId;
  @attr('boolean') processDefinitionWithoutTenantId;
  @attr() activityIdIn;
  @attr('boolean') rootProcessInstances;
  @attr('boolean') leafProcessInstances;
  @hasMany variables;
  @attr('boolean') variableNamesIgnoreCase;
  @attr('boolean') variableValuesIgnoreCase;
  @hasMany('or-query') orQueries;
  @attr() sorting;
}
