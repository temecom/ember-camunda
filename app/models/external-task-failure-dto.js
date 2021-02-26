import Model, { attr } from '@ember-data/model';

export default class ExternalTaskFailureDtoModel extends Model {
  @attr('string') workerId;
  @attr('string') errorMessage;
  @attr('string') errorDetails;
  @attr('integer') retries;
  @attr('integer') retryTimeout;
}
