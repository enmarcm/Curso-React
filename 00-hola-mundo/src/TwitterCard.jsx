import './TwitterCard.css'
const TwitterCard = () => {
  return (
    <article className="tw-followCard">
      <header className="tw-follorCard-header">
        <img
          src="https://unavatar.io/midudev/"
          alt="Avatar de Midudev"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>Miguel Angel Duran</strong>
          <span className="tw-followCard-infoUserName">@midudev</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
};

export default TwitterCard