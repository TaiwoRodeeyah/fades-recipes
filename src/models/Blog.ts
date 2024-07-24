import { ObjectId } from "mongodb";

export interface IBlog {
  _id?: ObjectId;
  image: string;
  title: string;
  date: Date;
  content: string;
  cook: string;
}
