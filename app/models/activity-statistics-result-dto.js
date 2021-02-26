import Model, { attr, hasMany } from '@ember-data/model';

export default class ActivityStatisticsResultDtoModel extends Model {
  @attr('integer') instances;
  @attr('integer') failedJobs;
  @hasMany incidents;
}
