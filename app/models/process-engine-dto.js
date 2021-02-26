import Model, { attr } from '@ember-data/model';

export default class ProcessEngineDtoModel extends Model {
  @attr('string') name;
}
