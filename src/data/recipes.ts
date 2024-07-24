import { IRecipe } from "@/models/Recipe";

export const recipes: IRecipe[] = [
  {
    name: "Homemade Bread",
    short_description: "A quick and easy homemade bread recipe.",
    category: "appetizers",
    calories: 250,
    time: 60,
    ingredients: ["Flour", "Yeast", "Water", "Salt", "Sugar"],
    equipments: ["Oven", "Mixing Bowl"],
    tags: ["bread", "homemade", "quick"],
    youtube: "https://youtu.be/4wSQB6FRUvM",
    content: `
      <p><strong>Step 1:</strong> Preheat your oven to 375°F (190°C).<br /><br />
      <strong>Step 2:</strong> Mix flour, yeast, salt, and sugar in a large bowl.<br /><br />
      <strong>Step 3:</strong> Gradually add water and knead the dough until smooth.<br /><br />
      <strong>Step 4:</strong> Let the dough rise for 30 minutes in a warm place.<br /><br />
      <strong>Step 5:</strong> Shape the dough into a loaf and bake for 30 minutes or until golden brown.</p>
    `,
    cook: "1",
    image: "/static/images/recipes/homemade-bread.jpg",
  },
  {
    name: "Real Italian Pasta",
    short_description: "Authentic Italian pasta recipe with fresh ingredients.",
    category: "appetizers",
    calories: 350,
    time: 120,
    ingredients: ["Pasta", "Tomato Sauce", "Basil", "Olive Oil"],
    equipments: ["Stove", "Pot", "Pan"],
    tags: ["pasta", "Italian", "authentic"],
    youtube: "https://youtu.be/4wSQB6FRUvM",
    content: `
      <p><strong>Step 1:</strong> Cook pasta in a pot of salted boiling water until al dente.<br /><br />
      <strong>Step 2:</strong> In a pan, heat olive oil and add tomato sauce.<br /><br />
      <strong>Step 3:</strong> Add basil and simmer the sauce for 10 minutes.<br /><br />
      <strong>Step 4:</strong> Toss the cooked pasta with the sauce and serve hot.</p>
    `,
    cook: "2",
    image: "/static/images/recipes/real-italian-pasta.jpg",
  },
  {
    name: "Italian Mozarella and Tomato Salad",
    short_description: "Fresh mozzarella and tomato salad with basil.",
    category: "salads",
    calories: 200,
    time: 10,
    ingredients: [
      "Mozzarella",
      "Tomatoes",
      "Basil",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    equipments: [],
    tags: ["salad", "Italian", "fresh"],
    youtube: "https://youtu.be/4wSQB6FRUvM",
    content: `
      <p><strong>Step 1:</strong> Slice mozzarella and tomatoes.<br /><br />
      <strong>Step 2:</strong> Arrange the slices on a plate, alternating them.<br /><br />
      <strong>Step 3:</strong> Drizzle with olive oil and season with salt and pepper.<br /><br />
      <strong>Step 4:</strong> Garnish with fresh basil leaves.</p>
    `,
    cook: "1",
    image: "/static/images/recipes/italian-mozarella-and-tomato-salad.jpg",
  },
  {
    name: "Chicken with French Fries",
    short_description: "A hearty meal of crispy chicken and golden fries.",
    category: "main_dishes",
    calories: 700,
    time: 120,
    ingredients: ["Chicken", "Potatoes", "Oil", "Salt", "Pepper"],
    equipments: ["Oven", "Frying Pan"],
    tags: ["chicken", "fries", "crispy"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Preheat the oven to 400°F (200°C).<br /><br />
      <strong>Step 2:</strong> Cut potatoes into fries and toss them with oil, salt, and pepper.<br /><br />
      <strong>Step 3:</strong> Bake the fries in the oven for 30 minutes or until crispy.<br /><br />
      <strong>Step 4:</strong> Meanwhile, season the chicken and fry it in a pan until golden brown and cooked through.<br /><br />
      <strong>Step 5:</strong> Serve the chicken with the fries hot.</p>
    `,
    cook: "2",
    image: "/static/images/recipes/chicken-with-french-fries.jpg",
  },
  {
    name: "Banana with Chocolate Sauce",
    short_description:
      "A sweet and simple dessert of bananas with rich chocolate sauce.",
    category: "desserts",
    calories: 300,
    time: 20,
    ingredients: ["Bananas", "Chocolate Sauce"],
    equipments: ["Spoon"],
    tags: ["dessert", "chocolate", "banana"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Peel and slice the bananas.<br /><br />
      <strong>Step 2:</strong> Drizzle with chocolate sauce.<br /><br />
      <strong>Step 3:</strong> Serve immediately as a sweet treat.</p>
    `,
    cook: "1",
    image: "/static/images/recipes/banana-with-chocolate-sauce.jpg",
  },
  {
    name: "Walnut and Smoked Salmon Salad",
    short_description: "A flavorful salad with walnuts and smoked salmon.",
    category: "salads",
    calories: 400,
    time: 15,
    ingredients: ["Walnuts", "Smoked Salmon", "Mixed Greens", "Dressing"],
    equipments: [],
    tags: ["salad", "salmon", "walnuts"],
    youtube: "https://youtu.be/4wSQB6FRUvM",
    content: `
      <p><strong>Step 1:</strong> Arrange mixed greens on a plate.<br /><br />
      <strong>Step 2:</strong> Top with smoked salmon and walnuts.<br /><br />
      <strong>Step 3:</strong> Drizzle with your favorite salad dressing and serve.</p>
    `,
    cook: "2",
    image: "/static/images/recipes/walnut-and-smoked-salmon-salad.jpg",
  },
  {
    name: "Spinach Salad with Chicken",
    short_description: "Healthy spinach salad topped with grilled chicken.",
    category: "soup",
    calories: 350,
    time: 20,
    ingredients: [
      "Spinach",
      "Chicken",
      "Cherry Tomatoes",
      "Cucumber",
      "Dressing",
    ],
    equipments: [],
    tags: ["salad", "spinach", "chicken"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Grill the chicken and slice it thinly.<br /><br />
      <strong>Step 2:</strong> Toss spinach, cherry tomatoes, and cucumber in a bowl.<br /><br />
      <strong>Step 3:</strong> Top with sliced chicken and your favorite dressing.</p>
    `,
    cook: "1",
    image: "/static/images/recipes/spinach-salad-with-chicken.jpg",
  },
  {
    name: "Ham and Egg Summer Salad",
    short_description:
      "A refreshing salad with ham and eggs, perfect for summer.",
    category: "salads",
    calories: 300,
    time: 15,
    ingredients: ["Ham", "Eggs", "Lettuce", "Tomatoes", "Dressing"],
    equipments: [],
    tags: ["salad", "ham", "eggs"],
    youtube: "https://youtu.be/4wSQB6FRUvM",
    content: `
      <p><strong>Step 1:</strong> Boil the eggs and chop the ham.<br /><br />
      <strong>Step 2:</strong> Arrange lettuce, tomatoes, ham, and eggs in a bowl.<br /><br />
      <strong>Step 3:</strong> Add your favorite dressing and toss well.</p>
    `,
    cook: "2",
    image: "/static/images/recipes/ham-and-egg-summer-salad.jpg",
  },
  {
    name: "Tasty vegetarian salad",
    short_description: "Quick and tasty vegetarian salad ready in 5 minutes.",
    category: "salads",
    calories: 150,
    time: 5,
    ingredients: ["Mixed Vegetables", "Olive Oil", "Vinegar", "Salt", "Pepper"],
    equipments: [],
    tags: ["salad", "vegetarian", "quick"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Chop mixed vegetables.<br /><br />
      <strong>Step 2:</strong> Toss with olive oil, vinegar, salt, and pepper.<br /><br />
      <strong>Step 3:</strong> Serve immediately.</p>
    `,
    cook: "1",
    image: "/static/images/recipes/tasty-vegetarian-salad.jpg",
  },
  {
    name: "Tasty Mozarella Buns",
    short_description:
      "Delicious mozzarella buns that are perfect for any occasion.",
    category: "desserts",
    calories: 350,
    time: 60,
    ingredients: ["Mozzarella", "Flour", "Yeast", "Milk", "Butter"],
    equipments: ["Oven"],
    tags: ["dessert", "mozzarella", "buns"],
    youtube: "https://youtu.be/4wSQB6FRUvM",
    content: `
      <p><strong>Step 1:</strong> Preheat the oven to 375°F (190°C).<br /><br />
      <strong>Step 2:</strong> Prepare the dough by mixing flour, yeast, milk, and butter.<br /><br />
      <strong>Step 3:</strong> Shape into buns and stuff with mozzarella.<br /><br />
      <strong>Step 4:</strong> Bake for 25 minutes or until golden brown.</p>
    `,
    cook: "2",
    image: "/static/images/recipes/tasty-mozarella-buns.jpg",
  },
  {
    name: "Vegetarian Tomato Salad",
    short_description:
      "A fresh and light tomato salad suitable for vegetarians.",
    category: "salads",
    calories: 180,
    time: 10,
    ingredients: ["Tomatoes", "Cucumber", "Olive Oil", "Basil", "Salt"],
    equipments: [],
    tags: ["salad", "vegetarian", "tomato"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Slice tomatoes and cucumber.<br /><br />
      <strong>Step 2:</strong> Toss with olive oil, basil, and salt.<br /><br />
      <strong>Step 3:</strong> Serve chilled.</p>
    `,
    cook: "1",
    image: "/static/images/recipes/vegetarian-tomato-salad.jpg",
  },
  {
    name: "Real American Hamburger",
    short_description:
      "Classic American hamburger with all the traditional toppings.",
    category: "main_dishes",
    calories: 600,
    time: 30,
    ingredients: ["Ground Beef", "Buns", "Lettuce", "Tomato", "Cheese"],
    equipments: ["Grill", "Pan"],
    tags: ["hamburger", "American", "beef"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Shape ground beef into patties and season.<br /><br />
      <strong>Step 2:</strong> Grill or pan-fry the patties to desired doneness.<br /><br />
      <strong>Step 3:</strong> Assemble the burger with buns, lettuce, tomato, and cheese.<br /><br />
      <strong>Step 4:</strong> Serve hot.</p>
    `,
    cook: "2",
    image: "/static/images/recipes/real-american-hamburger.jpg",
  },
  {
    name: "Real Italian Lasagne from oven",
    short_description: "Classic Italian lasagne baked to perfection.",
    category: "main_dishes",
    calories: 800,
    time: 120,
    ingredients: ["Lasagne Sheets", "Ground Beef", "Tomato Sauce", "Cheese"],
    equipments: ["Oven", "Baking Dish"],
    tags: ["lasagne", "Italian", "baked"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Preheat the oven to 375°F (190°C).<br /><br />
      <strong>Step 2:</strong> Layer lasagne sheets with ground beef, tomato sauce, and cheese.<br /><br />
      <strong>Step 3:</strong> Repeat layers and bake for 1 hour or until bubbly.</p>
    `,
    cook: "1",
    image: "/static/images/recipes/real-italian-lasagne.jpg",
  },
  {
    name: "Oven Grilled Beef",
    short_description:
      "Tender beef grilled in the oven with a savory marinade.",
    category: "main_dishes",
    calories: 700,
    time: 75,
    ingredients: ["Beef", "Marinade", "Vegetables"],
    equipments: ["Oven"],
    tags: ["beef", "grilled", "oven"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Marinate beef with your choice of marinade.<br /><br />
      <strong>Step 2:</strong> Preheat the oven to 400°F (200°C).<br /><br />
      <strong>Step 3:</strong> Place beef on a rack and roast in the oven for 45 minutes.<br /><br />
      <strong>Step 4:</strong> Serve with grilled vegetables.</p>
    `,
    cook: "2",
    image: "/static/images/recipes/oven-grilled-beef.jpg",
  },
  {
    name: "Huge XXL Burger",
    short_description: "Giant burger packed with all your favorite toppings.",
    category: "main_dishes",
    calories: 900,
    time: 40,
    ingredients: [
      "Ground Beef",
      "Buns",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Onions",
    ],
    equipments: ["Grill", "Pan"],
    tags: ["burger", "XXL", "giant"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Shape a large beef patty and season.<br /><br />
      <strong>Step 2:</strong> Grill or pan-fry the patty until cooked through.<br /><br />
      <strong>Step 3:</strong> Assemble the burger with buns, cheese, lettuce, tomato, and onions.<br /><br />
      <strong>Step 4:</strong> Serve immediately.</p>
    `,
    cook: "1",
    image: "/static/images/recipes/huge-xxl-burger.jpg",
  },
  {
    name: "French Croissant Lunch",
    short_description: "Flaky croissants filled with delicious ingredients.",
    category: "desserts",
    calories: 400,
    time: 30,
    ingredients: ["Croissants", "Chocolate", "Cream"],
    equipments: ["Oven"],
    tags: ["croissant", "French", "dessert"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Preheat the oven to 350°F (175°C).<br /><br />
      <strong>Step 2:</strong> Fill croissants with chocolate and cream.<br /><br />
      <strong>Step 3:</strong> Bake for 15 minutes or until golden and crispy.</p>
    `,
    cook: "2",
    image: "/static/images/recipes/french-croissant-lunch.jpg",
  },
  {
    name: "Traditional French Chocolate Cake",
    short_description: "Rich and decadent French chocolate cake.",
    category: "desserts",
    calories: 600,
    time: 90,
    ingredients: ["Chocolate", "Flour", "Eggs", "Butter", "Sugar"],
    equipments: ["Oven", "Baking Pan"],
    tags: ["cake", "French", "chocolate"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Preheat the oven to 350°F (175°C).<br /><br />
      <strong>Step 2:</strong> Melt chocolate and mix with flour, eggs, butter, and sugar.<br /><br />
      <strong>Step 3:</strong> Pour batter into a baking pan and bake for 50 minutes.<br /><br />
      <strong>Step 4:</strong> Cool before serving.</p>
    `,
    cook: "1",
    image: "/static/images/recipes/traditional-french-chocolate-cake.jpg",
  },
  {
    name: "Italian Sandwich",
    short_description: "Delicious Italian sandwich with classic fillings.",
    category: "main_dishes",
    calories: 500,
    time: 20,
    ingredients: ["Bread", "Cheese", "Ham", "Tomato", "Olive Oil"],
    equipments: [],
    tags: ["sandwich", "Italian", "classic"],
    youtube: "",
    content: `
      <p><strong>Step 1:</strong> Layer cheese, ham, and tomato between slices of bread.<br /><br />
      <strong>Step 2:</strong> Drizzle with olive oil.<br /><br />
      <strong>Step 3:</strong> Serve immediately or toast lightly.</p>
    `,
    cook: "2",
    image: "/static/images/recipes/italian-sandwich.jpg",
  },
];
