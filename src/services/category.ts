import categories from "@/data/categories";
import { Category } from "../../types";

export default class CategoryService {
 getCategory(slug: string) : Category | undefined {
    return categories.find(c => c.slug === slug);
 }   

 getCategoryName(id: string) : String {
    const category = this.getCategory(id);
    if(category) {
      return category.name;
    } else {
      return "Unknown";
    }
 }   
}