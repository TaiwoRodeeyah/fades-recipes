import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import validate from "../../middleware/validate";

const contactValidationRules = {
  name: "required|string",
  email: "required|email",
  message: "required|string",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  validate(contactValidationRules)(req, res, async () => {
    const client = await clientPromise;
    const db = client.db();

    const { name, email, message } = req.body;
    const datetime = new Date();

    await db
      .collection("contacts")
      .insertOne({ name, email, message, datetime });

    res.status(200).json({ message: "Contact message received." });
  });
}
