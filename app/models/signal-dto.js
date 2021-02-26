import Model, { attr } from '@ember-data/model';

export default class SignalDtoModel extends Model {
  @attr('string') name;
  @attr('string') executionId;
  @attr('object') variables;
  @attr('string') tenantId;
  @attr('boolean') withoutTenantId;
}
