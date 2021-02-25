import styles from "../../styles/components/Profile.module.css";

export function Profile(): JSX.Element {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/flubyGit.png" alt="Felipe André" />
      <div>
        <strong>Felipe André</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
