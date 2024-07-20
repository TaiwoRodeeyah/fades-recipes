export interface IRecipe {
  name: string;
  short_description: string;
  category: string;
  calories: number;
  time: number;
  ingredients: string[];
  equipments: string[];
  tags: string[];
  youtube?: string;
  content: string;
  cook: string;
  image: string;
}
