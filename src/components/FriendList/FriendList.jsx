import { FriendListItem } from "../FriendListItem/FriendListItem";
import style from "../FriendList/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};
