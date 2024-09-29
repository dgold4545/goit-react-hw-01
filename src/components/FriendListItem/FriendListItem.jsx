import clsx from "clsx";

import styles from "./FriendListItem.module.css";

export default function FriendListItem({
  friendData: { avatar, name, isOnline },
}) {
  const textModify = clsx(styles.status, {
    [styles.textOnline]: isOnline,
    [styles.textOffline]: !isOnline,
  });

  return (
    <div className={styles.listItemBox}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.title}>{name}</p>
      <p className={textModify}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
