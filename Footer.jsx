
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 font-sans text-gray-700 dark:text-gray-300">
      {/* Top yellow nav bar */}
      <div className="bg-yellow-300 py-6 px-4 lg:px-12 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-800 dark:text-gray-900">
        <div className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6 uppercase font-semibold tracking-wide">
          <a href="#farmers">Farmers</a>
          <span className="hidden lg:block">•</span>
          <a href="#organic">Organic</a>
          <span className="hidden lg:block">•</span>
          <a href="#foods">Foods</a>
          <span className="hidden lg:block">•</span>
          <a href="#product">Product</a>
        </div>

        <div className="flex flex-col sm:flex-row items-center mt-4 lg:mt-0 space-y-2 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <div className="bg-white dark:bg-gray-100 p-2 rounded-full">📞</div>
            <span>+1(212) 255-511</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-white dark:bg-gray-100 p-2 rounded-full">✉️</div>
            <span>noreply@pbminfotech.com</span>
          </div>
        </div>
      </div>

      {/* Middle content area */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and description */}
        <div className="space-y-4 max-w-md">
          <div className="flex items-center space-x-2">
            <img
              src="https://naturegold.in/wp-content/uploads/2024/11/nature_gold1.png.webp"
              alt="Logo"
              className="w-32 h-20 object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus. In vitae sapien
            viverra est Duo ei ullum inani senserit.
          </p>
          <div className="flex space-x-3 pt-2">
            {["f", "x", "in", "ig"].map((icon) => (
              <div
                key={icon}
                className="bg-gray-100 dark:bg-gray-700 w-9 h-9 rounded-full flex items-center justify-center text-green-700 font-bold text-sm hover:bg-green-100 dark:hover:bg-green-600 transition"
              >
                {icon.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* Center headline */}
        <div className="max-w-lg">
          <h3 className="text-xl font-semibold mb-4">
            Professional & modern
          </h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt fuga dolores pariatur obcaecati ab nam. Illum cupiditate sequi incidunt sunt error quo..
          </p>
        </div>

        {/* Right: Useful info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Useful Link</h4>
            <ul className="space-y-1">
              <li><a href="#company" className="hover:text-green-700">Company</a></li>
              <li><a href="#about" className="hover:text-green-700">About</a></li>
              <li><a href="#contact" className="hover:text-green-700">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Working Time</h4>
            <ul className="space-y-1">
              <li>Mon - Fri: 9.00am - 5.00pm</li>
              <li>Saturday: 10.00am - 6.00pm</li>
              <li>Sunday Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Our Address</h4>
            <ul className="space-y-1">
              <li>Old Westbury 256, New York</li>
              <li>11201, United States</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom legal links */}
      <div className="border-t border-gray-200 dark:border-gray-700 text-center py-4 text-sm text-gray-500 dark:text-gray-400 px-4">
        <div className="space-x-2">
          <span className="hover:text-green-700 cursor-pointer">Terms & Conditions</span>
          |
          <span className="hover:text-green-700 cursor-pointer">Privacy Policy</span>
        </div>
        <div className="mt-2">
          © 2024 <span className="text-green-700 font-medium">NatureGold</span>, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
