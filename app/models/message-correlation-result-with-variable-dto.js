import Model, { attr, belongsTo } from '@ember-data/model';

export default class MessageCorrelationResultWithVariableDtoModel extends Model {
  @attr('string') resultType;
  @belongsTo('process-instance') processInstance;
  @belongsTo execution;
  @attr('object') variables;
}
