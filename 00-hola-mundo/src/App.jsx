import { useState } from "react";
import TwitterCard from "./TwitterCard.jsx";
export const App = () => {
  const setArroba = (userName) => `@${userName}`;

  // const enmarcm = { userName: "enmarcm"};
  // const midudev = { userName: "midudev"};

  const users = [
    { userName: "enmarcm", name: "Enmanuel Ramon Colina", isFollowing: false },
    { userName: "midudev", name: "Miguel Angel Duren", isFollowing: false },
    { userName: "vegetta777", name: "Samuel de Luque", isFollowing: false },
    { userName: "wismichu", name: "Ismael Prego", isFollowing: true },
    { userName: "auronplay", name: "Raul Alvarez", isFollowing: true },
    { userName: "Rubiu5", name: "Ruben Doblas", isFollowing: true },
    { userName: "TheGrefg", name: "David Cánovas", isFollowing: true},
    { userName: "pokimanelol", name: "Imane Anys", isFollowing: true},
    { userName: "jack", name: "Jack Dorsey", isFollowing: true},
    { userName: "elonmusk", name: "Elon Musk", isFollowing: true},
    { userName: "BillGates", name: "Bill Gates", isFollowing: true},
  ];

  return (
    <div className="app">
      {/* <TwitterCard formatUser={setArroba} userName='midudev' >
        Miguel Angel Duren
      </TwitterCard>
      <TwitterCard formatUser={setArroba} userName='enmarcm'>
        Enmanuel Ramon Colina
      </TwitterCard>
      <TwitterCard formatUser={setArroba} userName='vegetta777'>
        Samuel de Luque
      </TwitterCard> */}

      {/* Aqui lo haremos con un foreach */}
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterCard
            isFollowing={isFollowing}
            userName={userName}
            formatUser={setArroba}
            key={userName}
          >
            {name}
          </TwitterCard>
        );
      })}
    </div>
  );
};
