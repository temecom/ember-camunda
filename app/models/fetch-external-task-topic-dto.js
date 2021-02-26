import Model, { attr } from '@ember-data/model';

export default class FetchExternalTaskTopicDtoModel extends Model {
  @attr('string') topicName;
  @attr('integer') lockDuration;
  @attr() variables;
  @attr('boolean') localVariables;
  @attr('string') businessKey;
  @attr('string') processDefinitionId;
  @attr() processDefinitionIdIn;
  @attr('string') processDefinitionKey;
  @attr() processDefinitionKeyIn;
  @attr('string') processDefinitionVersionTag;
  @attr('boolean') withoutTenantId;
  @attr() tenantIdIn;
  @attr('object') processVariables;
  @attr('boolean') deserializeValues;
}
