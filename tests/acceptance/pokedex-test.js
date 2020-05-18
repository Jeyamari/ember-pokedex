import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | pokedex', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('visiting /pokedex', async function(assert) {
    this.server.createList('list',10);
    await visit('/pokedex');
   

    assert.dom('[data-test-title="pokemon-box"]').exists({ count: 10 });
    assert.equal(currentURL(), '/pokedex');
  });
});
