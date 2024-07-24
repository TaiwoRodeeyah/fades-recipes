import categories from '@/data/categories';
import { CategoryBoxProp } from '../../types';
import { Icon } from 'iconsax-react';

const CategoryBox = ({ category } : CategoryBoxProp) => {
  return (
    <div className="relative bg-cover bg-center h-48 md:h-64 rounded-lg shadow-lg" style={{ backgroundImage: `url(${category.image})` }}>
      <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full rounded-lg">
        <h2 className="text-xl font-bold text-white">{category.name}</h2>
        <p className="text-white flex items-center">
          View all Recipes
          <span className="ml-2 transform transition-transform group-hover:translate-x-1"><Icon name="arrow-right" /></span>
        </p>
      </div>
    </div>
  );
};

const PopularCategories = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-chicago_makers mb-4">Popular Categories</h2>
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
