import Model, { attr } from '@ember-data/model';

export default class MissingAuthorizationDtoModel extends Model {
  @attr('string') permissionName;
  @attr('string') resourceName;
  @attr('string') resourceId;
}
