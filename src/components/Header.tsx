import React from "react";
import headerImage from "@/assets/header-image.png";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          <img 
            src={headerImage} 
            alt="CulturaSync - Transforming Cancer Care Through Evidence-Based Excellence" 
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;