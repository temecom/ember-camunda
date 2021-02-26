import Model, { attr } from '@ember-data/model';

export default class DecisionDefinitionDtoModel extends Model {
  @attr('string') key;
  @attr('string') category;
  @attr('string') name;
  @attr('integer') version;
  @attr('string') resource;
  @attr('string') deploymentId;
  @attr('string') tenantId;
  @attr('string') decisionRequirementsDefinitionId;
  @attr('string') decisionRequirementsDefinitionKey;
  @attr('integer') historyTimeToLive;
  @attr('string') versionTag;
}
