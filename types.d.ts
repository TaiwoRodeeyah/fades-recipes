import categories from '@/data/categories';
import { IBlog } from '@/models/Blog';
import { IRecipe } from '@/models/Recipe';
type Category = {
    id: string;
    name: string;
    slug: string;
    image: string;
}

type CategoryBoxProp = {
    category: Category;
}

type RecipeBoxProp = {
    recipe: IRecipe;
}

type RecentlyAddedRecipesProp = {
  recipes: IRecipe[];
};

type BlogBoxProp = {
  blog: IBlog;
};

type LatestFromBlogProp = {
  blogs: IBlog[];
};
