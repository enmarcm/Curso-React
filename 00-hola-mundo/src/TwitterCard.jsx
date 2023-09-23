import './TwitterCard.css'
const TwitterCard = ({formatUser, userName, name, isFollowing}) => {
  const imageUrl = `https://unavatar.io/${userName}/`

  const userFormatted = formatUser(userName)

  return (
    <article className="tw-followCard">
      <header className="tw-follorCard-header">
        <img
          src={imageUrl}
          alt={`Avatar de ${name}`}
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{userFormatted}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">{isFollowing ? 'Dejar de Seguir' : 'Seguir'}</button>
      </aside>
    </article>
  );
};

export default TwitterCard