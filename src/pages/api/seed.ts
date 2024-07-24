import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import { recipes } from "@/data/recipes";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
    const client = await clientPromise;
    const db = client.db();
      const recipesCollection = db.collection("recipes");

      // Clear existing data
      await recipesCollection.deleteMany({});

      // Insert new recipes
      await recipesCollection.insertMany(recipes);

      res.status(200).json({ message: "Database seeded successfully!" });
    } catch (error) {
      console.error("Error seeding database:", error);
      res.status(500).json({ message: "Failed to seed database" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
