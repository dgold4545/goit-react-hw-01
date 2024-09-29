import styles from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.border}>
      <div className={styles.flexContainer}>
        <img src={image} alt={name} />
        <p className={styles.textTitle}>{name}</p>
        <p className={styles.textModify}>@{tag}</p>
        <p className={styles.textModify}>{location}</p>
      </div>

      <ul className={styles.profileList}>
        <li className={styles.profileItems}>
          <span>Followers</span>
          <span className={styles.textBold}>{followers}</span>
        </li>

        <li className={styles.profileItems}>
          <span>Views</span>
          <span className={styles.textBold}>{views}</span>
        </li>

        <li className={styles.profileItems}>
          <span>Likes</span>
          <span className={styles.textBold}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
