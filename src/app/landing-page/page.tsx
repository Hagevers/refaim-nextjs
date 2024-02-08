import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-hero-pattern bg-no-repeat bg-cover flex flex-col">
      <Navbar />
      <section className="flex flex-col justify-center place-items-center flex-1">
        <div className="flex flex-col h-full w-full justify-center place-items-center flex-1 text-white">
          <h1 className="font-bold p-2">על מנת להצטרף לעמותה</h1>
          <Button
            className="bg-green-900 hover:bg-green-700 text-white p-8"
            name="join-foundation"
          >
            {" "}
            לחץ כאן
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
