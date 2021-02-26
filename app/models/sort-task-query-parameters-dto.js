import Model, { attr } from '@ember-data/model';

export default class SortTaskQueryParametersDtoModel extends Model {
  @attr('string') variable;
  @attr('string') type;
}
