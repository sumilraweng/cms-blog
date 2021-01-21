import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getBlogByParams } from "../helper/fetchAllEmployee";
import Dashboard from "../components/Dashboard";

function Home(props) {
  // console.log(EmployeeList);
  return (
    <div className={styles.container}>
      <Dashboard blog={props.data} />
    </div>
  );
}

export const getStaticProps = async () => {
  let allBlogs = await getBlogByParams();
  return {
    props: {
      data: allBlogs[0],
    },
  };
};
export default Home;
