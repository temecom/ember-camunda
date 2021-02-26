import Model, { attr } from '@ember-data/model';

export default class EventSubscriptionQueryDtoModel extends Model {
  @attr('string') eventSubscriptionId;
  @attr('string') eventName;
  @attr('string') eventType;
  @attr('string') executionId;
  @attr('string') processInstanceId;
  @attr('string') activityId;
  @attr() tenantIdIn;
  @attr('boolean') withoutTenantId;
  @attr('boolean') includeEventSubscriptionsWithoutTenantId;
  @attr() sorting;
}
