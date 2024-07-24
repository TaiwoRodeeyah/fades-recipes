"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { IBlog } from "@/models/Blog";
import { IRecipe } from "@/models/Recipe";

interface AppState {
  recipes: IRecipe[];
  blogs: IBlog[];
  isBlogLoading: boolean;
  isBlogsLoading: boolean;
  isRecipeLoading: boolean;
  isRecipesLoading: boolean;
  isSearchLoading: boolean;
  fetchSingleRecipe: Function;
  fetchSingleBlog: Function;
  searchRecipes: Function;
  searchBlogs: Function;
}

const defaultState: AppState = {
  recipes: [],
  blogs: [],
  isBlogLoading: true,
  isBlogsLoading: true,
  isRecipeLoading: true,
  isRecipesLoading: true,
  isSearchLoading: true,
  fetchSingleRecipe: () => {},
  fetchSingleBlog: () => {},
  searchRecipes: () => {},
  searchBlogs: () => {},
};

const AppContext = createContext<AppState>(defaultState);

interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [isBlogLoading, setIsBlogLoading] = useState(true);
  const [isBlogsLoading, setIsBlogsLoading] = useState(true);
  const [isRecipeLoading, setIsRecipeLoading] = useState(true);
  const [isRecipesLoading, setIsRecipesLoading] = useState(true);
  const [isSearchLoading, setIsSearchLoading] = useState(true);

  const fetchRecipes = async () => {
    setIsRecipesLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes`
    );
    const data = await response.json();
    setRecipes(data);
    setIsRecipesLoading(false);
  };

  const fetchBlogs = async () => {
    setIsBlogsLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`
    );
    const data = await response.json();
    setBlogs(data);
    setIsBlogsLoading(false);
  };

  const fetchSingleRecipe = async (id: string) => {
    setIsRecipeLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes/${id}`
    );
    const data = await response.json();
    setIsRecipeLoading(false);
    return data;
  };

  const fetchSingleBlog = async (id: string) => {
    setIsBlogLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`
    );
    const data = await response.json();
    setIsBlogLoading(false);
    return data;
  };

  const searchRecipes = async (query: string) => {
    setIsSearchLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes/search?query=${query}`
    );
    const data = await response.json();
    setIsSearchLoading(false);
    return data;
  };

  const searchBlogs = async (query: string) => {
    setIsSearchLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/search?query=${query}`
    );
    const data = await response.json();
    setIsSearchLoading(false);
    return data;
  };

  useEffect(() => {
    fetchRecipes();
    fetchBlogs();
  }, []);

  const state: AppState = {
    recipes,
    blogs,
    isBlogLoading,
    isBlogsLoading,
    isRecipeLoading,
    isRecipesLoading,
    isSearchLoading,
    fetchSingleRecipe,
    fetchSingleBlog,
    searchRecipes,
    searchBlogs,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
