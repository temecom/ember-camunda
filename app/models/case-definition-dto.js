import Model, { attr } from '@ember-data/model';

export default class CaseDefinitionDtoModel extends Model {
  @attr('string') key;
  @attr('string') category;
  @attr('string') name;
  @attr('integer') version;
  @attr('string') resource;
  @attr('string') deploymentId;
  @attr('string') tenantId;
  @attr('integer') historyTimeToLive;
}
