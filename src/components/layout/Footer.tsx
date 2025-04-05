
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-construction-darkGray text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">SkyCost Dashboard</h3>
            <p className="text-sm mt-1">Professional Skyscraper Cost Estimation</p>
          </div>
          <div className="text-sm">
            <p>&copy; {currentYear} SkyCost Dashboard. All rights reserved.</p>
            <p className="mt-1">Helping builders estimate with precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
