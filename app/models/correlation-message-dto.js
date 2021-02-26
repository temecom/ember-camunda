import Model, { attr } from '@ember-data/model';

export default class CorrelationMessageDtoModel extends Model {
  @attr('string') messageName;
  @attr('string') businessKey;
  @attr('string') tenantId;
  @attr('boolean') withoutTenantId;
  @attr('string') processInstanceId;
  @attr('object') correlationKeys;
  @attr('object') localCorrelationKeys;
  @attr('object') processVariables;
  @attr('object') processVariablesLocal;
  @attr('boolean') all;
  @attr('boolean') resultEnabled;
  @attr('boolean') variablesInResultEnabled;
}
