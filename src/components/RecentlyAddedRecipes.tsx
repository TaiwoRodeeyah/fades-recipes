import { RecentlyAddedRecipesProp, RecipeBoxProp } from "../../types";
import CategoryService from "@/services/category";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

const RecipeBox = ({ recipe }: RecipeBoxProp) => {
  useEffect(() => {
    ScrollReveal().reveal(".recipeBox", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });
  }, []);

  return (
    <div
      className="relative recipeBox bg-cover bg-center h-48 md:h-64 rounded-lg shadow-lg transition-transform transform hover:scale-105 group"
      style={{ backgroundImage: `url(${recipe.image})` }}
    >
      <div className="absolute top-0 right-0 p-2 flex items-center justify-between space-x-2 w-full">
        {recipe.youtube ? (
          <FaPlayCircle size={28} className="text-white text-xl float-left ml-1 opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        ) : <span></span> }
        <span className="bg-secondary text-white px-2 py-1 rounded">
          {new CategoryService().getCategoryName(recipe.category)}
        </span>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg"></div>
      <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full rounded-lg">
        <p className="text-sm text-white">
          {Math.round(recipe.time / 60)} mins
        </p>
        <div className="flex items-center w-full">
          <h2 className="text-xl font-bold text-white line-clamp-2 overflow-ellipsis min-h-[2ch]">
            {recipe.name}
          </h2>
          <span className="ml-2 text-white opacity-0 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

const RecentlyAddedRecipes = ({ recipes }: RecentlyAddedRecipesProp) => {
  return (
    <section className="my-8 bg-white rounded-lg shadow-md p-4 md:p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-chicago_makers mb-4 text-center text-c06c84">
          Recently Added Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {recipes.slice(0, 5).map((recipe) => (
            <RecipeBox key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedRecipes;
