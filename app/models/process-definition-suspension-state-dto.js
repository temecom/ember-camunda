import Model, { attr } from '@ember-data/model';

export default class ProcessDefinitionSuspensionStateDtoModel extends Model {
  @attr('boolean') suspended;
  @attr('string') processDefinitionId;
  @attr('string') processDefinitionKey;
  @attr('boolean') includeProcessInstances;
  @attr('string') executionDate;
}
