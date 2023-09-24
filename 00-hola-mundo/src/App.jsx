import TwitterCard from "./TwitterCard.jsx";
export const App = () => {
  const setArroba = (userName) => `@${userName}`;

  const enmarcm = { userName: "enmarcm"};
  const midudev = { userName: "midudev"};

  return (
    <div className="app">
      <TwitterCard formatUser={setArroba} {...midudev}>
        Miguel Angel Duran
      </TwitterCard>
      <TwitterCard formatUser={setArroba} {...enmarcm}>
        Enmanuel Ramon Colina
      </TwitterCard>
    </div>
  );
};
