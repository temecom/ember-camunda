import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProcessInstanceSuspensionStateAsyncDtoModel extends Model {
  @attr('boolean') suspended;
  @attr() processInstanceIds;
  @belongsTo('process-instance-query') processInstanceQuery;
  @belongsTo('historic-process-instance-query') historicProcessInstanceQuery;
}
