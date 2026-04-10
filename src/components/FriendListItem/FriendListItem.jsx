export const FriendListItem = ({ avatar, name, isOnline }) => {
  const items = [avatar, name, isOnline];
  return (
    <li className="friend-item">
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </li>
  );
};
