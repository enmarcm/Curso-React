import { useState } from "react";
import TwitterCard from "./TwitterCard.jsx";
export const App = () => {
  const setArroba = (userName) => `@${userName}`;

  // const enmarcm = { userName: "enmarcm"};
  // const midudev = { userName: "midudev"};

  return (
    <div className="app">
      <TwitterCard formatUser={setArroba} userName='midudev' >
        Miguel Angel Duren
      </TwitterCard>
      <TwitterCard formatUser={setArroba} userName='enmarcm'>
        Enmanuel Ramon Colina
      </TwitterCard>
      <TwitterCard formatUser={setArroba} userName='vegetta777'>
        Samuel de Luque
      </TwitterCard>
    </div>
  );
};
