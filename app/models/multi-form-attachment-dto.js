import Model, { attr } from '@ember-data/model';

export default class MultiFormAttachmentDtoModel extends Model {
  @attr('string') attachmentName;
  @attr('string') attachmentDescription;
  @attr('string') attachmentType;
  @attr('string') url;
  @attr('string') content;
}
