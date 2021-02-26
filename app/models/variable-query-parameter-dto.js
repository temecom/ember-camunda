import Model, { attr } from '@ember-data/model';

export default class VariableQueryParameterDtoModel extends Model {
  @attr('object') value;
  @attr('string') operator;
}
