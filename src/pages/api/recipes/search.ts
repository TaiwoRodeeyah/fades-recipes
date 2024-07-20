import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import validate from "../../../middleware/validate";

const searchValidationRules = {
  q: "sometimes|string",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  validate(searchValidationRules)(req, res, async () => {
    const { q } = req.query;
    const client = await clientPromise;
    const db = client.db();

    const recipes = await db
      .collection("recipes")
      .find({ name: { $regex: q ?? "", $options: "i" } })
      .toArray();

    res.status(200).json(recipes);
  });
}
