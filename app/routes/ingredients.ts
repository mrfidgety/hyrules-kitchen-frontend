import Route from '@ember/routing/route';

export default class IngredientsRoute extends Route {
  model() {
    return this.store.findAll('ingredient');
  }
}