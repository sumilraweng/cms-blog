import Image from "../common/Image";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
// import { Link } from "react-router-dom";
import styles from "./BlogComponent.module.scss";
function BlogComponent(props) {
  return (
    // <h1>sumil </h1>
    <div className={styles["blog"]}>
      <div className={styles["blog-container"]}>
        <div className={styles["blog-tite"]}>
          <Heading>{props.blog.blog[0].title}</Heading>
        </div>
        <div className={styles["blog-image"]}>
          <Image
            src={props.blog.blog[0].blog_image.url}
            alt={props.blog.blog[0].title}
          />
        </div>
        <div className={styles["blog-content"]}>
          <Paragraph data={props.blog.blog[0].blog_content} />{" "}
        </div>
      </div>
      <div className={styles["releated-links"]}>
        <ul>
          {props.blog.blog[0].related_links.map((link, index) => {
            return (
              <li key={`${link.uid}-${index}`}>
                <a href={`/blog/${link.uid}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BlogComponent;
