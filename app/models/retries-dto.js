import Model, { attr } from '@ember-data/model';

export default class RetriesDtoModel extends Model {
  @attr('integer') retries;
}
