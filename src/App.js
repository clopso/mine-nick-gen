import React, { useState } from "react";
import { saveAs } from "file-saver";
import './App.css';
import './fonts/Minecraft.ttf';

export default function App() {
  const [nickname, setNickname] = useState("");
  const [imageURL, setImageURL] = useState(null);

  const handleGenerate = async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    // Wait for the font to load
    try {
      await document.fonts.load("40px Minecraft");
      console.log("Font loaded");
    } catch (error) {
      console.error("Font failed to load:", error);
      return;
    }
  
    // Set the font and measure the text size
    context.font = "120px Minecraft";
    const textWidth = context.measureText(nickname).width;
    const textHeight = 120; // We know the font size is 40px, so height is fixed
  
    // Set the canvas size based on the text dimensions
    canvas.width = textWidth + 40; // Add some padding to the sides
    canvas.height = textHeight + 10; // Add some padding to the top and bottom
  
    // Style the text and background
    context.fillStyle = "rgba(0, 0, 0, 0.5)"; // Black background with transparency
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    context.font = "120px Minecraft";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(nickname, canvas.width / 2, canvas.height / 2);
  
    // Convert canvas to image
    const dataURL = canvas.toDataURL("image/png");
    setImageURL(dataURL);
  };
  
  

  const handleDownload = () => {
    if (imageURL) {
      saveAs(imageURL, "nickname.png");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Minecraft Nickname Image Generate</h1>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter your nickname"
          className="bg-gray-800 text-white px-4 py-2 rounded w-full max-w-md"
        />
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={handleGenerate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Generate PNG
          </button>
          <button
            onClick={handleDownload}
            disabled={!imageURL}
            className={`py-2 px-4 rounded font-bold ${imageURL ? "bg-green-500 hover:bg-green-700 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}
          >
            Download PNG
          </button>
        </div>
        {imageURL && (
          <div className="mt-4">
            <img
              src={imageURL}
              alt="Generated Nickname"
              className="border border-gray-700 rounded"
            />
          </div>
        )}
        <div className="mt-8 bg-gray-900 text-gray-500 text-center py-4 w-full max-w-md">
          Placeholder for Google Ads
        </div>
      </div>
    </div>
  );
}