"use client";

import { IBlog } from "@/models/Blog";
import { IRecipe } from "@/models/Recipe";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AppState {
  recipes : IRecipe[];
  blogs : IBlog[];
  isLoading : boolean;
  fetchSingleRecipe : Function;
  fetchSingleBlog : Function;
  searchRecipes : Function;
  searchBlogs : Function;
}

const defaultState: AppState = {
  recipes: [],
  blogs: [],
  isLoading: true,
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
    const [recipes, setRecipes] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRecipes = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes`
      );
      const data = await response.json();
      setRecipes(data);
      setIsLoading(false);
    };

    const fetchBlogs = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`
      );
      const data = await response.json();
      setBlogs(data);
      setIsLoading(false);
    };

    const fetchSingleRecipe = async (id : any) => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes/${id}`
      );
      const data = await response.json();
      setIsLoading(false);
      return data;
    };

    const fetchSingleBlog = async (id : any) => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`
      );
      const data = await response.json();
      setIsLoading(false);
      return data;
    };

    const searchRecipes = async (query : string) => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes/search?query=${query}`
      );
      const data = await response.json();
      setIsLoading(false);
      return data;
    };

    const searchBlogs = async (query : string) => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/search?query=${query}`
      );
      const data = await response.json();
      setIsLoading(false);
      return data;
    };

    useEffect(() => {
      fetchRecipes();
      fetchBlogs();
    }, []);

  const state: AppState = {
    recipes,
    blogs,
    isLoading,
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
