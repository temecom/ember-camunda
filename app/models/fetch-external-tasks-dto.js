import Model, { attr, hasMany } from '@ember-data/model';

export default class FetchExternalTasksDtoModel extends Model {
  @attr('string') workerId;
  @attr('integer') maxTasks;
  @attr('boolean') usePriority;
  @attr('integer') asyncResponseTimeout;
  @hasMany topics;
}
