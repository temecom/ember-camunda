import Model, { attr } from '@ember-data/model';

export default class IdentityLinkDtoModel extends Model {
  @attr('string') userId;
  @attr('string') groupId;
  @attr('string') type;
}
