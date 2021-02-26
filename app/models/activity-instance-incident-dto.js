import Model, { attr } from '@ember-data/model';

export default class ActivityInstanceIncidentDtoModel extends Model {
  @attr('string') parentActivityInstanceId;
}
