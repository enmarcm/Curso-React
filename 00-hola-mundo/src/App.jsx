import TwitterCard from "./TwitterCard.jsx";
export const App = () => {
  const setArroba = (userName) => `@${userName}`;

  const enmarcm = { userName: "enmarcm", isFollowing: true };
  const midudev = { userName: "midudev", isFollowing: false };

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
