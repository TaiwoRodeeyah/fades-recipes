import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import newsletterBg from "../../public/assets/images/newsletter_bg.jpg";

const NewsletterSection = () => {
  useEffect(() => {
    ScrollReveal().reveal(".newsletter-text", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e : any) => {
    e.preventDefault();
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <section
      className="newsletter bg-cover bg-fixed relative py-20 px-3 text-white text-center"
      style={{ backgroundImage: `url("${newsletterBg.src.toString()}")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-chicago_makers mb-4 newsletter-text">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg md:text-2xl font-open_sans mb-8 newsletter-text">
            Stay updated with our latest recipes and blog posts
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col items-center"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 p-3 max-w-[90%] w-80 md:w-96 rounded-lg text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 p-3 max-w-[90%] w-80 md:w-96 rounded-lg text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#c06c84] p-3 max-w-[90%] w-80 md:w-96 rounded-lg hover:bg-c06c84 text-white"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="mt-4">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
