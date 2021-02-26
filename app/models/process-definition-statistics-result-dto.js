import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ProcessDefinitionStatisticsResultDtoModel extends Model {
  @attr('integer') instances;
  @attr('integer') failedJobs;
  @hasMany incidents;
  @belongsTo definition;
}
