import Model, { attr } from '@ember-data/model';

export default class ExceptionDtoModel extends Model {
  @attr('string') type;
  @attr('string') message;
}
