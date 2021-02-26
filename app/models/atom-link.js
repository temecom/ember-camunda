import Model, { attr } from '@ember-data/model';

export default class AtomLinkModel extends Model {
  @attr('string') rel;
  @attr('string') href;
  @attr('string') method;
}
