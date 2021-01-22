import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import {
  getBlogByParams,
  getHeader,
  getFooter,
} from "../helper/fetchAllEmployee";
import Dashboard from "../components/Dashboard";

function Home(props) {
  return props.isError ? (
    <h1>Backend server is not responding try again later</h1>
  ) : (
    <div>
      <Head>
        <title>CMS Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navigation data={props.header} />
      </header>
      <div className={styles.container}>
        <Dashboard blog={props.data} />
      </div>
      <Footer data={props.footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    let header = await getHeader();
    let allBlogs = await getBlogByParams();
    let footer = await getFooter();
    return {
      props: {
        header: header[0],
        data: allBlogs[0],
        footer: footer[0],
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        isError: true,
      },
    };
  }
};
export default Home;
