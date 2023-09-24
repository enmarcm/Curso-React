import { useState } from "react";
import "./TwitterCard.css";
const TwitterCard = ({ formatUser, userName, children }) => {
  const imageUrl = `https://unavatar.io/${userName}/`;

  const [isFollowing, setIsFollowing] = useState(false);
  const userFormatted = formatUser(userName);
  const text = isFollowing ? "Dejar de Seguir" : "Seguir";
  const btnClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleOnClick = () => setIsFollowing(!isFollowing)

  return (
    <article className="tw-followCard">
      <header className="tw-follorCard-header">
        <img
          src={imageUrl}
          alt={`Avatar de ${children}`}
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">{userFormatted}</span>
        </div>
      </header>

      <aside>
        <button className={btnClassName} onClick={handleOnClick}>{text}</button>
      </aside>
    </article>
  );
};

export default TwitterCard;
