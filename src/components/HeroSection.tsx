import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import hero from "../../public/assets/images/fade_hero.jpg";

const HeroSection = () => {
  useEffect(() => {
    ScrollReveal().reveal(".hero-text", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });
  }, []);

  return (
    <section
      className="hero bg-cover bg-center h-screen relative flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url("${hero.src.toString()}")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-chicago_makers mb-4 hero-text">
          {"Fade's Recipes"}
        </h1>
        <p className="text-lg md:text-2xl font-open_sans hero-text">
          Your one-stop destination for delicious recipes
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
