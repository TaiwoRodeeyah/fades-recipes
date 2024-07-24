import { Icon } from "iconsax-react";
import { RecentlyAddedRecipesProp, RecipeBoxProp } from "../../types";
import CategoryService from "@/services/category";

const RecipeBox = ({ recipe } : RecipeBoxProp) => {
  return (
    <div
      className="relative bg-cover bg-center h-48 md:h-64 rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${recipe.image})` }}
    >
      <div className="absolute top-0 right-0 p-2">
        {recipe.youtube && <Icon name="play" className="text-white" />}
        <span className="bg-black text-white px-2 py-1 rounded">
          {(new CategoryService).getCategoryName(recipe.category)}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full rounded-lg">
        <p className="text-sm text-white">
          {Math.round(recipe.time / 60)} mins
        </p>
        <h2 className="text-xl font-bold text-white">{recipe.name}</h2>
      </div>
    </div>
  );
};

const RecentlyAddedRecipes = ({ recipes } : RecentlyAddedRecipesProp) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-chicago_makers mb-4">
          Recently Added Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {recipes.slice(0, 5).map((recipe) => (
            <RecipeBox key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedRecipes;
