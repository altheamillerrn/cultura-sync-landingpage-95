import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-primary/10 border-b border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
              CulturaSync
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Transforming Cancer Care Through Evidence-Based Excellence
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;