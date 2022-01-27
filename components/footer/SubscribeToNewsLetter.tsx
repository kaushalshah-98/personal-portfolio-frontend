import React from "react";

export default function SubscribeToNewsLetter() {
  return (
    <div className="bg-gray-800">
      <h1 className="text-white text-center text-5xl py-10"> Subscribe to NewsLetter</h1>
      <div className="flex items-center justify-center pb-8">
        <input
          type="text"
          className="text-2xl focus:outline-none transition duration-75 w-96 py-8 px-4 bg-white border-black border-2 rounded-l-lg"
        />
        <button className="text-2xl py-8 px-16 text-white bg-black rounded-r-lg">Subscribe</button>
      </div>
    </div>
  );
}
