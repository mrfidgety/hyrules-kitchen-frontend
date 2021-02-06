import JSONAPIAdapter from "@ember-data/adapter/json-api";

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3000';
  namespace = 'api/v1';
}

declare module "@ember-data/adapter/json-api" {
  interface AdapterRegistry {
    'application': ApplicationAdapter;
  }
}
