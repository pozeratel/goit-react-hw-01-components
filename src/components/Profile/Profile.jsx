export const Profile = ({ username, tag, location, avatar, stats }) => {
  let id = 0;
  id += 1;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{"@" + tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li id={stats.folowers}>
          <span className="label">folowers</span>
          <span className="quantity">{stats.folowers}</span>
        </li>
        <li id={stats.views}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li id={stats.likes}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
