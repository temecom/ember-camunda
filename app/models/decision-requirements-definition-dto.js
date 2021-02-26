import Model, { attr } from '@ember-data/model';

export default class DecisionRequirementsDefinitionDtoModel extends Model {
  @attr('string') key;
  @attr('string') name;
  @attr('string') category;
  @attr('integer') version;
  @attr('string') resource;
  @attr('string') deploymentId;
  @attr('string') tenantId;
}
