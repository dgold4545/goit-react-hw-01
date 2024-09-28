import Profile from "../Profile/Profile";

import userData from "../../userData.json";

import styles from "./App.module.css";

export default function App() {
  console.log(userData);

  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}
