import React, { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";

const Header = () => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processLogo = async () => {
      try {
        // Load the original image
        const response = await fetch("/lovable-uploads/81ddb678-5578-49f8-9a50-fdcf9eaf9bbf.png");
        const blob = await response.blob();
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        
        setProcessedLogoUrl(processedUrl);
        setIsProcessing(false);
      } catch (error) {
        console.error("Failed to process logo:", error);
        // Fallback to original image
        setProcessedLogoUrl("/lovable-uploads/81ddb678-5578-49f8-9a50-fdcf9eaf9bbf.png");
        setIsProcessing(false);
      }
    };

    processLogo();

    // Cleanup function to revoke object URL
    return () => {
      if (processedLogoUrl && processedLogoUrl.startsWith('blob:')) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {isProcessing ? (
          <div className="h-12 w-32 bg-muted animate-pulse rounded"></div>
        ) : (
          <img 
            src={processedLogoUrl || "/lovable-uploads/81ddb678-5578-49f8-9a50-fdcf9eaf9bbf.png"} 
            alt="CulturaSync Logo" 
            className="h-12 w-auto"
          />
        )}
      </div>
    </header>
  );
};

export default Header;