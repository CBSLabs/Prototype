import React from "react";
import Pill from "../Pill";

export function ProblemSection() {
  return (
    <section className="h-[calc(100vh-10rem) border-b">
      <div className="py-20 col-span-1 px-5 border-b">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Struggling to Create Viral Content?
        </h2>
      </div>
      <div className="">
        <div className="p-8 border-b text-left">
          <p className="text-muted-foreground text-xl font-semibold">
            <Pill
              classname="text-blue-400 bg-blue-500/30"
              text="Hours of Editing"
            />{" "}
            Traditional video editing takes hours of your time that could be
            spent creating.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="p-8 text-left border-r">
            <p className="text-muted-foreground text-xl font-semibold">
              <span className="dark:text-white text-black">
                <Pill
                  classname="text-purple-400 bg-purple-500/30"
                  text="Complex Software"
                />{" "}
              </span>
              Professional editing software has a steep learning curve and is
              hard to master.
            </p>
          </div>
          <div className="p-8 text-left">
            <p className="text-muted-foreground text-xl font-semibold">
              <span className="dark:text-white text-black">
                <Pill
                  classname="text-green-400 bg-green-500/30"
                  text="Manual Upload"
                />{" "}
              </span>
              Converting and uploading to multiple platforms manually is tedious
              and error-prone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
