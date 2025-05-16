import React from "react";

export function ProblemSection() {
  return (
    <section className="h-[calc(100vh-10rem)] border-b grid grid-cols-3">
      <div className="py-20 col-span-1 border-r px-5">
        <h2 className="text-xl md:text-2xl font-bold">
          Struggling to Create Viral Content?
        </h2>
      </div>
      <div className="col-span-2">
        <div className="p-8 border-b text-left">
          <p className="text-muted-foreground text-xl font-semibold">
            <span className="dark:text-white text-black">
              Hours of Editing.{" "}
            </span>
            Traditional video editing takes hours of your time that could be
            spent creating.
          </p>
        </div>
        <div className="p-8 border-b text-left">
          <p className="text-muted-foreground text-xl font-semibold">
            <span className="dark:text-white text-black">
              Complex Software.{" "}
            </span>
            Professional editing software has a steep learning curve and is hard
            to master.
          </p>
        </div>
        <div className="p-8 text-left">
          <p className="text-muted-foreground text-xl font-semibold">
            <span className="dark:text-white text-black">Manual Uploads. </span>
            Converting and uploading to multiple platforms manually is tedious
            and error-prone.
          </p>
        </div>
      </div>
    </section>
  );
}
