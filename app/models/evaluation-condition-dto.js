import Model, { attr } from '@ember-data/model';

export default class EvaluationConditionDtoModel extends Model {
  @attr('object') variables;
  @attr('string') businessKey;
  @attr('string') tenantId;
  @attr('boolean') withoutTenantId;
  @attr('string') processDefinitionId;
}
