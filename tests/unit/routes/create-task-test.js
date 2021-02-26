import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | createTask', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:create-task');
    assert.ok(route);
  });
});
