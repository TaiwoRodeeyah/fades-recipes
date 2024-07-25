import { useEffect, useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import newsletterBg from "../../public/assets/images/newsletter_bg.jpg";

const NewsletterSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ScrollReveal = require("scrollreveal").default;
      ScrollReveal().reveal(".newsletter-text", {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 200,
        reset: false,
      });
    }
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    if (!name || !email) {
      setMessage("Both fields are required");
      setIsError(true);
      setTimeout(() => {
        setMessage("");
      }, 5000);
      return;
    }
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });
      const data = await response.json();
      setMessage(data.message);
      setIsError(false);
    } catch (error) {
      setMessage("Subscription failed. Please try again.");
      setIsError(true);
    }
    setTimeout(() => {
      setMessage("");
    }, 5000);
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
            <div className="relative mb-4 max-w-[90%] w-80 md:w-96">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 w-full bg-gray-800 text-white rounded-lg pl-12"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#c06c84] p-2 rounded-full text-white" />
            </div>
            <div className="relative mb-4 max-w-[90%] w-80 md:w-96">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 w-full bg-gray-800 text-white rounded-lg pl-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#c06c84] p-2 rounded-full text-white" />
            </div>
            <button
              type="submit"
              className="bg-[#c06c84] p-3 max-w-[90%] w-80 md:w-96 rounded-lg hover:bg-[#b15872] text-white"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <div className="w-full flex items-center justify-center">
              <p
                className={`mt-4 max-w-[90%] w-80 px-2 rounded ${
                  isError ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {message}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
