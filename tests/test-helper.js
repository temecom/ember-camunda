import Application from 'ember-camunda/app';
import config from 'ember-camunda/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
