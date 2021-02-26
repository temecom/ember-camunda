import Model, { attr } from '@ember-data/model';

export default class ExtendLockOnExternalTaskDtoModel extends Model {
  @attr('string') workerId;
  @attr('integer') newDuration;
}
