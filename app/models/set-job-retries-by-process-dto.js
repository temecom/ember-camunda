import Model, { attr, belongsTo } from '@ember-data/model';

export default class SetJobRetriesByProcessDtoModel extends Model {
  @attr() processInstances;
  @attr('integer') retries;
  @belongsTo('process-instance-query') processInstanceQuery;
  @belongsTo('historic-process-instance-query') historicProcessInstanceQuery;
}
