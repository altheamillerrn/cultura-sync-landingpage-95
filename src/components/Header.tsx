import React from "react";
import personalHeader from "@/assets/personal-header.png";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="w-full">
        <img 
          src={personalHeader} 
          alt="CulturaSync - Oncology Excellence Consulting" 
          className="w-full h-auto max-h-32 object-cover object-center"
        />
      </div>
    </header>
  );
};
export default Header;