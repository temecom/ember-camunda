import Model, { attr } from '@ember-data/model';

export default class ProcessDefinitionDtoModel extends Model {
  @attr('string') key;
  @attr('string') category;
  @attr('string') description;
  @attr('string') name;
  @attr('integer') version;
  @attr('string') resource;
  @attr('string') deploymentId;
  @attr('string') diagram;
  @attr('boolean') suspended;
  @attr('string') tenantId;
  @attr('string') versionTag;
  @attr('integer') historyTimeToLive;
  @attr('boolean') startableInTasklist;
}
