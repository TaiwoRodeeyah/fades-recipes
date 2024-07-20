import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;
  const client = await clientPromise;
  const db = client.db();

  const recipes = await db
    .collection("recipes")
    .find({ cook: userId as string })
    .toArray();

  res.status(200).json(recipes);
}
