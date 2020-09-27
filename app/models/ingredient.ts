import DS from 'ember-data';
const { attr } = DS;

export default class Ingredient extends DS.Model {
  @attr('string') name: string;
  @attr('string') category: string;
  @attr('number') baseHearts: number;
  @attr('number') value: number;
  @attr('number') effectPotency: number;
  @attr('number') time_bonus: number;
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'ingredient': Ingredient;
  }
}
