"use client";

import { useAppContext } from "@/hooks/AppContext";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import PopularCategories from "@/components/PopularCategories";
import RecentlyAddedRecipes from "@/components/RecentlyAddedRecipes";
import LatestFromBlog from "@/components/LatestFromBlog";
import NewsletterSection from "@/components/NewsletterSection";

const Home = () => {
  const { recipes, blogs, isLoading } = useAppContext();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <Container>
        <PopularCategories />
        <RecentlyAddedRecipes recipes={recipes} />
        <LatestFromBlog blogs={blogs} />
      </Container>
      <NewsletterSection />
    </div>
  );
};

export default Home;
