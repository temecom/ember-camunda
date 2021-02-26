import Model, { attr, hasMany } from '@ember-data/model';

export default class ProcessInstanceModificationDtoModel extends Model {
  @attr('boolean') skipCustomListeners;
  @attr('boolean') skipIoMappings;
  @hasMany instructions;
  @attr('string') annotation;
}
