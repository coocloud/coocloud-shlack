import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /logout', async function(assert) {
    await visit('/logout');

    assert.equal(currentURL(), '/logout');
  });
});
