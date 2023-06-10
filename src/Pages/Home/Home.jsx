import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructor/PopularInstructor";
import Extra from "./Extra/Extra";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <Helmet>
        <title>Singerella | Home</title>
      </Helmet>
      <button className="theme-toggle btn-warning" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <nav>
        {/* Navigation bar */}
      </nav>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Extra></Extra>
      <style>
        {`
        .theme-toggle {
          position: fixed;
          top: 10px;
          left: 10px;
          padding: 8px 16px;
          font-size: 14px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }

        .dark {
          /* Dark theme styles */
          background-color: #333;
          color: #fff;
        }

        .light {
          /* Light theme styles */
          background-color: #fff;
          color: #333;
        }
        `}
      </style>
    </div>
  );
};

export default Home;
