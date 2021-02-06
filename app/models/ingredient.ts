import DS from 'ember-data';
import { computed } from '@ember/object';
const { attr } = DS;

export default class Ingredient extends DS.Model {
  @attr('string') name: string;
  @attr('string') category: string;
  @attr('string') imagePath: string;
  @attr('number') baseHearts: number;
  @attr('number') value: number;
  @attr('number') effectPotency: number;
  @attr('number') time_bonus: number;

  @computed('imagePath')
  get imageUrl() {
    return `${this.imagePath}`;
  }
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'ingredient': Ingredient;
  }
}
