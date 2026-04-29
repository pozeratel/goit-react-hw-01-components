import style from "../FriendListItem/FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.friendItem}>
      <span className={isOnline ? style.online : style.offline}></span>
      <img className={style.avatar} src={avatar} alt={name} />
      <p className={style.name}>{name}</p>
    </li>
  );
};
