import React, { useState } from "react";

export const Tutorial = () => {
  const [tutorialVisible, setTutorialVisible] = useState(true);
  const closeModal = () => {
    setTutorialVisible(false);
    console.log("hi");
  }
  
  if (!tutorialVisible) return null;



  return (
    <div>
    <div className="tutorial">
      <div className="modal-content">
        <h3>Welcome to Pixel Scape <img alt="logo" src="../../favicon.ico"/></h3>
        <p>1. Press 1-5 to switch between the 5 types of blocks: Dirt, Grass, Glass, Wood, and Log.</p>
        <p>2. Navigate the world using W, A, S, D and your mouse.</p>
        <p>3. Use Left Click to place blocks.</p>
        <p>4. Use Alt + Click to remove blocks.</p>
      </div>
      <div className="modal-signs">
        Built with 🖤 and React by thunderfreak
        <div className="modal-socials">
          <a target="blank"href="https://www.linkedin.com/in/sohambhattacharjee/">LinkedIn </a>
          <a target="blank"href="https://www.github.com/thunderfreak/">Github</a>
        </div>
      </div>
    </div>
    <button className="absolute centered btn btn-secondary" onClick={closeModal}>Click to Start</button>
    </div>
  );
};
