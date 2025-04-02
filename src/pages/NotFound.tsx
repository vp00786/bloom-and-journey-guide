
import React from "react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-8">It looks like we took a wrong turn in our journey!</p>
        
        <div className="mb-8">
          <div className="text-8xl animate-float">🧭</div>
        </div>
        
        <Link to="/">
          <Button size="lg" className="bg-primary hover:bg-primary/80">
            Back to the Start
          </Button>
        </Link>
      </div>
    </AppLayout>
  );
};

export default NotFound;
