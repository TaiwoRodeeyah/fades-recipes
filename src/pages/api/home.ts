import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import categories from '../../data/categories';
import users from '../../data/users';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db();

  // Get featured recipes (3 random recipes for the day)
  const featured_recipes = await db.collection('recipes')
    .aggregate([{ $sample: { size: 3 } }])
    .toArray();

  // Get recent recipes (latest 5 recipes)
  const recent_recipes = await db.collection('recipes')
    .find()
    .sort({ _id: -1 })
    .limit(5)
    .toArray();

  // Get latest blogs (latest 3 blog posts)
  const latest_blogs = await db.collection('blogs')
    .find()
    .sort({ _id: -1 })
    .limit(3)
    .toArray();

  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({ featured_recipes, recent_recipes, latest_blogs });
}
