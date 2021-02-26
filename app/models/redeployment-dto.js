import Model, { attr } from '@ember-data/model';

export default class RedeploymentDtoModel extends Model {
  @attr() resourceIds;
  @attr() resourceNames;
  @attr('string') source;
}
