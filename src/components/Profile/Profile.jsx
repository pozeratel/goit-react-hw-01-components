import style from "../Profile/Profile.module.css";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  let id = 0;
  id += 1;
  return (
    <div className={style.profile}>
      <div className="description">
        <img src={avatar} alt={username} className={style.img} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>{"@" + tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li className={style.statsItem} id={stats.followers}>
          <span className="label">folowers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={style.statsItem} id={stats.views}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={style.statsItem} id={stats.likes}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
