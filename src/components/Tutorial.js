import React, { useState } from "react";

export const Tutorial = () => {
  const [tutorialVisible, setTutorialVisible] = useState(true);
  const closeModal = () => {
    setTutorialVisible(false);
    console.log("hi");
  }
  
  if (!tutorialVisible) return null;



  return (
    <div className="absolute centered tutorial">
      <div className="modal-content">
        <h3>Welcome to Pixel Scape <img alt="logo" src="../../favicon.ico"/></h3>
        <p>1. Press 1-5 to switch between the 5 types of blocks: Grass, Wood, Log, Glass, and Dirt.</p>
        <p>2. Navigate the world using your mouse and W, A, S, D.</p>
        <p>3. Use Left Click to place blocks.</p>
        <p>4. Use Alt + Click to remove blocks.</p>
        <p>5. Click Save to store your world in your browser's local storage.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};
