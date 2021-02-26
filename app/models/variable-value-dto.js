import Model, { attr } from '@ember-data/model';

export default class VariableValueDtoModel extends Model {
  @attr('object') value;
  @attr('string') type;
  @attr('object') valueInfo;
}
