// import { NextApiRequest, NextApiResponse } from "next";
// import { faker } from "@faker-js/faker";
// import clientPromise from "../../lib/mongodb";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const client = await clientPromise;
//   const db = client.db();

//   // Clear existing data
//   await db.collection("recipes").deleteMany({});
//   await db.collection("blogs").deleteMany({});
//   await db.collection("contacts").deleteMany({});

//   // Seed recipes
//   const recipes = Array.from({ length: 10 }).map(() => ({
//     name: faker.lorem.words(3),
//     short_description: faker.lorem.sentence(),
//     category: faker.lorem.word(),
//     calories: faker.datatype.number({ min: 100, max: 500 }),
//     time: faker.datatype.number({ min: 10, max: 60 }),
//     ingredients: Array.from({ length: 5 }).map(() => faker.lorem.word()),
//     equipments: Array.from({ length: 3 }).map(() => faker.lorem.word()),
//     tags: Array.from({ length: 3 }).map(() => faker.lorem.word()),
//     youtube: faker.internet.url(),
//     content: faker.lorem.paragraphs(3),
//     cook: faker.name.findName(),
//     image: faker.image.food(),
//   }));

//   // Seed blogs
//   const blogs = Array.from({ length: 10 }).map(() => ({
//     image: faker.image.imageUrl(),
//     title: faker.lorem.sentence(),
//     date: faker.date.recent(),
//     content: faker.lorem.paragraphs(3),
//     cook: faker.name.findName(),
//   }));

//   await db.collection("recipes").insertMany(recipes);
//   await db.collection("blogs").insertMany(blogs);

//   res.status(201).json({ message: "Database seeded successfully." });
// }
