import Model, { attr } from '@ember-data/model';

export default class HistoryTimeToLiveDtoModel extends Model {
  @attr('integer') historyTimeToLive;
}
