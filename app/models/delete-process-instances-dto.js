import Model, { attr, belongsTo } from '@ember-data/model';

export default class DeleteProcessInstancesDtoModel extends Model {
  @attr() processInstanceIds;
  @attr('string') deleteReason;
  @attr('boolean') skipCustomListeners;
  @attr('boolean') skipSubprocesses;
  @belongsTo('process-instance-query') processInstanceQuery;
  @belongsTo('historic-process-instance-query') historicProcessInstanceQuery;
}
