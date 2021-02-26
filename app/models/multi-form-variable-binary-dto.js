import Model, { attr } from '@ember-data/model';

export default class MultiFormVariableBinaryDtoModel extends Model {
  @attr('string') data;
  @attr('string') valueType;
}
