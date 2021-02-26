import Model, { attr } from '@ember-data/model';

export default class IncidentStatisticsResultDtoModel extends Model {
  @attr('string') incidentType;
  @attr('integer') incidentCount;
}
