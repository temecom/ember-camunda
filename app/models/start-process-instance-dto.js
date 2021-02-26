import Model, { attr, hasMany } from '@ember-data/model';

export default class StartProcessInstanceDtoModel extends Model {
  @attr('string') businessKey;
  @attr('object') variables;
  @attr('string') caseInstanceId;
  @hasMany('start-instruction') startInstructions;
  @attr('boolean') skipCustomListeners;
  @attr('boolean') skipIoMappings;
  @attr('boolean') withVariablesInReturn;
}
