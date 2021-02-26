import Model, { attr } from '@ember-data/model';

export default class MultiFormDeploymentDtoModel extends Model {
  @attr('string') tenantId;
  @attr('string') deploymentSource;
  @attr('boolean') deployChangedOnly;
  @attr('boolean') enableDuplicateFiltering;
  @attr('string') deploymentName;
  @attr('string') data;
}
