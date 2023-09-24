import TwitterCard from "./TwitterCard.jsx";
export const App = () => {
  const setArroba = (userName) => `@${userName}`;

  return (
    <div className="app">
      <TwitterCard formatUser={setArroba} userName="midudev" isFollowing={true}>
        Miguel Angel Duran
      </TwitterCard>
      <TwitterCard formatUser={setArroba} userName="enmarcm" isFollowing={true}>
        Enmanuel Ramon Colina
      </TwitterCard>
    </div>
  );
};
