import Model, { attr } from '@ember-data/model';

export default class CountResultDtoModel extends Model {
  @attr('integer') count;
}
