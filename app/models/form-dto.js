import Model, { attr } from '@ember-data/model';

export default class FormDtoModel extends Model {
  @attr('string') key;
  @attr('string') contextPath;
}
