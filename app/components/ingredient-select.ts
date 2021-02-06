import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import Ingredient from 'hyrules-kitchen-frontend/models/ingredient';

interface IngredientSelectArgs {
  ingredients: Ingredient[];
}

export default class IngredientSelect extends Component<IngredientSelectArgs> {
  @tracked selectedIngredient = null;
}
