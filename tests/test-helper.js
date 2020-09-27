import Application from 'hyrules-kitchen-frontend/app';
import config from 'hyrules-kitchen-frontend/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
