import Model, { attr } from '@ember-data/model';

export default class UserIdDtoModel extends Model {
  @attr('string') userId;
}
