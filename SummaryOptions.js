import React from "react";

export default function SummaryOptions({ generate }) {
  return (
    <div className="flex gap-4 mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => generate("short")}>Short</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => generate("medium")}>Medium</button>
      <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={() => generate("long")}>Long</button>
    </div>
  );
}