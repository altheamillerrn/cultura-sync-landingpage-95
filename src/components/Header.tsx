import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-primary/10 border-b border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="text-center max-w-4xl">
            <div className="mb-2">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-accent tracking-wide">
                CulturaSync
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Better Systems. Braver Culture.{" "}
              <span className="text-accent">Human-Centered Care.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed font-medium">
              Helping oncology teams reduce burnout, improve communication, 
              and deliver care that truly connects.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;