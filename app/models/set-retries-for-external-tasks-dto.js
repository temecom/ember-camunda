import Model, { attr, belongsTo } from '@ember-data/model';

export default class SetRetriesForExternalTasksDtoModel extends Model {
  @attr('integer') retries;
  @attr() externalTaskIds;
  @attr() processInstanceIds;
  @belongsTo('external-task-query') externalTaskQuery;
  @belongsTo('process-instance-query') processInstanceQuery;
  @belongsTo('historic-process-instance-query') historicProcessInstanceQuery;
}
