import Model, { attr } from '@ember-data/model';

export default class ProcessDefinitionDiagramDtoModel extends Model {
  @attr('string') bpmn20Xml;
}
