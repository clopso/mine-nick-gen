import React, { useState } from "react";
import { saveAs } from "file-saver";
import { FaGithub } from "react-icons/fa";
import "./App.css";

export default function App() {
  const [nickname, setNickname] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.7);

  const handleGenerate = async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!nickname) {
      return;
    }

    try {
      await document.fonts.load("40px Minecraft");
      console.log("Font loaded");
    } catch (error) {
      console.error("Font failed to load:", error);
      return;
    }

    context.font = "100px Minecraft";
    const textWidth = context.measureText(nickname).width;
    const textHeight = 100;

    canvas.width = textWidth + 40;
    canvas.height = textHeight + 20;

    context.fillStyle = "#000000";
    context.globalAlpha = backgroundOpacity;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = "100px Minecraft";
    context.fillStyle = "#ffffff";
    context.globalAlpha = 1;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(nickname, canvas.width / 2, canvas.height / 2);

    const dataURL = canvas.toDataURL("image/png");
    setImageURL(dataURL);
  };

  const handleDownload = () => {
    if (imageURL) {
      saveAs(imageURL, "nickname.png");
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Nick2Pic</h1>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter your nickname"
          maxLength="12"
          className="input"
        />
        <div className="slider-container">
          <label htmlFor="background-opacity">Background Opacity</label>
          <input
            type="range"
            id="background-opacity"
            min="0"
            max="1"
            step="0.1"
            value={backgroundOpacity}
            onChange={(e) => setBackgroundOpacity(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button onClick={handleGenerate} className="button primary">
            Generate PNG
          </button>
          <button
            onClick={handleDownload}
            disabled={!imageURL}
            className={`button ${imageURL ? "success" : "disabled"}`}
          >
            Download PNG
          </button>
        </div>
        {imageURL && (
          <div className="image-preview">
            <img src={imageURL} alt="Generated Nickname" />
          </div>
        )}
      </div>
      <div className="ad-container">
        <p>Advertisement</p>
        <div className="ad-placeholder">Your Ad Here</div>
      </div>
      <div className="description-block">
        <h2>About Nick2Pic</h2>
        <p>
        Create a unique Minecraft nickname banner.  Customize the opacity, download a high-quality PNG for your picture, and stand out online. Nick2Pic: Design your perfect Minecraft identity. Try it now!
        </p>
      </div>
      <footer className="footer">
        <p>Follow us on GitHub:</p>
        <a href="https://github.com/clopso" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </footer>
    </div>
  );
}
