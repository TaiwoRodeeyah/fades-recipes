import categories from "@/data/categories";
import { CategoryBoxProp } from "../../types";
import { Icon } from "iconsax-react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaArrowRight } from "react-icons/fa";

const CategoryBox = ({ category }: CategoryBoxProp) => {
  useEffect(() => {
    ScrollReveal().reveal(".categoryBox", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });
  }, []);

  return (
    <div
      className="relative categoryBox bg-cover bg-center h-48 md:h-64 rounded-lg shadow-lg transition-transform transform hover:scale-105 group"
      style={{ backgroundImage: `url(${category.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg"></div>
      <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full rounded-lg">
        <h2 className="text-xl font-bold text-white">{category.name}</h2>
        <p className="text-white flex items-center">
          View all Recipes
          <span className="ml-2 opacity-0 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <FaArrowRight />
          </span>
        </p>
      </div>
    </div>
  );
};

const PopularCategories = () => {
  return (
    <section className="my-8 bg-white rounded-lg shadow-md p-4 md:p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-chicago_makers mb-2 md:mb-2 text-c06c84 text-center">
          Popular Categories
        </h2>
        <p className="text-center text-xl mb-4 after:md:mb-6">
          Be sure not to miss out the categories of these most popular
          categories. Enjoy trying them out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryBox key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
