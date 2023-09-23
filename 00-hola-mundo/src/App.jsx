import TwitterCard from "./TwitterCard.jsx";
export const App = () => {
  const setArroba = (userName) => `@${userName}`;

  return (
    <div className="app">
      <TwitterCard
        formatUser={setArroba}
        userName="midudev"
        name="Miguel Angel Pedroz"
        isFollowing={true}
      />
      <TwitterCard
        formatUser={setArroba}
        userName="enmarcm"
        name="Enmanuel Colina"
        isFollowing={true}
      />
      <TwitterCard
        formatUser={setArroba}
        userName="neiribetarrieta"
        name="Neiribet Arrieta"
        isFollowing={false}
      />
    </div>
  );
};
