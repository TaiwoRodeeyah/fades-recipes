import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import validate from "../../../middleware/validate";

const blogValidationRules = {
  image: "required|string",
  title: "required|string",
  content: "required|string",
  cook: "required|string",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  validate(blogValidationRules)(req, res, async () => {
    const client = await clientPromise;
    const db = client.db();

    const blog = req.body;

    blog.date = new Date();

    await db.collection("blogs").insertOne(blog);

    res.status(201).json({ message: "Blog post created successfully." });
  });
}
