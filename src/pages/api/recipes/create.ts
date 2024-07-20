import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import validate from "../../../middleware/validate";

const recipeValidationRules = {
  name: "required|string",
  short_description: "required|string",
  category: "required|string",
  calories: "required|integer",
  time: "required|integer",
  ingredients: "required|array",
  equipments: "required|array",
  tags: "required|array",
  youtube: "url",
  content: "required|string",
  cook: "required|string",
  image: "required|string",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  validate(recipeValidationRules)(req, res, async () => {
    const client = await clientPromise;
    const db = client.db();

    const recipe = req.body;

    await db.collection("recipes").insertOne(recipe);

    res.status(201).json({ message: "Recipe created successfully." });
  });
}
