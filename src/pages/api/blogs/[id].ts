import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const { id } = req.query;
    const client = await clientPromise;
    const db = client.db();
  
    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(id as string) });
  
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    
    res.status(200).json(blog);
  }catch(e){
    return res.status(404).json({ message: "Blog not found" });
  }
}
