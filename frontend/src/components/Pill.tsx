import React from "react";

export default function Pill({
  classname,
  text,
}: {
  classname: string;
  text: string;
}) {
  return (
    <span className={`${classname} rounded-full px-4 py-1 text-sm leading-none`}>
      {text}
    </span>
  );
}
