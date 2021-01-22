import styles from "../styles/Navigation.module.scss";

const Navigation = (props) => {
  const width = 200;
  const height = 100;

  return (
    <div className={styles["navigation-sec"]}>
      <div className="img-logo">
        <img
          src={props.data[0].file.url}
          alt="logo"
          width={width}
          height={height}
        />
      </div>

      <nav className={styles["navigation-tab"]}>
        <ul>
          <li className={styles["nav-item"]}>
            {/* <a href={"props.data[0].group.link.href"}> */}
            <a href={"/"}> {props.data[0].group.link.title}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
