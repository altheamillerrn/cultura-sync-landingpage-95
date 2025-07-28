import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, X, Loader2 } from "lucide-react";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <DialogTitle>Schedule Your Consultation</DialogTitle>
                <DialogDescription>
                  Select an available time slot for your oncology excellence assessment
                </DialogDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="relative w-full h-full overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Loading calendar...</p>
              </div>
            </div>
          )}
          
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2JPKcQUIA8HpXN98_fAtGfnKeCACQGcdIcGANDRwudK1fyOYnc9MC-lDDugXkMl4Cl1a6mPk07?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            onLoad={handleIframeLoad}
            title="Google Calendar Appointment Scheduling"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};