import FriendListItem from "../FriendListItem/FriendListItem";

import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.listBox}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.itemBox}>
          <FriendListItem friendData={friend} />
        </li>
      ))}
    </ul>
  );
}
