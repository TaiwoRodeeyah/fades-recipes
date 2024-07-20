import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import validate from "../../middleware/validate";

const newsletterValidationRules = {
  name: "required|string",
  email: "required|email",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  validate(newsletterValidationRules)(req, res, async () => {
    const client = await clientPromise;
    const db = client.db();

    const { name, email } = req.body;

    const existingSubscription = await db
      .collection("newsletter")
      .findOne({ email });
    if (existingSubscription) {
      return res.status(409).json({ message: "Email is already subscribed." });
    }

    await db.collection("newsletter").insertOne({ name, email });

    res.status(200).json({ message: "Subscribed to newsletter." });
  });
}
