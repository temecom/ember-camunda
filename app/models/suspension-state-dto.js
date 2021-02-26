import Model, { attr } from '@ember-data/model';

export default class SuspensionStateDtoModel extends Model {
  @attr('boolean') suspended;
}
