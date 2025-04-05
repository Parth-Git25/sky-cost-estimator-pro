
import React from "react";
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-construction-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Building2 className="h-8 w-8 mr-2" />
          <Link to="/" className="text-xl md:text-2xl font-bold">
            SkyCost Dashboard
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-1 md:space-x-6 text-sm md:text-base">
            <li>
              <Link
                to="/"
                className="px-3 py-2 rounded-md hover:bg-construction-accent transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/calculator"
                className="px-3 py-2 rounded-md hover:bg-construction-accent transition-colors"
              >
                Calculate Cost
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md hover:bg-construction-accent transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
