import Model, { attr } from '@ember-data/model';

export default class ExecutionDtoModel extends Model {
  @attr('string') processInstanceId;
  @attr('boolean') ended;
  @attr('string') tenantId;
}
