import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import styles from "./footer.module.scss";

function Footer(props) {
  const link = props.data[0].social_media_link;
  return (
    <div className={styles["footer"]}>
      <ul>
        <li>
          {" "}
          <a href={link[2].href}>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={link[0].href}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={link[1].href}>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
