import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "Pages", path: "/pages" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];


  return (
    <header className="bg-white dark:bg-gray-900 shadow-md w-full sticky top-0 z-50 font-sans text-black dark:text-white">
      {/* TOP NAV BAR */}
      <div className="w-full flex items-center justify-between py-4 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-44">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img 
            src="https://naturegold.in/wp-content/uploads/2024/11/nature_gold1.png.webp"
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 items-center text-sm font-semibold text-gray-800 dark:text-white uppercase">
          {navLinks.map((link, i, arr) => (
  <div key={link.name} className="flex items-center space-x-2 cursor-pointer">
    <div
      onClick={() => navigate(link.path)}
      className={`hover:text-green-600 ${
        link.name === "Home" ? "text-green-600" : ""
      }`}
    >
      {link.name}
    </div>
    {i !== arr.length - 1 && (
      <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
    )}
  </div>
))}

        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Phone Info */}
          <div className="hidden md:flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="text-green-600 text-lg">📞</span>
            <div>
              <div className="font-semibold">Call us Now</div>
              <div>+1(212)255-511</div>
            </div>
          </div>

          {/* Search */}
          <button className="text-gray-600 dark:text-gray-300 hover:text-green-600 text-xl transition-all">
            🔍
          </button>

          {/* Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-5 py-2 rounded-full font-semibold transition-all duration-300">
            Get In Touch ✈️
          </button>

          <div className="flex justify-center border-gray-300 dark:border-gray-700">
            <button
              onClick={toggleTheme}
              className="text-sm font-medium px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              title={
                theme === "light" ? "Enable dark mode" : "Enable light mode"
              }
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="lg:hidden text-3xl text-gray-700 dark:text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 shadow-md text-black dark:text-white">
          {navLinks.map((link) => (
  <div
    key={link.name}
    onClick={() => {
      setIsMobileMenuOpen(false);
      navigate(link.path);
    }}
    className="block font-medium hover:text-green-600 cursor-pointer"
  >
    {link.name}
  </div>
))}


          {/* Mobile CTA Buttons */}
          <div className="flex flex-col space-y-3 mt-4">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white text-sm py-2 rounded-full font-semibold">
              Get In Touch ✈️
            </button>
            <div className="flex items-center justify-center text-sm">
              📞 <span className="ml-2">+1(212)255-511</span>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-center pt-2 border-t border-gray-300 dark:border-gray-700 pt-4">
            <button
              onClick={toggleTheme}
              className="text-sm font-medium px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              title={
                theme === "light" ? "Enable dark mode" : "Enable light mode"
              }
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
