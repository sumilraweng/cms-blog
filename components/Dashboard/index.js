import Card from "../Card";
import styles from "./dashboard.module.scss";
import { Link } from "next/link";

function Dashboard(props) {
  const blog = props.data.pop();
  console.log(blog);
  return (
    <div className={styles["blog-cards"]}>
      {/* {props.blog.map((blogElement) => (
        <Link className={styles["blog-link"]}>
          <Card
            src={blogElement.imageUrl}
            alt={blogElement.author}
            title={blogElement.title}
          />
        </Link>
      ))} */}
    </div>
  );
}
export default Dashboard;
