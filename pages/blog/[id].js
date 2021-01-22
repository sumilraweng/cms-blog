import {
  getHeader,
  getBlogByParams,
  getFooter,
} from "../../helper/fetchAllEmployee";

import Head from "next/head";
import Navigation from "../../components/Navigation";
import BlogComponent from "../../components/BlogComponent";
import Footer from "../../components/footer";
function Blog(props) {
  return props.isError ? (
    <h1>Backend server is not responding try again later</h1>
  ) : (
    <div>
      <Head>
        <title>CMS Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>{" "}
      <header>
        <Navigation data={props.header} />
      </header>
      <BlogComponent blog={props} />
      <Footer data={props.footer} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    let header = await getHeader();
    let data = await getBlogByParams({ id: context.params.id });
    let footer = await getFooter();
    return {
      props: {
        header: header[0],
        blog: data[0],
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

export const getStaticPaths = async () => {
  let data = await getBlogByParams();
  let paths = [
    ...data[0].map((blog) => {
      return {
        params: {
          id: `${blog.uid}`,
        },
      };
    }),
  ];

  return {
    paths,
    fallback: false,
  };
};

export default Blog;
