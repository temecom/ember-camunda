import Model, { attr } from '@ember-data/model';

export default class PatchVariablesDtoModel extends Model {
  @attr('object') modifications;
  @attr() deletions;
}
