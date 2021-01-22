import BlogComponent from "../../components/BlogComponent";
import {
  getBlogByParams,
  getFooter,
  getHeader,
} from "../../helper/fetchAllEmployee";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
function Blog(props) {
  return props.isError ? (
    <h1>Backend server is not responding try again later</h1>
  ) : (
    <div>
      {" "}
      <header>
        <Navigation data={props.header} />
      </header>
      <BlogComponent blog={props} />
      <Footer data={props.footer} />
    </div>
  );
}

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
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  try {
    let data = await getBlogByParams({ id: context.params.id });
    let header = await getHeader();
    let footer = await getFooter();
    return {
      props: {
        data: data[0],
        header: header[0],
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

export default Blog;
