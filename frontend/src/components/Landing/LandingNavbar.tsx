import React from "react";
import { Button } from "../ui/button";

export default function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-semibold">
            Lumora.
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"} size={"sm"}>Login</Button>
          <Button variant="default" size={"sm"}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
