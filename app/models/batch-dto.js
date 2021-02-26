import Model, { attr } from '@ember-data/model';

export default class BatchDtoModel extends Model {
  @attr('string') type;
  @attr('integer') totalJobs;
  @attr('integer') jobsCreated;
  @attr('integer') batchJobsPerSeed;
  @attr('integer') invocationsPerBatchJob;
  @attr('string') seedJobDefinitionId;
  @attr('string') monitorJobDefinitionId;
  @attr('string') batchJobDefinitionId;
  @attr('boolean') suspended;
  @attr('string') tenantId;
  @attr('string') createUserId;
}
