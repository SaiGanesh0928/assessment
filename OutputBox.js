import React from "react";

export default function OutputBox({ label, text }) {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded shadow">
      <h2 className="font-bold text-lg">{label}</h2>
      <p className="mt-2 whitespace-pre-wrap">{text}</p>
    </div>
  );
}