import Model, { attr } from '@ember-data/model';

export default class VersionDtoModel extends Model {
  @attr('string') version;
}
