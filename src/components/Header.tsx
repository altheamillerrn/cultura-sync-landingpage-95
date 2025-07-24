import React from "react";
import headerImage from "@/assets/header-image.png";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <img 
          src={headerImage} 
          alt="CulturaSync - Oncology Excellence Consulting" 
          className="w-full h-auto max-h-32 object-contain"
        />
      </div>
    </header>
  );
};

export default Header;