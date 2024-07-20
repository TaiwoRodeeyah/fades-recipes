import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const client = await clientPromise;
  const db = client.db();

  try{
    const recipe = await db.collection('recipes').findOne({ _id: new ObjectId(id as string) });
  
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.status(200).json(recipe);
  }catch(e){
    return res.status(404).json({ message: 'Recipe not found' });
  }

}
