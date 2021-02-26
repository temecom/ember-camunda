import Model, { attr } from '@ember-data/model';

export default class ProblemDtoModel extends Model {
  @attr('string') message;
  @attr('integer') line;
  @attr('integer') column;
  @attr('string') mainElementId;
  @attr() elementIds;
}
