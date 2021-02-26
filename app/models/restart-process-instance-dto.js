import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RestartProcessInstanceDtoModel extends Model {
  @attr() processInstanceIds;
  @belongsTo('historic-process-instance-query') historicProcessInstanceQuery;
  @attr('boolean') skipCustomListeners;
  @attr('boolean') skipIoMappings;
  @attr('boolean') initialVariables;
  @attr('boolean') withoutBusinessKey;
  @hasMany instructions;
}
