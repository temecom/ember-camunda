import Model, { attr } from '@ember-data/model';

export default class EventSubscriptionDtoModel extends Model {
  @attr('string') eventType;
  @attr('string') eventName;
  @attr('string') executionId;
  @attr('string') processInstanceId;
  @attr('string') activityId;
  @attr('string') createdDate;
  @attr('string') tenantId;
}
